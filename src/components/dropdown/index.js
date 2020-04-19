import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { logoutAction } from '@Actions';

const handleShowHiddenDropdown = (method, option) => {
	method(!option);
};

const Dropdown = props => {
	const { logoutMethod } = props;
	const [showOtions, setShowOtions] = useState(false);

	return (
		<div
			className="navbar__inner__section__item"
			onClick={() => {
				handleShowHiddenDropdown(setShowOtions, showOtions);
			}}
		>
			<div className="navbar__inner__section__item__link">
				<i className="fas fa-user-circle" />
			</div>
			<div className={`dropdown ${showOtions ? ' show' : ''}`}>
				<div className="dropdown__inner">
					<Link className="dropdown__inner__link" to="/profile">
						Perfil
					</Link>

					<div className="dropdown__inner__link" onClick={logoutMethod}>
						Cerrar sesión
					</div>
				</div>
			</div>
		</div>
	);
};

Dropdown.propTypes = {
	logoutMethod: PropTypes.func.isRequired,
};

export default connect(
	state => state,
	dispatch => ({
		logoutMethod: logoutAction(dispatch),
	}),
)(Dropdown);
