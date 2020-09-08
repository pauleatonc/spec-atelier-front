import React from 'react';
import PropTypes from 'prop-types';

import {
  Container,
  InputContainer,
  Label,
  Title,
  CodeNumber,
  CellPhone,
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
      <Input name="brand" type="underline" onChange={onChange} value={brand} disabled />
    </InputContainer>
    <InputContainer>
      <Input name="user" type="underline" onChange={onChange} value={contactType} disabled />
    </InputContainer>
    <InputContainer>
      <Label strong>Cargo del contacto</Label>
      <Input name="user" type="underline" onChange={onChange} value="Distribuidor" disabled />
    </InputContainer>
    <InputContainer>
      <Label>Teléfono</Label>
      <CellPhone>
        <CodeNumber>+56</CodeNumber>
        <Input 
          name="user_phone" 
          type="underline" 
          onChange={onChange} 
          value={contact.user_phone} 
          placeholder="Escribe aquí el teléfono" 
        />
      </CellPhone>
    </InputContainer>
    <InputContainer>
      <Label style={{ marginBottom: 12 }} strong>Deja un mensaje para el colaborador</Label>
      <TextArea name="message" onChange={onChange} value={contact.message} minHeightTextArea="88px" />
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
  brand: '',
  contactType: '',
  contact: {},
  onChange: () => { },
};

export default Contact;

