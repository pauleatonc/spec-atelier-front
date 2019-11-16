/* eslint-disable import/no-unresolved */
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { AppRoutes, LoginRoutes } from '@Components/routes';
import NavBar from '@Components/navbar/navbar-top';
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
	const { viewToRender } = props;

	const presenter = {
		app: <AppView />,
		login: <LoginView />,
	};

	return presenter[viewToRender];
};

Presenter.propTypes = {
	viewToRender: PropTypes.string.isRequired,
};

export default connect(state => ({
	viewToRender: state.presenter.presenterView,
}))(Presenter);
