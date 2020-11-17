import React, { useState } from 'react';
import { useLocation } from 'react-router';
import { useDispatch } from 'react-redux';
import {
  Container,
  Content,
  HeaderText,
  RegisterLink,
  RegisterText,
  LoginTitle,
  TextInfo,
  TextContent,
  ButtonContainer,
  ButtonText,
} from '../Auth.styles';
import { TextInput, Button } from '../../../components/SpecComponents';
import { recoverPassword } from '../auth.actions';

const RecoverPassword = () => {
  const { state } = useLocation();
  const [email, setEmail] = useState(state?.email || '');
  const dispatch = useDispatch();
  const handleSubmit = () => dispatch(recoverPassword(email));
  const onChangeUser = ({ target: { value } }) => setEmail(value);

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
              state: { email },
            }}
            data-view="registration"
          >
            Regístrate ahora
          </RegisterLink>
        </HeaderText>
        
        <LoginTitle>
          ¿Se te olvidó tu contraseña?
				</LoginTitle>
        <TextContent>
          <TextInfo size={14}>
            Ingrese la dirección de correo electrónico que utilizó cuando se unió y le enviaremos instrucciones para restablecer su contraseña.
          </TextInfo>
        </TextContent>
        <form autoComplete="off">
          <TextInput
            type="email"
            name="email"
            value={email}
            onChange={onChangeUser}
            placeholder="Correo electrónico"
            required
          />
          <ButtonContainer>
            <Button variant="secondary" onClick={handleSubmit}>
              <ButtonText>
                Enviar Instrucciones
              </ButtonText>
            </Button>
          </ButtonContainer>
        </form>
      </Content>
    </Container >
  );
};

export default RecoverPassword;
