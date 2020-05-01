import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import ButtonGoogleLogin from '../../../components/buttons/button_google_login';

import {
  Container,
  Content,
  HeaderText,
  RegisterLink,
  RegisterText,
  LogInTittle,
  ButtonGoogleContainer,
  TextInfo,
  ButtonLogin,
} from '../Auth.styles';
import { TextInput } from '../../../components/SpecComponents';
import { registrationAction, googleLoginAction } from '../auth.actions';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const onChangePass = e => setPassword(e.target.value);
  const onChangeEmail = e => setEmail(e.target.value);

  const dispatch = useDispatch();
  const handleSubmitGoogle = data => dispatch(googleLoginAction(data));
  const handleSubmit = () => dispatch(registrationAction({ user: { email, password } }))

  return (
    <Container>
      <Content>

        <HeaderText>
          <RegisterText>
            ¿Ya eres usuario?
          </RegisterText>
          <RegisterLink to="/login" data-view="login" >
            Inicia sesión
          </RegisterLink>
        </HeaderText>

        <LogInTittle>
          Regístrate
				</LogInTittle>

        <ButtonGoogleContainer>
          <ButtonGoogleLogin
            label="Registrar con Google"
            googleOuathMethod={handleSubmitGoogle}
            onClick={handleSubmitGoogle}
          />
        </ButtonGoogleContainer>

        <TextInfo>
          O si prefieres registrate con tu cuenta
        </TextInfo>
        <form autoComplete="off">
          <TextInput
            type="email"
            name="email"
            value={email}
            onChange={onChangeEmail}
            placeholder="Correo electrónico"
            required
          />
          <TextInput
            type="password"
            name="password"
            value={password}
            onChange={onChangePass}
            placeholder="Contraseña"
            required
          />
          <ButtonLogin type="button" onClick={handleSubmit}>
            Regístrate
					</ButtonLogin>
        </form>
      </Content>
    </Container >
  );
};

export default Register;
