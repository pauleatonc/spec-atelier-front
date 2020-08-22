import React, { useState } from 'react';
import { useParams, useLocation } from 'react-router';
import { useDispatch } from 'react-redux';
import ButtonGoogleLogin from '../../../components/buttons/ButtonGoogle';

import {
  Container,
  Content,
  HeaderText,
  RegisterLink,
  RegisterText,
  LoginTitle,
  ButtonGoogleContainer,
  TextInfo,
} from '../Auth.styles';
import { TextInput, Button } from '../../../components/SpecComponents';
import { loginAction } from '../auth.actions';


const Login = () => {
  const { state } = useLocation();
  const [user, setUser] = useState({ password: '', email: state?.email || '' });
  const dispatch = useDispatch();
  const handleSubmit = () => dispatch(loginAction({ user }));
  const onChangeUser = ({ target: { name, value } }) => setUser({ ...user, [name]: value });
  
  return (
    <Container>
      <Content>
        <HeaderText>
          <RegisterText>
            ¿Aún no eres usuario?
          </RegisterText>
          <RegisterLink
            to={{
              pathname: '/registration',
              state: { email: user.email },
            }}
            data-view="registration"
          >
            Regístrate ahora
          </RegisterLink>
        </HeaderText>

        <LoginTitle>
          Inicia sesión
				</LoginTitle>

        <ButtonGoogleContainer>
          <ButtonGoogleLogin label="Iniciar con Google" />
        </ButtonGoogleContainer>

        <TextInfo size={14}>
          O si prefieres inicia con tu cuenta Spec
        </TextInfo>
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
            <RegisterText>
              ¿Se te olvidó la contraseña?
            </RegisterText>
            <RegisterLink
              to={{
                pathname: '/recover_password',
                state: { email: user.email },
              }}
              data-view="recover_password"
            >
              Recuperar Contraseña
            </RegisterLink>
          </TextInfo>
          <Button variant="secondary" onClick={handleSubmit} width="164px">
            Iniciar sesión
					</Button>
        </form>
      </Content>
    </Container >
  );
};

export default Login;
