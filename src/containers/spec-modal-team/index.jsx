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
import { onHideModal, onShowModal } from './actions';
import { TYPE_MODALS } from './constants';
import {
	Container,
	ButtonCloseContainer,
	Title,
	ContainerButtons,
	TitleConfig,
	NewMemberButton,
	AddIcon,
	AddMemberLabel,
} from './styles';

const SpecModalTeam = () => {
	const dispatch = useDispatch();
	const { teamModal: show } = useSelector((state) => state.specModalTeam);
	const { onClose: handleClose, onExiting: handleExiting } = useModal({
		closeCallback: () => dispatch(onHideModal()),
		exitingCallback: () => {
			console.log('exitingCallback in SpecModalTeam');
		},
	});

	const showNewMemberModal = () => {
		dispatch(onHideModal());
		dispatch(onShowModal(TYPE_MODALS.NEW_MEMBER_MODAL));
	};

	return (
		<ModalLayout show={show} onClose={handleClose} onExiting={handleExiting}>
			<Container>
				<ButtonCloseContainer>
					<CloseIcon alt="Cerrar" src={closeSource} onClick={handleClose} />
				</ButtonCloseContainer>
				<Title>Tu Equipo</Title>
				<NewMemberButton onClick={showNewMemberModal}>
					<AddIcon alt="Agregar nuevo miembro" src={addIconSource} />
					<AddMemberLabel>Nuevo miembro</AddMemberLabel>
				</NewMemberButton>
				<TitleConfig>Partidas compartidas:</TitleConfig>
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
