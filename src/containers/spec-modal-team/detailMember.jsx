import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

import { Button } from '../../components/SpecComponents';
import ModalLayout from '../../components/layouts/ModalLayout';
import useModal from '../../components/layouts/ModalLayout.hooks';
import IconUser from '../../components/IconUser';
import SelectorRelative from '../../components/basics/SelectorRelative';

import closeSource from '../../assets/images/icons/close.svg';
import dropArrowSource from '../../assets/images/icons/primary-arrow-down.svg';
import { CloseIcon } from '../profile-change-picture/ProfileChangePicture.styles';
import { VARIANTS_BUTTON } from '../../config/constants/button-variants';
import { getCheckListData } from './utils';
import ProjectInfoShare from './components/ProjectInfoShare';
import {
	onHideModal,
	onShowModal,
	onDeleteUser,
	onResendInvitation,
} from './actions';
import {
	OPTIONS_PERMISSIONS,
	TYPE_MODALS,
	STATUS_INVITATIONS,
} from './constants';
import {
	Container,
	ButtonCloseContainer,
	ContainerButtons,
	TitleConfigContainer,
	TitleConfig,
	InfoUserContainer,
	InfoUser,
	ItemInfo,
	PermisionLabel,
	IconArrowDown,
	DeleteUser,
	LabelDelete,
	IconDelete,
	Disclaimer,
	IconInfo,
	DescDisclaimer,
	EmailDesc,
	ResendLabel,
} from './styles';

const DetailMemberModal = ({ sections }) => {
	const dispatch = useDispatch();
	const { id: specID } = useParams();
	const [checklistData, setChecklistData] = useState(
		getCheckListData(sections),
	);
	const { detailMemberModal: show, detailMember } = useSelector(
		(state) => state.specModalTeam,
	);
	const [permission, setPermission] = useState(OPTIONS_PERMISSIONS[0]);
	const { onClose: handleClose, onExiting: handleExiting } = useModal({
		closeCallback: () => dispatch(onHideModal()),
	});

	const handleCancel = () => {
		handleClose();
		dispatch(onShowModal(TYPE_MODALS.TEAM_MODAL));
	};

	const handleDeleteUSer = () =>
		dispatch(
			onDeleteUser(
				specID,
				detailMember?.permission?.id,
				detailMember?.permission?.type,
			),
		);

	const handleResendInvitation = () =>
		dispatch(onResendInvitation(specID, detailMember?.permission?.id));

	useEffect(() => {
		if (detailMember && detailMember?.permission) {
			setPermission(
				OPTIONS_PERMISSIONS.find(
					(option) => option.value === detailMember?.permission.ability,
				),
			);
			setChecklistData(getCheckListData(sections, detailMember?.permission));
		}
	}, [detailMember]);

	return (
		<ModalLayout show={show} onClose={handleClose} onExiting={handleExiting}>
			<Container>
				<ButtonCloseContainer flexEnd>
					<CloseIcon alt="Cerrar" src={closeSource} onClick={handleClose} />
				</ButtonCloseContainer>

				{detailMember && (
					<InfoUserContainer>
						<IconUser user={detailMember?.user} size={100} fontSize={20} />
						<InfoUser>
							{detailMember?.user?.name && (
								<ItemInfo>{detailMember?.user?.name}</ItemInfo>
							)}
							{detailMember?.user?.company && (
								<ItemInfo>{detailMember?.user?.company}</ItemInfo>
							)}
							{detailMember?.user?.email && (
								<ItemInfo>{detailMember?.user?.email}</ItemInfo>
							)}
						</InfoUser>
						<div>
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
										<PermisionLabel fontSize={14}>
											{permission.label}
										</PermisionLabel>
										<IconArrowDown alt="" src={dropArrowSource} />
									</>
								}
							/>
						</div>
					</InfoUserContainer>
				)}

				<TitleConfigContainer>
					<TitleConfig>Partidas compartidas</TitleConfig>
					<DeleteUser onClick={handleDeleteUSer}>
						<LabelDelete>Eliminar usuario</LabelDelete>
						<IconDelete className="fas fa-trash" />
					</DeleteUser>
				</TitleConfigContainer>
				<ProjectInfoShare
					withChecks
					checklistData={checklistData}
					setChecklistData={setChecklistData}
				/>
				{detailMember?.user &&
					detailMember?.status === STATUS_INVITATIONS.WAITING && (
						<Disclaimer>
							<IconInfo className="fas fa-info-circle" />
							<DescDisclaimer>
								<EmailDesc>{detailMember?.user?.email}</EmailDesc> no ha
								aceptado aún la invitación a colaborar.{' '}
								<ResendLabel onClick={handleResendInvitation}>
									(Reenviar)
								</ResendLabel>
							</DescDisclaimer>
						</Disclaimer>
					)}
				{detailMember?.user &&
					detailMember?.status !== STATUS_INVITATIONS.WAITING && (
						<Disclaimer>
							<IconInfo className="fas fa-info-circle" />
							<DescDisclaimer>
								<EmailDesc>{detailMember?.user?.email}</EmailDesc> recibirá un
								correo indicando los cambios realizados en los permisos.
							</DescDisclaimer>
						</Disclaimer>
					)}
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
						onClick={() => console.log('guardar')}
					>
						Guardar
					</Button>
				</ContainerButtons>
			</Container>
		</ModalLayout>
	);
};

export default DetailMemberModal;
