import React from 'react';

import useModal from '../layouts/ModalLayout.hooks';
import { Modal, Button } from '../SpecComponents';

import { Root, Text, Buttons } from './Confirm.styles';

function Confirm({ show, onClose, onExit, description, question, onConfirm }) {
	const { onClose: handleClose, onExiting: handleExiting } = useModal({
		closeCallback: () => {
			onClose();
		},
		exitingCallback: () => {
			onExit();
		},
	});

	return (
		<Modal show={show} onClose={handleClose} onExiting={handleExiting}>
			<Root>
				<Text>{description}</Text>
				<Text>{question}</Text>
				<Buttons>
					<Button
            inverse
						variant="primary"
            padding='0 41px'
						onClick={handleClose}
					>
						Mejor no
					</Button>
					<Button variant="primary" padding='0 41px' onClick={onConfirm}>
						Si, seguro
					</Button>
				</Buttons>
			</Root>
		</Modal>
	);
}

export default Confirm;
