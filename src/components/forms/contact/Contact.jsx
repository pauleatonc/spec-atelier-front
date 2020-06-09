import React from 'react';
import PropTypes from 'prop-types';

import {
  Container,
  InputContainer,
  Label,
  Title,
} from './Contact.styles';

import {
  Input,
  TextArea,
} from '../../SpecComponents';

const Contact = ({ brand, contactType, contact, onChange }) => (
  <Container>
    <Title>
      Contactar
    </Title>
    <InputContainer>
      <Label>Colaborador</Label>
      <Input name="brand" type="underline" onChange={onChange} value={brand} disabled />
    </InputContainer>
    <InputContainer>
      <Label>Cargo del Contacto</Label>
      <Input name="user" type="underline" onChange={onChange} value={contactType} disabled />
    </InputContainer>
    <InputContainer>
      <Label>Teléfono</Label>
      <Input name="user_phone" type="underline" onChange={onChange} value={contact.user_phone} />
    </InputContainer>
    <InputContainer>
      <Label style={{ marginBottom: 12 }} strong>Deja un mensaje para el colaborador</Label>
      <TextArea name="message" onChange={onChange} value={contact.message} />
    </InputContainer>
  </Container>
);

Contact.propTypes = {
  brand: PropTypes.string,
  contactType: PropTypes.string,
  contact: PropTypes.shape({
    user_phone: PropTypes.string,
    message: PropTypes.string,
  }),
  onChange: PropTypes.func,
};

Contact.defaultProps = {
  brand:'',
  contactType: '',
  contact: {},
  onChange: () => {},
};

export default Contact;

