import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import LoginChangeAuthView from '../components/login_change_auth_view';

import { registrationAction, googleLoginAction } from '../containers/auth/auth.actions';
import ButtonGoogleLogin from '../components/buttons/button_google_login';
import FULL_LOGO from '../assets/images/full_logo.png';

import { TextInput } from '../components/SpecComponents';
import {
  Container,
  SectionLeft,
  SectionRight,
  Image,
  Logo,
} from './Registration.styles';

const Registration = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();
  const handleSubmit = data => dispatch(googleLoginAction(data));

  return (
    <Container>
      <SectionLeft>
        <Image>
          <Link to="/" data-view="home">
            <Logo />
          </Link>
        </Image>
      </SectionLeft>
      <SectionRight>
        <div className="auth__inner__section__inner">
          <div className="auth__inner__section__inner__header">
            <LoginChangeAuthView
              label="¿Ya eres un usuario?"
              path="login"
              textLink="Inicia sesión"
              style="auth__inner__section__inner__header__title"
            />

            <img
              className="auth__inner__section__inner__header__logo"
              src={FULL_LOGO}
            />
          </div>
          <div className="auth__inner__section__inner__body">
            <p className="auth__inner__section__inner__body__title">
              Regístrate
							</p>

            <div className="auth__inner__section__inner__body__google">
              <ButtonGoogleLogin
                googleOuathMethod={handleSubmit}
                label="Regístrate con Google"
              />
            </div>

            <form
              className="auth__inner__section__inner__body__inner"
              autoComplete="off"
            >
              <p className="auth__inner__section__inner__body__inner__descent">
                O si prefieres inicia con tu cuenta Spec
								</p>
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

              <button
                type="button"
                className="auth__inner__section__inner__body__inner__button"
                onClick={handleSubmit}
              >
                Crear cuenta
								</button>
            </form>

            <LoginChangeAuthView
              label="¿Ya eres un usuario?"
              path="login"
              textLink="Inicia sesión"
              style="auth__inner__section__inner__header__title"
            />
          </div>
        </div>
      </SectionRight>
    </Container>
  );
};


export default Registration;
