import { API_BASE_URL } from '../config/constants/environment';
import { getJsonRequest, postJsonRequest, deleteJsonRequest } from '../modules/requests';
import { cleanObject, factoryService, formatParams } from '../modules/services';

/**
 * Gets the list of products by params (page, limit, sort, keywords).
 */
export const getProjects = factoryService(
  ({ userId, params }) => getJsonRequest(`${API_BASE_URL}/users/${userId}/projects/${formatParams(params)}`),
);

/**
 * Get porject by id
 */
export const getProject = factoryService(
  ({ id, userId }) => getJsonRequest(`${API_BASE_URL}/users/${userId}/projects/${id}`),
);


/**
 * Create new Project.
 */
export const createNewProject = factoryService(
  ({ userId, project }) => postJsonRequest(`${API_BASE_URL}/users/${userId}/projects/`, { project: cleanObject(project) }),
);


export const deleteProject = factoryService(
  ({ userId, id }) => deleteJsonRequest(`${API_BASE_URL}/users/${userId}/projects/${id}`, { id }),
);
