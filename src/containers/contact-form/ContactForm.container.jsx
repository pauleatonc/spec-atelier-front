import React from 'react';
import {
  Input,
} from '../../components/SpecComponents';
import { Container } from './ContactForm.styles';


const ContactForm = () => {
  const contact = {
    name: '',
    type: '',
    phone: '',
    description: '',
  };

  const onChangeData = ({ name, value }) => () => {
    setNewProject({
      ...contact,
      [name]: value,
    });
  };

  return (
    <Container>
      <Input name="name" onChange={onChangeData} value={contact.name}/>
      <Input name="type" onChange={onChangeData} />
      <Input name="phone" onChange={onChangeData} />
      <Input name="description" onChange={onChangeData} />
    </Container>
  );
};

export default ContactForm;