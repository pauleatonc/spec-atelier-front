/* eslint-disable import/no-unresolved */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getLocalStorage } from '@Helpers/localstorage.helper';
import LOGO_USER_GENERIC from '@Assets/images/user-generic.png';
import { presenterAction } from '@Actions';

const getTabsWhenUserIsLogin = method => {
	return (
		<>
			<Link to="/login" onClick={() => method('login')}>
				Login
			</Link>
			<Link to="/registration" onClick={() => method('login')}>
				Registrarse
			</Link>
		</>
	);
};

const getTabsWhenUserIsNotLogin = method => {
	return (
		<>
			<Link to="/profile" onClick={() => method('app')}>
				Perfil
			</Link>
			<Link to="/registration" onClick={() => method('app')}>
				Cerrar sesión
			</Link>
		</>
	);
};

const LoginDropdown = props => {
	const { text, presenterMethod } = props;

	return (
		<div className="dropdown">
			{!getLocalStorage('token') ? text : 'Sesión iniciada'}
			<div className="dropdown__content">
				{!getLocalStorage('token')
					? getTabsWhenUserIsLogin(presenterMethod)
					: getTabsWhenUserIsNotLogin(presenterMethod)}
			</div>
		</div>
	);
};

LoginDropdown.propTypes = {
	text: PropTypes.string.isRequired,
	presenterMethod: PropTypes.func.isRequired,
};

export default connect(
	state => state,
	dispath => ({
		presenterMethod: presenterAction(dispath),
	}),
)(LoginDropdown);
