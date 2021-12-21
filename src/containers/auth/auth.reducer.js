import {
	LOG_IN,
	LOG_OUT,
	LOG_IN_ERROR,
	GOOGLE_LOG_IN,
	GOOGLE_LOG_IN_ERROR,
	REGISTRATION,
	REGISTRATION_ERROR,
	RECOVER_PASSWORD,
	RECOVER_PASSWORD_ERROR,
	NEW_PASSWORD,
	NEW_PASSWORD_ERROR,
	CLEAR_IMPERSONATED,
	ACCEPT_NOTIFICATION_GOOGLE,
	ACCEPT_NOTIFICATION_LOGIN,
	ACCEPT_NOTIFICATION_ERROR,
	REJECT_NOTIFICATION_GOOGLE,
	REJECT_NOTIFICATION_ERROR,
	CLEAR_ACCEPT_ACTION,
} from './auth.actions';

export const initialState = {
	isLogin: false,
	user: undefined,
	error: '',
	sended: false,
	status: false,
	isAutoLogout: false,
	impersonated: false,
	acceptAction: false,
	isReject: false,
};

const authReducer = (state = initialState, action = {}) => {
	switch (action.type) {
		case LOG_IN:
			return {
				...state,
				isLogin: action.payload.isLogin,
				user: action.payload.user,
				isAutoLogout: false,
				impersonated: action.payload.impersonated || false,
			};
		case CLEAR_IMPERSONATED:
			return {
				...state,
				impersonated: false,
			};
		case GOOGLE_LOG_IN:
			return {
				...state,
				isLogin: action.payload.isLogin,
				user: action.payload.user,
				isAutoLogout: false,
				impersonated: action.payload.impersonated || false,
			};
		case LOG_IN_ERROR:
			return {
				...state,
				isLogin: action.payload.isLogin,
				error: action.payload.error,
			};
		case GOOGLE_LOG_IN_ERROR:
			return {
				...state,
				isLogin: action.payload.isLogin,
				error: action.payload.error,
			};
		case LOG_OUT: {
			return {
				...state,
				isLogin: action.payload.isLogin,
				user: action.payload.user,
				isAutoLogout: action.payload.isAutoLogout,
			};
		}
		case REGISTRATION:
			return {
				...state,
				isLogin: action.payload.isLogin,
				user: action.payload.user,
			};
		case REGISTRATION_ERROR:
			return {
				...state,
				isLogin: action.payload.isLogin,
				error: action.payload.error,
			};
		case RECOVER_PASSWORD:
			return {
				...state,
				sended: true,
				user: action.payload.user,
			};
		case RECOVER_PASSWORD_ERROR:
			return {
				...state,
				sended: false,
				error: action.payload.error,
			};
		case NEW_PASSWORD:
			return {
				...state,
				status: true,
				user: action.payload.user,
			};
		case NEW_PASSWORD_ERROR:
			return {
				...state,
				status: false,
				error: action.payload.error,
			};
		case ACCEPT_NOTIFICATION_GOOGLE:
			return { ...state, acceptAction: true, };
		case ACCEPT_NOTIFICATION_LOGIN:
			return { ...state };
		case ACCEPT_NOTIFICATION_ERROR: {
			return { ...state, error: 'Accept' };
		}
		case REJECT_NOTIFICATION_GOOGLE:
			return { ...state, isReject: true, }
		case REJECT_NOTIFICATION_ERROR: {
			return { ...state, error: 'Reject' };
		}
		case CLEAR_ACCEPT_ACTION:
			return { ...state, acceptAction: false }
		default:
			return state;
	}
};

export default authReducer;
