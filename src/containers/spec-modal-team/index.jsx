import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Button } from '../../components/SpecComponents';
import ModalLayout from '../../components/layouts/ModalLayout';
import useModal from '../../components/layouts/ModalLayout.hooks';
import closeSource from '../../assets/images/icons/close.svg';
import addIconSource from '../../assets/images/icons/add-circle-outline-primary.svg';
import { CloseIcon } from '../profile-change-picture/ProfileChangePicture.styles';
import { VARIANTS_BUTTON } from '../../config/constants/button-variants';

import ProjectInfoShare from './components/ProjectInfoShare';
import UserTeamMail from './components/UserTeamMail';
import { onHideModal, onShowModal, setDetailMember } from './actions';
import { TYPE_MODALS } from './constants';
import {
	Container,
	ButtonCloseContainer,
	Title,
	ContainerButtons,
	TitleConfigContainer,
	TitleConfig,
	NewMemberButton,
	AddIcon,
	AddMemberLabel,
	ContainerTeam,
} from './styles';

const SpecModalTeam = () => {
	const dispatch = useDispatch();
	const { teamModal: show } = useSelector((state) => state.specModalTeam);
	const { onClose: handleClose, onExiting: handleExiting } = useModal({
		closeCallback: () => dispatch(onHideModal()),
	});
	const {
		project: { team },
	} = useSelector((state) => state.specDocument);

	const showNewMemberModal = () => {
		dispatch(onHideModal());
		dispatch(onShowModal(TYPE_MODALS.NEW_MEMBER_MODAL));
	};

	const handleClickMember = (member) => {
		dispatch(setDetailMember(member));
	};

	return (
		<ModalLayout show={show} onClose={handleClose} onExiting={handleExiting}>
			<Container>
				<ButtonCloseContainer mBottom={23}>
					<Title>Tu equipo</Title>
					<CloseIcon alt="Cerrar" src={closeSource} onClick={handleClose} />
				</ButtonCloseContainer>
				{team && (
					<ContainerTeam>
						{team.map((member) => (
							<UserTeamMail
								key={`${member?.permission?.id}-${member?.user?.email}-${member?.user?.id}`}
								member={member}
								onClick={handleClickMember}
							/>
						))}
					</ContainerTeam>
				)}
				<NewMemberButton onClick={showNewMemberModal}>
					<AddIcon alt="Agregar nuevo miembro" src={addIconSource} />
					<AddMemberLabel>Nuevo miembro</AddMemberLabel>
				</NewMemberButton>
				<TitleConfigContainer>
					<TitleConfig>Partidas compartidas</TitleConfig>
				</TitleConfigContainer>
				<ProjectInfoShare />
				<ContainerButtons>
					<Button
						variant={VARIANTS_BUTTON.PRIMARY}
						width="120px"
						onClick={handleClose}
					>
						Cerrar
					</Button>
				</ContainerButtons>
			</Container>
		</ModalLayout>
	);
};

export default SpecModalTeam;
