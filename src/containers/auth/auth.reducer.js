/* eslint-disable import/no-unresolved */
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
} from './auth.actions';

export const initialState = {
  isLogin: false,
  user: undefined,
  error: '',
  sended: false,
  status: false,
};

const authReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case LOG_IN:
      return {
        ...state,
        isLogin: action.payload.isLogin,
        user: action.payload.user,
      };
    case GOOGLE_LOG_IN:
      return {
        ...state,
        isLogin: action.payload.isLogin,
        user: action.payload.user,
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
    default:
      return state;
  }
};

export default authReducer;
