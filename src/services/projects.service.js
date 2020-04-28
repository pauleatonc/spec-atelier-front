import { API_BASE_URL } from '../config/constants/environment';
import { getJsonRequest } from '../modules/requests';

/** 
 * Format Object of params to string
 */
const formatParams = obj => obj
    ? `?${Object.keys(obj).map(key => `${key}=${obj[key]}`).join('&')}`
    : '';

/**
 * Gets the list of current user projects sections available.
 */
export const getProjectsByUserID = userId => getJsonRequest(`${API_BASE_URL}/api/users/${userId}/projects`);

/**
 * Gets the list of products' items by the given section.
 */
export const getOrderedProjects = (userId, params) => getJsonRequest(`${API_BASE_URL}/api/users/${userId}/projects/ordered${formatParams(params)}`);

