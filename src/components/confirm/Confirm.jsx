import React from 'react';
import Button from 'components/buttons/Button';
import ModalLayout from 'components/layouts/ModalLayout';
import useModal from 'components/layouts/ModalLayout.hooks';
import { Root, Text, Buttons } from './Confirm.styles';

export const Confirm = ({
  show,
  onClose,
  onExit,
  description,
  question,
  onConfirm,
}) => {
  const { onClose: handleClose, onExiting: handleExiting } = useModal({
    closeCallback: () => onClose(),
    exitingCallback: () => onExit(),
  });

  return (
    <ModalLayout show={show} onClose={handleClose} onExiting={handleExiting}>
      <Root>
        <Text>{description}</Text>
        <Text>{question}</Text>
        <Buttons>
          <Button
            inverse
            variant="primary"
            padding="0 41px"
            onClick={handleClose}
          >
            Mejor no
          </Button>
          <Button variant="primary" padding="0 41px" onClick={onConfirm}>
            Si, seguro
          </Button>
        </Buttons>
      </Root>
    </ModalLayout>
  );
};

export default Confirm;
