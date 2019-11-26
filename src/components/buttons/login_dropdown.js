/* eslint-disable import/no-unresolved */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getLocalStorage } from '@Helpers/localstorage.helper';
import { presenterAction } from '@Actions';

const getTabsWhenUserIsLogin = method => {
	return (
		<>
			<Link
				to="/login"
				className="dropdown__content__link"
				onClick={() => method('login')}
			>
				Login
			</Link>
			<Link
				to="/registration"
				className="dropdown__content__link"
				onClick={() => method('login')}
			>
				Registrarse
			</Link>
		</>
	);
};

const getTabsWhenUserIsNotLogin = method => {
	return (
		<>
			<Link
				to="/profile"
				className="dropdown__content__link"
				onClick={() => method('login')}
			>
				Perfil
			</Link>
			<span className="dropdown__content__link">Cerrar sesión</span>
		</>
	);
};

const LoginDropdown = props => {
	const { text, presenterMethod } = props;
	const userIcon = (
		<div className="dropdown__inner">
			<i className="dropdown__inner__icon fas fa-user-circle" />
		</div>
	);

	return (
		<div className="dropdown">
			{!getLocalStorage('token') ? text : userIcon}
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
	dispatch => ({
		presenterMethod: presenterAction(dispatch),
	}),
)(LoginDropdown);
