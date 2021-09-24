import React from 'react';
import PropTypes from 'prop-types';
import { GoogleLogin } from 'react-google-login';
import { useDispatch } from 'react-redux';
import toCapitalize from '../../helpers/prettie-format-strings.helper';
import { GOOGLE_CLIENT_ID } from '../../config/constants/environment';
import { googleLoginAction } from '../../containers/auth/auth.actions';
import { Button } from '../SpecComponents';
import { Text } from './ButtonGoogle.styles';

const ButtonGoogleLogin = (props) => {
	const { label } = props;
	const dispatch = useDispatch();
	const responseSuccess = (googleResponse) => {
		const user = {
			user: {
				first_name: toCapitalize(googleResponse?.profileObj?.givenName),
				last_name: toCapitalize(googleResponse?.profileObj?.familyName),
				email: googleResponse?.profileObj?.email,
				google_token: googleResponse?.accessToken,
				profile_image: googleResponse?.profileObj?.imageUrl,
			},
		};
		dispatch(googleLoginAction(user));
	};

	const responseError = (googleResponse) => {
		//TODO: Handle and create Snackbar to this error
	};

	return (
		<GoogleLogin
			clientId={GOOGLE_CLIENT_ID}
			buttonText={label}
			cookiePolicy="single_host_origin"
			onSuccess={responseSuccess}
			onFailure={responseError}
			render={(renderProps) => (
				<Button
					variant="primary"
					onClick={renderProps.onClick}
					disabled={renderProps.disabled}
				>
					<i
						className="fab fa-google"
						style={{ fontSize: 14, fontWeight: 'noraml', marginRight: 8 }}
					/>
					<Text>{label}</Text>
				</Button>
			)}
		/>
	);
};

ButtonGoogleLogin.propTypes = {
	label: PropTypes.string.isRequired,
};

export default ButtonGoogleLogin;
