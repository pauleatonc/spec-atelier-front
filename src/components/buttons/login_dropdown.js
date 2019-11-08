/* eslint-disable import/no-unresolved */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const LoginDropdown = props => {
	const { text } = props;

	return (
		<div className="dropdown">
			{text}
			<div className="dropdown__content">
				<Link to="/login">Login</Link>
				<Link to="/registration">Registrarse</Link>
			</div>
		</div>
	);
};

LoginDropdown.propTypes = {
	text: PropTypes.string.isRequired,
};

export default LoginDropdown;
