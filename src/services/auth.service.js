import { API_BASE, API_BASE_URL } from '../config/constants/environment';
import { postJsonRequest, putJsonRequest, getJsonRequest } from '../modules/requests';
import { factoryService } from '../modules/services';

/**
 * Login from app
 */
export const logIn = factoryService(data => postJsonRequest(`${API_BASE_URL}/sessions`, data));

/**
 * Logout from app
 */
export const logOut = factoryService(() => putJsonRequest(`${API_BASE_URL}/logout`));

/** 
 * Register User
 *  */

export const register = factoryService(data => postJsonRequest(`${API_BASE_URL}/registrations`, data));


/**
 *  Login with google
 */
export const googleLogin = factoryService(data => postJsonRequest(`${API_BASE}/auth/google_login_service`, data));

/** 
 * Recovery Pass
 *  */

export const recoveryPassword = factoryService(email => getJsonRequest(`${API_BASE_URL}/password_forgot?email=${email}`));

/** 
 * New Password
 *  */

export const newPassword = factoryService(({ token, password }) => getJsonRequest(`${API_BASE_URL}/password_reset?token=${token}&password=${password}`));
