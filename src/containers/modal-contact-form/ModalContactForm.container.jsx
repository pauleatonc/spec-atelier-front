import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import Contact from 'components/forms/contact/Contact';
import CloseButton from 'components/buttons/CloseButton';
import ModalLayout from 'components/layouts/ModalLayout';
import Button from 'components/buttons/Button';
import Login from 'containers/auth/login/Login.container';
import {
  Container,
  BottonContainer,
  ContentLogin,
} from './ModalContactForm.styles';
import { sendContactData, closeContactModal } from './ModalContactForm.actions';

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
    <ModalLayout show={showContactModal} onClose={onCloseModal}>
      <Container width="50%">
        {isLogin ? (
          <>
            <BottonContainer>
              <CloseButton onKeyDown={onCloseModal} onClick={onCloseModal} />
            </BottonContainer>
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
    </ModalLayout>
  );
};

ContactForm.defaultProps = defaultProps;
ContactForm.propTypes = propTypes;

export default ContactForm;
