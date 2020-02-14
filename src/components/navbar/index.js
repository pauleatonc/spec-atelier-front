/* eslint-disable import/imports-first */
/* eslint-disable import/no-unresolved */
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import LOGO from '@Assets/images/logo.png';
import LOGO_MOBILE from '@Assets/images/logo_footer.png';
import { presenterAction } from '@Actions';
import NavbarTopMobile from './navbar-top-mobile';
import NavbarTop from './navbar-top';

const NavBar = props => {
	const { presenterMethod } = props;

	return (
		<nav className="navbar">
			<div className="navbar__inner">
				<div className="navbar__inner__logo-content">
					<Link to="/" data-view="home" onClick={() => presenterMethod('app')}>
						<img
							className="navbar__inner__logo-content__image"
							src={LOGO}
							alt="Logotipo de SpecAtelier"
						/>
						<img
							className="navbar__inner__logo-content__image__mobile"
							src={LOGO_MOBILE}
							alt="Logotipo de SpecAtelier"
						/>
					</Link>
				</div>

				<NavbarTopMobile />

				<NavbarTop />
			</div>
		</nav>
	);
};

NavBar.propTypes = {
	presenterMethod: PropTypes.func.isRequired,
};

export default connect(
	state => state,
	dispatch => ({
		presenterMethod: presenterAction(dispatch),
	}),
)(NavBar);
