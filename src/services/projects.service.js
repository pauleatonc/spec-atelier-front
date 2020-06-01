import { API_BASE_URL } from '../config/constants/environment';
import { getJsonRequest, postJsonRequest } from '../modules/requests';
import { formatParams, cleanObject } from './services.helpers';

/**
 * Gets the list of products by params (page, limit, sort, keywords).
 */
export const getProjects = (userId, params) => getJsonRequest(`${API_BASE_URL}/api/users/${userId}/projects/${formatParams(params)}`);


/**
 * Create new Project.
 */
export const createNewProject = (userId, project) => postJsonRequest(`${API_BASE_URL}/api/users/${userId}/projects/`, { project: cleanObject(project) });


