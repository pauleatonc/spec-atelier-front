/* eslint-disable import/no-unresolved */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { presenterAction } from '@Actions';

const LoginDropdown = props => {
	const { text, presenterMethod } = props;

	return (
		<div className="dropdown">
			{text}
			<div className="dropdown__content">
				<Link to="/login" onClick={() => presenterMethod('login')}>
					Login
				</Link>
				<Link to="/registration" onClick={() => presenterMethod('login')}>
					Registrarse
				</Link>
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
