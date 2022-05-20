import React from 'react';

import ModalLayout from '../../../../../../components/layouts/ModalLayout';
import { Button } from '../../../../../../components/SpecComponents';
import { VARIANTS_BUTTON } from '../../../../../../config/constants/button-variants';
import useModal from '../../../../../../components/layouts/ModalLayout.hooks';

import {
  Container,
  ContainerTextBody,
  TextBody,
  ButtonContainer,
} from './styles';

const ModalConfirmChanges = ({ show, setShowModal, onAccept }) => {
  const { onClose, onExiting } = useModal({
    closeCallback: () => setShowModal(false),
  });

  return (
    <ModalLayout show={show} onClose={onClose} onExiting={onExiting}>
      <Container>
        <ContainerTextBody>
          <TextBody>¿Estás seguro que deseas</TextBody>
          <TextBody>confirmar los cambios?</TextBody>
        </ContainerTextBody>
        <ButtonContainer>
          <Button width="115px" onClick={onClose}>
            Volver
          </Button>
          <Button
            width="115px"
            variant={VARIANTS_BUTTON.PRIMARY}
            onClick={onAccept}
          >
            Aceptar
          </Button>
        </ButtonContainer>
      </Container>
    </ModalLayout>
  );
};

export default ModalConfirmChanges;
