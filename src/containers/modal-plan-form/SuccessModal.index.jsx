import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { onHideModal } from './actions';
import ModalLayout from '../../components/layouts/ModalLayout';
import useModal from '../../components/layouts/ModalLayout.hooks';
import CloseButton from '../../components/buttons/CloseButton';
import {
  Container,
  ContainerModalSuccess,
  IconSuccess,
  TitleSuccess,
  TextBodySuccess,
  ButtonCloseContainer,
} from './styles';
import { SUCCESS_ICON } from '../../assets/Images';

const ModalSuccess = () => {
  const { showSuccessModal } = useSelector((state) => state.modalPlanForm);
  const dispatch = useDispatch();
  const { onClose: handleClose, onExiting: handleExiting } = useModal({
    closeCallback: () => dispatch(onHideModal()),
  });

  return (
    <ModalLayout
      show={showSuccessModal}
      onClose={handleClose}
      onExiting={handleExiting}
    >
      <Container isModalSuccess>
        <ButtonCloseContainer isSuccessModal>
          <CloseButton onClick={handleClose} />
        </ButtonCloseContainer>
        <ContainerModalSuccess>
          <IconSuccess src={SUCCESS_ICON} />
          <TitleSuccess>¡Muy bien, recibimos tu solicitud!</TitleSuccess>
          <TextBodySuccess>
            tomaremos contacto en los próximos minutos para agendar una
            conversación
          </TextBodySuccess>
        </ContainerModalSuccess>
      </Container>
    </ModalLayout>
  );
};

export default ModalSuccess;
