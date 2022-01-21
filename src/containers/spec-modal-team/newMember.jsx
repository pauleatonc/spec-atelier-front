import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router';

import { Button } from '../../components/SpecComponents';
import ModalLayout from '../../components/layouts/ModalLayout';
import useModal from '../../components/layouts/ModalLayout.hooks';
import SelectorRelative from '../../components/basics/SelectorRelative';
import closeSource from '../../assets/images/icons/close.svg';
import dropArrowSource from '../../assets/images/icons/primary-arrow-down.svg';
import { CloseIcon } from '../profile-change-picture/ProfileChangePicture.styles';
import { VARIANTS_BUTTON } from '../../config/constants/button-variants';
import { useTextarea, useInput } from '../../components/inputs/Inputs.hooks';

import { OPTIONS_PERMISSIONS, EMAIL_REGEX, TYPE_MODALS } from './constants';
import ProjectInfoShare from './components/ProjectInfoShare';
import { getCheckListData, getDataForService } from './utils';
import {
	onShowModal,
	onHideModal,
	checkUserEmail,
	sendUserInvitation,
	hideDisclaimer,
} from './actions';
import {
	Container,
	ButtonCloseContainer,
	Title,
	SearcherContainer,
	Disclaimer,
	IconInfo,
	DescDisclaimer,
	EmailDesc,
	Label,
	InputMailContainer,
	Searcher,
	PermissionSelectorContainer,
	PermisionLabel,
	IconArrowDown,
	TitleConfigContainer,
	TitleConfig,
	Message,
	ContainerButtons,
	ErrorInput,
} from './styles';

const SpecModalNewMember = ({ sections }) => {
	const dispatch = useDispatch();
	const { id: projectID } = useParams();
	const [listEmails, setListEmails] = useState([]);
	const [inputMailInvalid, setInputMailInvalid] = useState(false);
	const [permission, setPermission] = useState(OPTIONS_PERMISSIONS[0]);
	const {
		project: { team },
	} = useSelector((state) => state.specDocument);
	const [checklistData, setChecklistData] = useState(
		getCheckListData(sections, null, team),
	);
	const {
		onChange: handleMailChange,
		set: setMailValue,
		value: mailValue,
	} = useInput('');
	const {
		onChange: handleMessageChange,
		set: setMessageValue,
		value: messageValue,
	} = useTextarea('');
	const { newMemberModal: show, nonExistentEmails } = useSelector(
		(state) => state.specModalTeam,
	);

	const showDisclaimer = nonExistentEmails.length;

	const { onClose: handleClose, onExiting: handleExiting } = useModal({
		closeCallback: () => dispatch(onHideModal()),
		exitingCallback: () => {
			setMessageValue('');
			setMailValue('');
			setChecklistData(getCheckListData(sections));
		},
	});

	const { isAllSelected, selectedSections, selectedItems } = getDataForService(
		checklistData,
	);

	const handleCancel = () => {
		handleClose();
		dispatch(onShowModal(TYPE_MODALS.TEAM_MODAL));
	};

	const handleBlur = ({ target: { value } }) => {
		const emailList = value.split(',').map((val) => val.trim());
		if (emailList.length && value.length) {
			if (emailList.every((email) => EMAIL_REGEX.test(email))) {
				setListEmails(emailList);
				setInputMailInvalid(false);
				dispatch(checkUserEmail(emailList));
			} else {
				setInputMailInvalid(true);
			}
		} else if (showDisclaimer) dispatch(hideDisclaimer());
	};

	const sendInvitation = () => {
		const invitation = {
			recipients: listEmails,
			sections: selectedSections,
			items: selectedItems,
			all: isAllSelected,
			ability: permission.value,
			...(messageValue && { message: messageValue }),
		};
		dispatch(sendUserInvitation(projectID, invitation));
	};

	useEffect(() => {
		setChecklistData(getCheckListData(sections, null, team));
	}, [team]);
	return (
		<ModalLayout show={show} onClose={handleClose} onExiting={handleExiting}>
			<Container>
				<ButtonCloseContainer>
					<Title>Invita a tu equipo al proyecto</Title>
					<CloseIcon alt="Cerrar" src={closeSource} onClick={handleClose} />
				</ButtonCloseContainer>

				<SearcherContainer>
					<Label>Compartir con:</Label>
					<InputMailContainer>
						<Searcher
							inputMailInvalid={inputMailInvalid}
							placeholder="Añade a un miembro del equipo"
							onBlur={handleBlur}
							onChange={handleMailChange}
							value={mailValue}
						/>
						{inputMailInvalid && (
							<ErrorInput>Formato de email inválido</ErrorInput>
						)}
					</InputMailContainer>
					<PermissionSelectorContainer>
						<SelectorRelative
							name="sort"
							hoverPrimaryColor
							showIconInfo
							maxHeight="180px"
							options={OPTIONS_PERMISSIONS}
							placeholder="HOLA"
							value={permission.id}
							onChange={setPermission}
							renderInput={
								<>
									<PermisionLabel>{permission.label}</PermisionLabel>
									<IconArrowDown alt="" src={dropArrowSource} />
								</>
							}
						/>
					</PermissionSelectorContainer>
				</SearcherContainer>
				{!!showDisclaimer && (
					<Disclaimer>
						<IconInfo className="fas fa-info-circle" />
						<DescDisclaimer>
							{showDisclaimer > 1 ? 'Los usuarios ' : 'El usuario '}{' '}
							<EmailDesc>{nonExistentEmails.join(' y ')}</EmailDesc>
							{showDisclaimer > 1 ? ' no son ' : ' no es '} parte de
							SpecAtelier, se {showDisclaimer > 1 ? ' les ' : ' '} enviará un
							correo para unirse y tener acceso al proyecto.
						</DescDisclaimer>
					</Disclaimer>
				)}
				<TitleConfigContainer>
					<TitleConfig>Partidas compartidas</TitleConfig>
				</TitleConfigContainer>
				<ProjectInfoShare
					withChecks
					checklistData={checklistData}
					setChecklistData={setChecklistData}
				/>
				<Message
					placeholder="Añade un mensaje (opcional)"
					value={messageValue || ''}
					onChange={handleMessageChange}
				/>
				<ContainerButtons>
					<Button
						variant={VARIANTS_BUTTON.CANCEL}
						width="120px"
						onClick={handleCancel}
					>
						Cancelar
					</Button>
					<Button
						variant={VARIANTS_BUTTON.PRIMARY}
						width="120px"
						onClick={sendInvitation}
						disabled={
							!listEmails.length ||
							inputMailInvalid ||
							(!selectedSections.length && !selectedItems.length)
						}
					>
						Enviar
					</Button>
				</ContainerButtons>
			</Container>
		</ModalLayout>
	);
};

export default SpecModalNewMember;
