import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Button } from '../../components/SpecComponents';
import ModalLayout from '../../components/layouts/ModalLayout';
import useModal from '../../components/layouts/ModalLayout.hooks';
import closeSource from '../../assets/images/icons/close.svg';
import { CloseIcon } from '../profile-change-picture/ProfileChangePicture.styles';
import { VARIANTS_BUTTON } from '../../config/constants/button-variants';

import { onHideModal } from './actions';
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
	Permissions,
	TitleConfig,
	Message,
	ContainerButtons,
} from './styles';

const SpecModalTeam = () => {
	const dispatch = useDispatch();
	const { newMemberModal: show } = useSelector((state) => state.specModalTeam);
	const { onClose: handleClose, onExiting: handleExiting } = useModal({
		closeCallback: () => dispatch(onHideModal()),
		exitingCallback: () => {
			console.log('close');
		},
	});

	return (
		<ModalLayout show={show} onClose={handleClose} onExiting={handleExiting}>
			<Container>
				<ButtonCloseContainer>
					<CloseIcon alt="Cerrar" src={closeSource} onClick={handleClose} />
				</ButtonCloseContainer>
				<Title>Invita a tu equipo al proyecto</Title>
				<SearcherContainer>
					<Label>Compartir con:</Label>
					<Searcher placeholder="Añade a un miembro del equipo" />
					<Permissions>Puede ver</Permissions>
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

export default SpecModalTeam;
