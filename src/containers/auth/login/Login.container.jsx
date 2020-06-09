import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import ButtonGoogleLogin from '../../../components/buttons/ButtonGoogle';

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
  KeepSessionContainer,
} from '../Auth.styles';
import { TextInput, Button } from '../../../components/SpecComponents';
import { loginAction } from '../auth.actions';

const defaultUser = {
  email: '',
  password: '',
};

const Login = () => {
  const [user, setUser] = useState(defaultUser);
  const dispatch = useDispatch();
  const handleSubmit = () => dispatch(loginAction({ user }));
  const onChangeUser = ({ target: { name, value }}) => setUser({ ...user, [name]: value });

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
            <RegisterLink to="/registration" data-view="recover_password" >
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
