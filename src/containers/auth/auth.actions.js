import onActionCreator from '../../config/store/helpers';
import { logIn, logOut, register, googleLogin, recoveryPassword, newPassword } from '../../services/auth.service';
import {
  setLocalStorage,
  deleteLocalStorage,
} from '../../helpers/localstorage.helper';
import { onShowAlertSuccess } from '../alert/Alert.actions';

/**
 * Contants
 */
export const LOG_IN = 'LOG_IN';
export const LOG_IN_ERROR = 'LOG_IN_ERROR';

export const GOOGLE_LOG_IN = 'GOOGLE_LOG_IN';
export const GOOGLE_LOG_IN_ERROR = 'GOOGLE_LOG_IN_ERROR'
export const REGISTRATION = 'REGISTRATION';
export const REGISTRATION_ERROR = 'REGISTRATION_ERROR';
export const RECOVER_PASSWORD = 'RECOVER_PASSWORD';
export const RECOVER_PASSWORD_ERROR = 'RECOVER_PASSWORD_ERROR';
export const NEW_PASSWORD = 'NEW_PASSWORD';
export const NEW_PASSWORD_ERROR = 'NEW_PASSWORD_ERROR';

/**
 * Login action
 */
export const LOG_OUT = 'LOG_OUT';

export const loginAction = data => async dispatch => {
  try {
    const { user, error } = await logIn(data);
    if (error) throw error;
    setLocalStorage({ key: 'token', value: user.jwt });
    setLocalStorage({ key: 'userID', value: user.id });
    return dispatch(onActionCreator(LOG_IN, {
      isLogin: true,
      user,
      loader: true,
    }));
  } catch (error) {
    if (error.alert) dispatch(onShowAlertSuccess({ message: error.alert }));
    return dispatch(onActionCreator(LOG_IN_ERROR, {
      isLogin: false,
      loader: true,
      user: undefined,
      error,
    }));
  }
};

/**
 * Logout action
 */
export const logoutAction = data => async dispatch => {
  try {
    await logOut(data);
  } finally {
    deleteLocalStorage('token');
    deleteLocalStorage('userID');
    dispatch(onActionCreator(LOG_OUT, {
      isLogin: false,
      user: undefined,
    }));
  }
};

/** 
 * Register on pp
*/

export const registrationAction = data => async dispatch => {
  try {
    const { user, error } = await register(data);
    if (error) throw error;
    const message = 'Se ha registrado correctamente';
    dispatch(onShowAlertSuccess({ message }));
    setLocalStorage({ key: 'token', value: user.jwt });
    setLocalStorage({ key: 'userID', value: user.id });
    return setTimeout(() => dispatch({
      type: REGISTRATION,
      payload: {
        isLogin: true,
        user,
      },
    }), 4000);
  } catch (error) {
    if (error.alert?.email) dispatch(onShowAlertSuccess({ message: error.alert.email[0] }));
    else if (error.alert) dispatch(onShowAlertSuccess({ message: error.alert }));
    return dispatch(onActionCreator({
      type: REGISTRATION_ERROR,
      payload: {
        isLogin: false,
        error,
      },
    }));
  };
};


/**
 * google login action
 */

export const googleLoginAction = data => async dispatch => {
  try {
    const response = await googleLogin(data);
    setLocalStorage({ key: 'token', value: response.user.jwt });
    return dispatch({
      type: GOOGLE_LOG_IN,
      payload: {
        isLogin: response.logged_in,
        user: response.user,
      },
    });
  } catch (error) {
    return dispatch({
      type: GOOGLE_LOG_IN_ERROR,
      payload: {
        isLogin: false,
        error,
      },
    });
  };
};

// Send email to recover password

export const recoverPassword = email => async dispatch => {
  try {
    const response = await recoveryPassword(email);
    const message = 'Se han enviado las instrucciónes al correo';
    if (response.error) dispatch(onShowAlertSuccess({ message: response.error }));
    else dispatch(onShowAlertSuccess({ message }));
    return dispatch(onActionCreator(RECOVER_PASSWORD, { sended: true }));
  } catch (error) {
    return dispatch(onActionCreator(RECOVER_PASSWORD_ERROR, { sended: false }));
  }
};

export const setNewPassword = ({ token, password }) => async dispatch => {
  try {
    await newPassword({ token, password });
    const message = 'Se ha guardado la nueva contraseña, ahora puedes iniciar sesión';
    dispatch(onShowAlertSuccess({ message }));
    return dispatch({
      type: NEW_PASSWORD,
      payload: {
        status: true,
      },
    })
  } catch (error) {
    return dispatch({
      type: NEW_PASSWORD_ERROR,
      payload: {
        status: false,
      },
    });
  };
};