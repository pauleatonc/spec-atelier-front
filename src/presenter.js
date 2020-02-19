/* eslint-disable import/no-unresolved */
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { AppRoutes, LoginRoutes } from '@Components/routes';
import getPortalView from '@Helpers/portal-view.helper';
import NavBar from '@Components/navbar';
import Footer from '@Components/footer';

const AppView = () => (
	<>
		<NavBar />
		<AppRoutes />
		<Footer />
	</>
);

const LoginView = () => (
	<>
		<LoginRoutes />
	</>
);

const Presenter = props => {
	const { portalToRender } = props;
	let portal = portalToRender;

	portal = getPortalView();

	const presenter = {
		app: <AppView />,
		login: <LoginView />,
	};

	return presenter[portal];
};

Presenter.propTypes = {
	portalToRender: PropTypes.string.isRequired,
};

export default withRouter(
	connect(state => ({
		portalToRender: state.presenter.presenterView,
	}))(Presenter),
);
