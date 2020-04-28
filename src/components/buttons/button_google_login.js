import React from 'react';
import PropTypes from 'prop-types';
import { GoogleLogin } from 'react-google-login';
import toCapitalize from '../../helpers/prettie-format-strings.helper';
import { GOOGLE_CLIENT_ID } from '../../config/constants/environment';

export const handleFormatResponse = googleResponse => ({
  user: {
    first_name: toCapitalize(googleResponse.profileObj.givenName),
    last_name: toCapitalize(googleResponse.profileObj.familyName),
    email: googleResponse.profileObj.email,
    google_token: googleResponse.accessToken,
    profile_image: googleResponse.profileObj.imageUrl,
  },
});

export const handleManagerResponseGoogleService = (
  response,
  googleOuathMethod,
) => {
  const prettieFormatResponse = handleFormatResponse(response);
  googleOuathMethod(prettieFormatResponse);
};


const ButtonGoogleLogin = props => {
  const { label, googleOuathMethod } = props;
  return (
    <GoogleLogin
      clientId={GOOGLE_CLIENT_ID}
      buttonText={label}
      cookiePolicy="single_host_origin"
      onSuccess={res =>
        handleManagerResponseGoogleService(res, googleOuathMethod)
      }
      onFailure={res =>
        handleManagerResponseGoogleService(res, googleOuathMethod)
      }
      render={renderProps => (
        <button className="btn_login_google" onClick={renderProps.onClick} disabled={renderProps.disabled}>
          <i className="fab fa-google" />
          {label}
        </button>
      )}
    />
  );
};

ButtonGoogleLogin.propTypes = {
  label: PropTypes.string.isRequired,
  googleOuathMethod: PropTypes.func.isRequired,
};

export default ButtonGoogleLogin;

