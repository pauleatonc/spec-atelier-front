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
  LoginInfo,
  ButtonLogin,
  KeepSessionContainer,
} from './Login.styles';
import { TextInput } from '../../../components/SpecComponents';
import { loginAction, googleLoginAction } from '../auth.actions';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const handleSubmit = () => dispatch(loginAction({ user: { email, password } }));
  const handleGoogleSubmit = () => dispatch(googleLoginAction({ user: { email, password } }));

  return (
    <Container>
      <Content>

        <HeaderText>
          <RegisterText>
            ¿Aún no eres usuario?
          </RegisterText>
          <RegisterLink to="/registration" data-view="registration" >
            Regístrate ahora
          </RegisterLink>
        </HeaderText>

        <LogInTittle>
          Inicia sesión
				</LogInTittle>

        <ButtonGoogleContainer>
          <ButtonGoogleLogin
            label="Iniciar con Google"
            googleOuathMethod={handleGoogleSubmit}
            onClick={handleGoogleSubmit}
          />
        </ButtonGoogleContainer>

        <LoginInfo>
          O si prefieres inicia con tu cuenta Spec
        </LoginInfo>
        <form autoComplete="off">
          <TextInput
            type="email"
            name="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder="Correo electrónico"
            required
          />
          <TextInput
            type="password"
            name="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            placeholder="Contraseña"
            required
          />

          <KeepSessionContainer>
            <div className="auth__inner__section__inner__body__inner__keep_session__text">
              Mantener mi sesión iniciada
										<label className="switch" htmlFor="checkbox">
                <input type="checkbox" id="checkbox" />
                <div className="slider round" />
              </label>
            </div>
          </KeepSessionContainer>
          <ButtonLogin type="button" onClick={handleSubmit}>
            Iniciar sesión
					</ButtonLogin>
        </form>
      </Content>
    </Container >
  );
};

export default Login;
