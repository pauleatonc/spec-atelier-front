/* eslint-disable import/no-unresolved */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getLocalStorage } from '@Helpers/localstorage.helper';

const getTabsWhenUserIsLogin = () => {
	return (
		<>
			<Link to="/login" className="dropdown__content__link">
				Login
			</Link>
			<Link to="/registration" className="dropdown__content__link">
				Registrarse
			</Link>
		</>
	);
};

const getTabsWhenUserIsNotLogin = () => {
	return (
		<>
			<Link to="/profile" className="dropdown__content__link">
				Perfil
			</Link>
			<span className="dropdown__content__link">Cerrar sesión</span>
		</>
	);
};

const LoginDropdown = props => {
	const { text } = props;

	return (
		<div className="dropdown">
			{!getLocalStorage('token') ? text : 'Sesión iniciada'}
			<div className="dropdown__content">
				{!getLocalStorage('token')
					? getTabsWhenUserIsLogin()
					: getTabsWhenUserIsNotLogin()}
			</div>
		</div>
	);
};

LoginDropdown.propTypes = {
	text: PropTypes.string.isRequired,
};

export default connect(state => state)(LoginDropdown);
