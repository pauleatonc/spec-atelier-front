import { API_BASE_URL } from '../config/constants/environment';
import { getJsonRequest, postJsonRequest } from '../modules/requests';
import { formatToQueryString, cleanObject } from './services.helpers';

/**
 * Gets the list of products by params (page, limit, sort, keywords).
 */
export const getProjects = (userId, params) => getJsonRequest(`${API_BASE_URL}/users/${userId}/projects/${formatToQueryString(params)}`);


/**
 * Create new Project.
 */
export const createNewProject = (userId, project) => postJsonRequest(`${API_BASE_URL}/users/${userId}/projects/`, { project: cleanObject(project) });


