/* eslint-disable import/no-unresolved */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ButtonGoogleLogin from '@Components/buttons/button_google_login';
import { redirectToProjectsWhenIsLogin } from '@Helpers/redirect.helper';
import { registrationAction } from '@Actions/';
import LOGO from '@Assets/images/logo.png';
import FULL_LOGO from '@Assets/images/full_logo.png';
import LoginChangeAuthView from '@Components/login_change_auth_view';

export const handleSubmit = (email, password, registrationMethod) => {
	const body = {
		user: {
			email,
			password,
		},
	};
	registrationMethod(body);
};

const Registration = props => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [hasChecked, setHasChecked] = useState(false);
	const { registrationMethod, loginState } = props;

	useEffect(() => {
		if (loginState) {
			redirectToProjectsWhenIsLogin();
		}
	}, [loginState]);

	return (
		<section className="auth">
			<div className="auth__inner">
				<div className="auth__inner__section auth__inner__section--registration">
					<img className="auth__inner__section__logo" src={LOGO} alt="logo" />
				</div>
				<div className="auth__inner__section">
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
								<ButtonGoogleLogin label="Regístrate con Google" />
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
								<label className="auth__inner__section__inner__body__inner__label">
									Creando una cuenta aceptas nuestros términos y condiciones.
									<input
										type="checkbox"
										name="termsAndConditionsCheck"
										className="auth__inner__section__inner__body__inner__checkbox"
										onChange={() => {
											setHasChecked(!hasChecked);
										}}
										checked={hasChecked}
									/>
									<span className="checkmark" />
								</label>

								<button
									type="button"
									className="auth__inner__section__inner__body__inner__button"
									onClick={() =>
										handleSubmit(email, password, registrationMethod)
									}
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
				</div>
			</div>
		</section>
	);
};

Registration.propTypes = {
	loginState: PropTypes.bool.isRequired,
	registrationMethod: PropTypes.func.isRequired,
};

export default connect(
	state => ({
		loginState: state.login.isLogin,
	}),
	dispatch => ({
		registrationMethod: registrationAction(dispatch),
	}),
)(Registration);
