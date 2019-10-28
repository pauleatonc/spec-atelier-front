/* eslint-disable import/no-unresolved */
/* eslint-disable import/prefer-default-export */
/* eslint-disable no-console */
import React from 'react';
import PropTypes from 'prop-types';
import { GoogleLogin } from 'react-google-login';
import { connect } from 'react-redux';
import { googleOuathAction } from '@Actions/';

export const handleManagerResponseGoogleService = (
	response,
	googleOuathMethod,
) => {
	googleOuathMethod(response);
};

const ButtonGoogleLogin = props => {
	const { label, googleOuathMethod } = props;

	return (
		<GoogleLogin
			clientId={token}
			buttonText={label}
			onSuccess={res =>
				handleManagerResponseGoogleService(res, googleOuathMethod)
			}
			onFailure={res =>
				handleManagerResponseGoogleService(res, googleOuathMethod)
			}
		/>
	);
};

ButtonGoogleLogin.propTypes = {
	label: PropTypes.string.isRequired,
	googleOuathMethod: PropTypes.func.isRequired,
};

export default connect(
	state => state,
	dispatch => ({
		googleOuathMethod: googleOuathAction(dispatch),
	}),
)(ButtonGoogleLogin);
