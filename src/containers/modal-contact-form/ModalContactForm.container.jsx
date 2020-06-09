import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  Button,
  Modal,
  SnackBar,
} from '../../components/SpecComponents';
import {
  Container,
  BottonContainer,
} from './ModalContactForm.styles';
import { sendContactData, closeContactModal } from './ModalContactForm.actions';
import { Contact } from '../../components/forms/Forms';

const ContactForm = () => {
  const { user = {} } = useSelector(state => state.auth);
  const { contact, selectedBrand, showContactModal, message, sended, error } = useSelector(state => state.modalContactForm);
  const [contactForm, setContactForm] = useState(contact);
  const [showSnackBar, setShowSnackBar] = useState(false);
  const dispatch = useDispatch();
  const onCloseModal = () => dispatch(closeContactModal());

  const onChangeData = ({ target: { name, value } }) => {
    setContactForm({
      ...contactForm,
      [name]: value,
    });
  };

  const sendForm = () => {
    dispatch(sendContactData({
      ...contactForm,
      user_id: user?.id || 0,
      brand_id: selectedBrand?.id,
    }));
  };

  useEffect(() => {
    if (sended) {
      setShowSnackBar(true);
      setTimeout(() => setShowSnackBar(false), 3000);
    }
    if (error) {
      setShowSnackBar(true);
      setTimeout(() => setShowSnackBar(false), 3000);
    }
  }, [sended, error]);


  return (
    <Container>
      {showSnackBar && (
        <SnackBar show={showSnackBar}>
          {message}
        </SnackBar>
      )}
      <Modal isOpen={showContactModal && selectedBrand.id} onClose={onCloseModal} size="xs">
        <>
          <Contact
            contact={contactForm}
            onChange={onChangeData}
            brand={selectedBrand.name}
            contactType={selectedBrand.contact_type}
          />
          <BottonContainer>
            <Button variant="primary" onClick={sendForm}>
              Enviar
            </Button>
          </BottonContainer>
        </>
      </Modal>
    </Container>
  );
};

export default ContactForm;