import React from 'react';
import PropTypes from 'prop-types';
import Input from 'components/inputs/Input';
import Textarea from 'components/inputs/Textarea';
import {
  Container,
  InputContainer,
  Label,
  Title,
  CodeNumber,
  CellPhone,
} from './Contact.styles';

const Contact = ({ client, contactType, contact, onChange }) => (
  <Container>
    <Title>Contactar</Title>
    <InputContainer>
      <Input
        name="client"
        type="underline"
        onChange={onChange}
        value={client}
        disabled
      />
    </InputContainer>
    {contactType && (
      <InputContainer>
        <Input
          name="user"
          type="underline"
          onChange={onChange}
          value={contactType}
          disabled
        />
      </InputContainer>
    )}
    <InputContainer>
      <Label strong>Cargo del contacto</Label>
      <Input
        name="user"
        type="underline"
        onChange={onChange}
        value="Distribuidor"
        disabled
      />
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
      <Label style={{ marginBottom: 12 }} strong>
        Deja un mensaje para el colaborador
      </Label>
      <Textarea
        name="message"
        onChange={onChange}
        value={contact.message}
        minHeightTextArea="88px"
      />
    </InputContainer>
  </Container>
);

Contact.propTypes = {
  client: PropTypes.string,
  contactType: PropTypes.string,
  contact: PropTypes.shape({
    user_phone: PropTypes.string,
    message: PropTypes.string,
  }),
  onChange: PropTypes.func,
};

Contact.defaultProps = {
  client: '',
  contactType: '',
  contact: {},
  onChange: () => {},
};

export default Contact;
