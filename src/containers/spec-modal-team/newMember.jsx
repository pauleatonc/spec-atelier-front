import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Button } from '../../components/SpecComponents';
import ModalLayout from '../../components/layouts/ModalLayout';
import useModal from '../../components/layouts/ModalLayout.hooks';
import SelectorRelative from '../../components/basics/SelectorRelative';
import closeSource from '../../assets/images/icons/close.svg';
import dropArrowSource from '../../assets/images/icons/primary-arrow-down.svg';
import { CloseIcon } from '../profile-change-picture/ProfileChangePicture.styles';
import { VARIANTS_BUTTON } from '../../config/constants/button-variants';
import { OPTIONS_PERMISION } from './constants';

import ProjectInfoShare from './components/ProjectInfoShare';
import { onHideModal, checkUserEmail } from './actions';
import {
	Container,
	ButtonCloseContainer,
	Title,
	SearcherContainer,
	DisclaimerUserNotSpec,
	IconInfo,
	DescDisclaimer,
	EmailDesc,
	Label,
	Searcher,
	PermissionSelectorContainer,
	PermisionLabel,
	IconArrowDown,
	TitleConfig,
	Message,
	ContainerButtons,
} from './styles';

const SpecModalNewMember = () => {
	const dispatch = useDispatch();
	const { newMemberModal: show } = useSelector((state) => state.specModalTeam);
	const [permision, setPermision] = useState(OPTIONS_PERMISION[0]);
	const { onClose: handleClose, onExiting: handleExiting } = useModal({
		closeCallback: () => dispatch(onHideModal()),
		exitingCallback: () => {
			console.log('exitingCallback in SpecModalNewMember');
		},
	});
	const handleBlur = ({ target: { value } }) => dispatch(checkUserEmail(value));

	return (
		<ModalLayout show={show} onClose={handleClose} onExiting={handleExiting}>
			<Container>
				<ButtonCloseContainer>
					<CloseIcon alt="Cerrar" src={closeSource} onClick={handleClose} />
				</ButtonCloseContainer>
				<Title>Invita a tu equipo al proyecto</Title>
				<SearcherContainer>
					<Label>Compartir con:</Label>
					<Searcher
						placeholder="Añade a un miembro del equipo"
						onBlur={handleBlur}
					/>
					<PermissionSelectorContainer>
						<SelectorRelative
							name="sort"
							hoverPrimaryColor
							maxHeight="180px"
							options={OPTIONS_PERMISION}
							placeholder="HOLA"
							value={permision.id}
							onChange={setPermision}
							renderInput={
								<>
									<PermisionLabel>{permision.label}</PermisionLabel>
									<IconArrowDown alt="" src={dropArrowSource} />
								</>
							}
						/>
					</PermissionSelectorContainer>
				</SearcherContainer>
				<DisclaimerUserNotSpec>
					<IconInfo className="fas fa-info-circle" />
					<DescDisclaimer>
						<EmailDesc>carolina.perez@gmail.com</EmailDesc> no es parte de
						SpecAtelier, se enviará un correo para unirse y tener acceso al
						proyecto.
					</DescDisclaimer>
				</DisclaimerUserNotSpec>
				<TitleConfig>¿Quién quieres compartir?</TitleConfig>
				<ProjectInfoShare withChecks />
				<Message placeholder="Añade un mensaje (opcional)" />
				<ContainerButtons>
					<Button
						variant={VARIANTS_BUTTON.CANCEL}
						width="120px"
						onClick={() => console.log('cancelar')}
					>
						Cancelar
					</Button>
					<Button
						variant={VARIANTS_BUTTON.PRIMARY}
						width="120px"
						onClick={() => console.log('enviar')}
					>
						Enviar
					</Button>
				</ContainerButtons>
			</Container>
		</ModalLayout>
	);
};

export default SpecModalNewMember;
