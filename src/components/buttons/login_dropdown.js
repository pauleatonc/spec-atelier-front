/* eslint-disable import/no-unresolved */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { toggleDropdownContentAction } from '@Actions/';

const LoginDropdown = props => {
	const { toggleDropdownContentMethod, text, showDropdown } = props;

	return (
		<div
			className="dropdown"
			onClick={() => toggleDropdownContentMethod(showDropdown)}
		>
			{text}
			<div className={`dropdown__content ${showDropdown ? 'show' : ''}`}>
				<Link to="/login">Login</Link>
				<Link to="/registration">Registrarse</Link>
			</div>
		</div>
	);
};

LoginDropdown.propTypes = {
	toggleDropdownContentMethod: PropTypes.func.isRequired,
	text: PropTypes.string.isRequired,
	showDropdown: PropTypes.bool.isRequired,
};

export default connect(
	state => ({
		showDropdown: state.showLoginDropdown.show,
	}),
	dispatch => ({
		toggleDropdownContentMethod: toggleDropdownContentAction(dispatch),
	}),
)(LoginDropdown);
