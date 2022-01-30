import React, { useState } from 'react';
import { useLocation } from 'react-router';
import { useDispatch } from 'react-redux';
import {
  Container,
  HeaderText,
  RegisterLink,
  RegisterText,
  LoginTitle,
  ButtonGoogleContainer,
  TextInfo,
  TermsLink,
} from '../Auth.styles';
import { TextInput, Button } from '../../../components/SpecComponents';
import { registrationAction } from '../auth.actions';
import ButtonGoogleLogin from '../../../components/buttons/ButtonGoogle';

const TermAndConditions =
  'https://firebasestorage.googleapis.com/v0/b/spec-atelier.appspot.com/o/documents%2FT%26Cs%20de%20Uso%20Spec%20Atelier.pdf?alt=media';

const Register = () => {
  const { state } = useLocation();
  const [user, setUser] = useState({ password: '', email: state?.email || '' });
  const dispatch = useDispatch();
  const handleSubmit = () => dispatch(registrationAction({ user }));
  const onChangeUser = ({ target: { name, value } }) =>
    setUser({ ...user, [name]: value });
  return (
    <Container>
      <HeaderText>
        <RegisterText>¿Ya eres usuario?</RegisterText>
        <RegisterLink to="/login" data-view="login">
          Inicia sesión
        </RegisterLink>
      </HeaderText>

      <LoginTitle>Regístrate</LoginTitle>

      <ButtonGoogleContainer>
        <ButtonGoogleLogin label="Regístrate con Google" />
      </ButtonGoogleContainer>

      <TextInfo>O si prefieres crea una cuenta en Spec</TextInfo>
      <form autoComplete="off">
        <TextInput
          type="email"
          name="email"
          value={user.email}
          onChange={onChangeUser}
          placeholder="Correo electrónico"
          required
        />
        <TextInput
          type="password"
          name="password"
          value={user.password}
          onChange={onChangeUser}
          placeholder="Contraseña"
          required
        />
        <TextInfo size={12}>
          <RegisterText>Creando una cuenta aceptas nuestros</RegisterText>
          <TermsLink
            href={TermAndConditions}
            dowload
            target="_blank"
            rel="noreferrer"
          >
            términos y condiciones.
          </TermsLink>
        </TextInfo>
        <Button
          variant="secondary"
          onClick={handleSubmit}
          width="164px"
          disabled={!user.password || !user.email}
        >
          Crear Cuenta
        </Button>
      </form>
    </Container>
  );
};

export default Register;
