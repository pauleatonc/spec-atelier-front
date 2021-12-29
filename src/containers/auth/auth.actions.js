import onActionCreator from '../../config/store/helpers';
import {
	logIn,
	logOut,
	register,
	googleLogin,
	recoveryPassword,
	newPassword,
	acceptNotification,
	rejectNotification,
} from '../../services/auth.service';
import {
	setLocalStorage,
	deleteLocalStorage,
} from '../../helpers/localstorage.helper';
import { onShowAlertSuccess } from '../alert/Alert.actions';
import { impersonateUser } from '../../services/users.service';
import { getUsers } from '../act-as-another-user/ActAsAnotherUser.actions';
import { clearProjects } from '../projects-list/ProjectsList.actions';

/**
 * Contants
 */
export const LOG_IN = 'LOG_IN';
export const LOG_IN_ERROR = 'LOG_IN_ERROR';

export const GOOGLE_LOG_IN = 'GOOGLE_LOG_IN';
export const GOOGLE_LOG_IN_ERROR = 'GOOGLE_LOG_IN_ERROR';
export const REGISTRATION = 'REGISTRATION';
export const REGISTRATION_ERROR = 'REGISTRATION_ERROR';
export const RECOVER_PASSWORD = 'RECOVER_PASSWORD';
export const RECOVER_PASSWORD_ERROR = 'RECOVER_PASSWORD_ERROR';
export const NEW_PASSWORD = 'NEW_PASSWORD';
export const NEW_PASSWORD_ERROR = 'NEW_PASSWORD_ERROR';
export const IMPERSONATE_USER_ERROR = 'IMPERSONATE_USER_ERROR';
export const CLEAR_IMPERSONATED = 'CLEAR_IMPERSONATED';
export const ACCEPT_NOTIFICATION_LOGIN = 'ACCEPT_NOTIFICATION_LOGIN';
export const ACCEPT_NOTIFICATION_GOOGLE = 'ACCEPT_NOTIFICATION_GOOGLE';
export const ACCEPT_NOTIFICATION_ERROR = 'ACCEPT_NOTIFICATION_ERROR';
export const REJECT_NOTIFICATION_GOOGLE = 'REJECT_NOTIFICATION_GOOGLE';
export const REJECT_NOTIFICATION_ERROR = 'REJECT_NOTIFICATION_ERROR';
export const CLEAR_ACCEPT_ACTION = 'CLEAR_ACCEPT_ACTION';

/**
 * Login action
 */
export const LOG_OUT = 'LOG_OUT';

export const loginAction = (data) => async (dispatch) => {
	try {
		const { user, error } = await logIn(data);
		if (error) throw error;
		setLocalStorage({ key: 'token', value: user.jwt });
		setLocalStorage({ key: 'userID', value: user.id });
		if (data.action.idNoti) {
			if (data.action.actionUrl === "accept_invitation") {
				deleteLocalStorage('isAcceptStore');
				deleteLocalStorage('messageAcceptStore');
				acceptNotification(data.action).then((response) => {
					const { resp, codeStatus } = response;
					if (codeStatus === 200) {
						setLocalStorage({ key: 'isAcceptStore', value: codeStatus });
						resp.then((d) => {
							setLocalStorage({ key: 'messageAcceptStore', value: d.message });
							dispatch(onActionCreator(ACCEPT_NOTIFICATION_LOGIN, d))
						});
					} else {
						setLocalStorage({ key: 'isAcceptStore', value: codeStatus });
					}
				}, (e) => {
					dispatch(onActionCreator(ACCEPT_NOTIFICATION_ERROR, {
						e
					}))
				})
			}
		}
		return dispatch(
			onActionCreator(LOG_IN, {
				isLogin: true,
				user,
				loader: true,
			}),
		);
	} catch (error) {
		if (error.alert) dispatch(onShowAlertSuccess({ message: error.alert }));
		return dispatch(
			onActionCreator(LOG_IN_ERROR, {
				isLogin: false,
				loader: true,
				user: undefined,
				error,
			}),
		);
	}
};

/**
 * Logout action
 */
export const logoutAction = (data) => (dispatch) => {
	return new Promise((resolve, reject) => {
		try {
			logOut(data).then(() => {
				deleteLocalStorage('token');
				deleteLocalStorage('userID');
				dispatch(
					onActionCreator(LOG_OUT, {
						isLogin: false,
						user: undefined,
					}),
				);
				dispatch(clearProjects());
				resolve('done');
			});
		} catch (error) {
			reject(error);
		}
	});
};

/**
 * Logout action
 */
export const autoLogout = () => (dispatch) => {
	deleteLocalStorage('token');
	deleteLocalStorage('userID');
	dispatch(
		onActionCreator(LOG_OUT, {
			isLogin: false,
			user: undefined,
			isAutoLogout: true,
		}),
	);
};

/**
 * Register on pp
 */

