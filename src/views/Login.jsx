/* eslint-disable import/no-unresolved */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ButtonGoogleLogin from '@Components/buttons/button_google_login';
import { redirectToProjectsWhenIsLogin } from '@Helpers/redirect.helper';
import { loginAction } from '@Actions/';
import LOGO from '@Assets/images/logo.png';
import FULL_LOGO from '@Assets/images/full_logo.png';
import LoginChangeAuthView from '@Components/login_change_auth_view';

export const handleSubmit = (email, password, loginMethod) => {
	const body = {
		user: {
			email,
			password,
		},
	};
	loginMethod(body);
};

const Login = props => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const { loginMethod, loginState } = props;

	useEffect(() => {
		if (loginState) {
			redirectToProjectsWhenIsLogin();
		}
	}, [loginState]);

	return (
		<section className="auth">
			<div className="auth__inner">
				<div className="auth__inner__section auth__inner__section--login">
					<img className="auth__inner__section__logo" src={LOGO} alt="logo" />
				</div>
				<div className="auth__inner__section">
					<div className="auth__inner__section__inner">
						<div className="auth__inner__section__inner__header">
							<LoginChangeAuthView
								label="¿Aún no eres usuario?"
								path="registration"
								textLink="Regístrate ahora"
								style="auth__inner__section__inner__header__title"
							/>

							<img
								className="auth__inner__section__inner__header__logo"
								src={FULL_LOGO}
							/>
						</div>
						<div className="auth__inner__section__inner__body">
							<p className="auth__inner__section__inner__body__title">
								Inicia sesión
							</p>

							<div className="auth__inner__section__inner__body__google">
								<ButtonGoogleLogin label="Iniciar con Google" />
							</div>

							<form
								className="auth__inner__section__inner__body__inner"
								autoComplete="off"
							>
								<p className="auth__inner__section__inner__body__inner__descent">
									O si prefieres inicia con tu cuenta Spec
								</p>
								<input
									type="email"
									name="email"
									className="auth__inner__section__inner__body__inner__input"
									value={email}
									onChange={e => setEmail(e.target.value)}
									placeholder="Correo electrónico"
									required
								/>
								<input
									type="password"
									name="password"
									className="auth__inner__section__inner__body__inner__input"
									value={password}
									onChange={e => setPassword(e.target.value)}
									placeholder="Contraseña"
									required
								/>

								<div className="auth__inner__section__inner__body__inner__keep_session">
									<div className="auth__inner__section__inner__body__inner__keep_session__text">
										Mantener mi sesión iniciada
										<label className="switch" htmlFor="checkbox">
											<input type="checkbox" id="checkbox" />
											<div className="slider round" />
										</label>
									</div>
								</div>
								<button
									type="button"
									className="auth__inner__section__inner__body__inner__button"
									onClick={() => handleSubmit(email, password, loginMethod)}
								>
									Iniciar sesión
								</button>
							</form>
							<LoginChangeAuthView
								label="¿Aún no eres usuario?"
								path="registration"
								textLink="Regístrate ahora"
								style="auth__inner__section__inner__header__title"
							/>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

Login.propTypes = {
	loginState: PropTypes.bool.isRequired,
	loginMethod: PropTypes.func.isRequired,
};

export default connect(
	state => ({
		loginState: state.login.isLogin,
	}),
	dispatch => ({
		loginMethod: loginAction(dispatch),
	}),
)(Login);
