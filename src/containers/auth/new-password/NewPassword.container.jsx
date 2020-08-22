import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useParams, Redirect } from 'react-router';
import {
  Container,
  Content,
  HeaderText,
  RegisterLink,
  RegisterText,
  LoginTitle,
  TextContent,
  ButtonContainer,
  ButtonText,
} from '../Auth.styles';
import { TextInput, Button } from '../../../components/SpecComponents';
import { setNewPassword } from '../auth.actions';

const NewPassword = () => {
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const { token } = useParams();
  const handleSubmit = () => dispatch(setNewPassword({ token, password }));
  const onChangePassword = ({ target: { value } }) => setPassword(value);
  if (!token) return <Redirect to="/" />

  return (
    <Container>
      <Content>
        <HeaderText>
          <RegisterText>
            ¿Aún no eres usuario?
          </RegisterText>
          <RegisterLink
            to="/registration"
            data-view="registration"
          >
            Regístrate ahora
          </RegisterLink>
        </HeaderText>

        <TextContent>
          <LoginTitle>
            Restablecer su contraseña
				  </LoginTitle>
        </TextContent>
        <form autoComplete="off">
          <TextContent>
            <TextInput
              type="password"
              name="password"
              value={password}
              onChange={onChangePassword}
              placeholder="Nueva Contraseña"
              required
            />
          </TextContent>
          <ButtonContainer>
            <Button variant="secondary" onClick={handleSubmit}>
              <ButtonText>
                Restablecer contraseña
              </ButtonText>
            </Button>
          </ButtonContainer>
        </form>
      </Content>
    </Container >
  );
};

export default NewPassword;
