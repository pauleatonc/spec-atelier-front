import React from 'react';
import useModal from '../layouts/ModalLayout.hooks';
import { Modal, Button } from '../SpecComponents';
import { Root, Text, Buttons } from './Confirm.styles';

const Confirm = ({ show, onClose, onExit, description, question, onConfirm }) => {
  const { onClose: handleClose, onExiting: handleExiting } = useModal({
    closeCallback: () => onClose(),
    exitingCallback: () => onExit(),
  });

  return (
    <Modal show={show} onClose={handleClose} onExiting={handleExiting}>
      <Root>
        <Text>{description}</Text>
        <Text>{question}</Text>
        <Buttons>
          <Button inverse variant='gray' onClick={handleClose}>
            Cancelar
          </Button>
          <Button variant='primary' onClick={onConfirm}>
            Sí, seguro
          </Button>
        </Buttons>
      </Root>
    </Modal>
  );
};

export default Confirm;