export const registrationAction = (data) => async (dispatch) => {
	try {
		const { user, error } = await register(data);
		if (error) throw error;
		const message = 'Se ha registrado correctamente';
		dispatch(onShowAlertSuccess({ message }));
		setLocalStorage({ key: 'token', value: user.jwt });
		setLocalStorage({ key: 'userID', value: user.id });
		return setTimeout(
			() =>
				dispatch({
					type: REGISTRATION,
					payload: {
						isLogin: true,
						user,
					},
				}),
			4000,
		);
	} catch (error) {
		if (error.alert?.email)
			dispatch(onShowAlertSuccess({ message: error.alert.email[0] }));
		else if (error.alert)
			dispatch(onShowAlertSuccess({ message: error.alert }));
		return dispatch(
			onActionCreator({
				type: REGISTRATION_ERROR,
				payload: {
					isLogin: false,
					error,
				},
			}),
		);
	}
};

/**
 * google login action
 */

export const googleLoginAction = (data) => async (dispatch) => {
	googleLogin(data).then(
		(response) => {
			deleteLocalStorage('responseStatus');
			setLocalStorage({ key: 'token', value: response.user.jwt });
			dispatch({
				type: GOOGLE_LOG_IN,
				payload: {
					isLogin: response.logged_in,
					user: response.user,
				},
			});
			if (data.action.idNoti) {
				if (data.action.actionUrl === "accept_invitation") {
					deleteLocalStorage('isAcceptStore');
					acceptNotification(data.action).then((responseNotification) => {
						const { resp, codeStatus } = responseNotification;
						if (codeStatus === 200) {
							setLocalStorage({ key: 'isAcceptStore', value: codeStatus });
							resp.then((d) => {
								setLocalStorage({ key: 'messageAcceptStore', value: d.message });
								dispatch(onActionCreator(ACCEPT_NOTIFICATION_GOOGLE, d))
							})
						} else {
							setLocalStorage({ key: 'isAcceptStore', value: codeStatus });
						}
					}, (e) => {
						dispatch(onActionCreator(ACCEPT_NOTIFICATION_ERROR, {
							e
						}))
					})
				}
			}
		},
		(error) => {
			dispatch({
				type: GOOGLE_LOG_IN_ERROR,
				payload: {
					isLogin: false,
					error,
				},
			});
		},
	);
};

// Send email to recover password

export const recoverPassword = (email) => async (dispatch) => {
	try {
		const response = await recoveryPassword(email);
		const message = 'Se han enviado las instrucciónes al correo';
		if (response.error)
			dispatch(onShowAlertSuccess({ message: response.error }));
		else dispatch(onShowAlertSuccess({ message }));
		return dispatch(onActionCreator(RECOVER_PASSWORD, { sended: true }));
	} catch (error) {
		return dispatch(onActionCreator(RECOVER_PASSWORD_ERROR, { sended: false }));
	}
};

export const setNewPassword = ({ token, password }) => async (dispatch) => {
	try {
		await newPassword({ token, password });
		const message =
			'Se ha guardado la nueva contraseña, ahora puedes iniciar sesión';
		dispatch(onShowAlertSuccess({ message }));
		return dispatch({
			type: NEW_PASSWORD,
			payload: {
				status: true,
			},
		});
	} catch (error) {
		return dispatch({
			type: NEW_PASSWORD_ERROR,
			payload: {
				status: false,
			},
		});
	}
};

export const becomeUser = (params) => async (dispatch) => {
	try {
		const response = await impersonateUser(params);
		if (response?.status >= 400)
			dispatch(onActionCreator(IMPERSONATE_USER_ERROR, { loading: false }));
		const { user } = response;
		setLocalStorage({ key: 'token', value: user.jwt });
		setLocalStorage({ key: 'userID', value: user.id });
		dispatch(
			onActionCreator(LOG_IN, {
				isLogin: true,
				user,
				loader: true,
				impersonated: true,
			}),
		);
		dispatch(getUsers({ user_id: user.id }));
	} catch (error) {
		dispatch(onActionCreator(IMPERSONATE_USER_ERROR, { error }));
	}
};

export const clearImpersonated = () => (dispatch) =>
	dispatch(onActionCreator(CLEAR_IMPERSONATED));

export const rejectNotifications = (body) => async (dispatch) => {
	rejectNotification(body).then((response) => {
		const { resp, codeStatus } = response;
		if (codeStatus === 304) {
			dispatch(
				onShowAlertSuccess({ message: 'Not Modified' }),
			);
		}
		if (codeStatus === 401) {
			dispatch(
				onShowAlertSuccess({ message: 'Not session found' }),
			);
		}
		if (codeStatus === 404) {
			dispatch(
				onShowAlertSuccess({ message: 'Not found' }),
			);
		}
		if (codeStatus === 500) {
			dispatch(
				onShowAlertSuccess({ message: 'Internal server' }),
			);
		}
		if (codeStatus === 200) {
			resp.then((data) => {
				dispatch(
					onShowAlertSuccess({ message: data.message }),
				);
			})
			dispatch(onActionCreator(REJECT_NOTIFICATION_GOOGLE, response));
		}
	}, (error) => {
		dispatch(
			onShowAlertSuccess({ message: 'Error al rechazar proyecto.' }),
		);
		dispatch(onActionCreator(REJECT_NOTIFICATION_ERROR, {
			error
		}))
	})
}

export const clearAccepAction = () => (dispatch) =>
	dispatch(onActionCreator(CLEAR_ACCEPT_ACTION));
