import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

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
import { TextInput, Button } from '../../../components/SpecComponents';
import { registrationAction } from '../auth.actions';
import ButtonGoogleLogin from '../../../components/buttons/ButtonGoogle';

const defaultUser = {
  email: '',
  password: '',
};

const Register = () => {
  const [user, setUser] = useState(defaultUser);
  const dispatch = useDispatch();
  const handleSubmit = () => dispatch(registrationAction({ user }));
  const onChangeUser = ({ target: { name, value }}) => setUser({ ...user, [name]: value });
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
          <ButtonGoogleLogin label="Regístrate con Google" />
        </ButtonGoogleContainer>

        <TextInfo>
          O si prefieres crea una cuenta en Spec
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
          <Button variant="secondary" onClick={handleSubmit} width="164px">
            Crear Cuenta
					</Button>
        </form>
      </Content>
    </Container >
  );
};

export default Register;
