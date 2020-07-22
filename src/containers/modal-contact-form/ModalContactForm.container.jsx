import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  Button,
  Modal,
} from '../../components/SpecComponents';
import {
  Container,
  BottonContainer,
} from './ModalContactForm.styles';
import { sendContactData, closeContactModal } from './ModalContactForm.actions';
import { Contact } from '../../components/forms/Forms';

const ContactForm = () => {
  const { user = {} } = useSelector(state => state.auth);
  const { contact, selectedBrand, showContactModal } = useSelector(state => state.modalContactForm);
  const [contactForm, setContactForm] = useState(contact);
  const dispatch = useDispatch();
  const onCloseModal = () => dispatch(closeContactModal());

  const onChangeData = ({ target: { name, value } }) => {
    if (name === 'user_phone' && Number.isNaN(+value)) return;
    setContactForm({
      ...contactForm,
      [name]: value,
    });
  };

  const sendForm = () => {
    dispatch(sendContactData({
      ...contactForm,
      user_phone: `+56${contactForm.user_phone}`,
      user_id: user?.id || 0,
      brand_id: selectedBrand?.id,
    }));
  };

  useEffect(() => {
    if (showContactModal) setContactForm({});
  }, [showContactModal]);

  return (
    <Container>
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