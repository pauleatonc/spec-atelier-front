/* eslint-disable import/no-unresolved */
import {
    LOG_IN,
    LOG_OUT,
    LOG_IN_ERROR,
    GOOGLE_LOG_IN,
    GOOGLE_LOG_IN_ERROR,
    REGISTRATION,
    REGISTRATION_ERROR,
  } from './auth.actions';
  
  export const initialState = {
    isLogin: false,
    user: undefined,
    error: '',
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
      default:
        return state;
    }
  };
  
  export default authReducer;
  