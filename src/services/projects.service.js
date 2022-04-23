import {
  getJsonRequest,
  postJsonRequest,
  deleteJsonRequest,
  putJsonRequest,
} from 'modules/requests';
import { cleanObject, factoryService, formatParams } from 'modules/services';
import { API_BASE_URL } from 'config/constants/environment';

/** Gets the list of products by params (page, limit, sort, keywords) */
export const getProjects = factoryService(({ userId, params }) =>
  getJsonRequest(
    `${API_BASE_URL}/users/${userId}/projects/${formatParams(params)}`,
  ),
);

/** Get product by id */
export const getProject = factoryService(({ userId, projectId }) =>
  getJsonRequest(`${API_BASE_URL}/users/${userId}/projects/${projectId}`),
);

/** Modify product */
export const modifyProject = factoryService(({ userId, projectId, data }) =>
  putJsonRequest(
    `${API_BASE_URL}/users/${userId}/projects/${projectId}`,
    cleanObject(data),
  ),
);

/** Create new Project */
export const createNewProject = factoryService(({ userId, project }) =>
  postJsonRequest(`${API_BASE_URL}/users/${userId}/projects/`, {
    project: cleanObject(project),
  }),
);

/** Delete Project */
export const deleteProject = factoryService(({ userId, projectId }) =>
  deleteJsonRequest(`${API_BASE_URL}/users/${userId}/projects/${projectId}`),
);
