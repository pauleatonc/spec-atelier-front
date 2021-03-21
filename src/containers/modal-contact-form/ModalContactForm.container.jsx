import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { Button, Modal } from '../../components/SpecComponents';
import {
	Container,
	BottonContainer,
  ButtonClose,
  ContentLogin,
} from './ModalContactForm.styles';
import { sendContactData, closeContactModal } from './ModalContactForm.actions';
import { Contact } from '../../components/forms/Forms';
import Login from '../auth/login/Login.container';

const propTypes = {
	type: PropTypes.string,
};

const defaultProps = {
	type: 'client',
};

const ContactForm = ({ type }) => {
	const { user = {}, isLogin } = useSelector((state) => state.auth);
	const {
		contact,
		selectedClient,
		showContactModal,
		selectedProduct,
	} = useSelector((state) => state.modalContactForm);
	const [contactForm, setContactForm] = useState(contact);
	const dispatch = useDispatch();
	const onCloseModal = () => dispatch(closeContactModal());

	const onChangeData = ({ target: { name, value } }) => {
		if ((name === 'user_phone' && Number.isNaN(+value)) || value.length > 9)
			return;
		setContactForm({
			...contactForm,
			[name]: value,
		});
	};

	const sendForm = () => {
		dispatch(
			sendContactData(
				{
					...contactForm,
					user_phone: `+56${contactForm.user_phone}`,
					user_id: user?.id || 0,
					client_id: selectedClient?.id,
					product_id: selectedProduct?.id,
				},
				type,
			),
		);
	};

	useEffect(() => {
		if (!showContactModal) {
			setContactForm({
				user_phone: '',
				message: '',
			});
			dispatch(closeContactModal());
		}
	}, [showContactModal]);

	return (
		<Modal show={showContactModal} onClose={onCloseModal}>
			<Container width="50%">
				{isLogin ? (
					<>
						<ButtonClose
							role="button"
							tabIndex="0"
							onKeyDown={onCloseModal}
							onClick={onCloseModal}
						>
							<i className="fas fa-times" />
						</ButtonClose>
						<Contact
							contact={contactForm}
							onChange={onChangeData}
							client={selectedClient.name}
							contactType={selectedClient.contact_type}
						/>
						<BottonContainer>
							<Button variant="primary" onClick={sendForm}>
								Enviar
							</Button>
						</BottonContainer>
					</>
				) : (
          <ContentLogin>
					  <Login />
          </ContentLogin>
				)}
			</Container>
		</Modal>
	);
};

ContactForm.defaultProps = defaultProps;
ContactForm.propTypes = propTypes;

export default ContactForm;
