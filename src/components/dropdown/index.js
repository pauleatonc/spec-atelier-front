import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { presenterAction, logoutAction } from '@Actions';

const Dropdown = props => {
	const { presenterMethod, logoutMethod } = props;
	const [showOtions, setShowOtions] = useState(true);

	return (
		<div
			className="navbar__inner__section__item"
			onClick={() => {
				setShowOtions(!showOtions);
			}}
		>
			<div className="navbar__inner__section__item__link">
				<i className="fas fa-user-circle" />
			</div>
			<div className="menu">
				<Link
					to="/profile"
					className="navbar__inner__section__item__link"
					onClick={() => logoutMethod()}
				>
					Perfil
				</Link>

				<div
					className="navbar__inner__section__item__link"
					onClick={logoutMethod}
				>
					Cerrar sesión
				</div>
			</div>
		</div>
	);
};

Dropdown.propTypes = {
	presenterMethod: PropTypes.func.isRequired,
	logoutMethod: PropTypes.func.isRequired,
};

export default connect(
	state => state,
	dispatch => ({
		presenterMethod: presenterAction(dispatch),
		logoutMethod: logoutAction(dispatch),
	}),
)(Dropdown);
