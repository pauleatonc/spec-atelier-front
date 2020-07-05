import { API_BASE_URL } from '../config/constants/environment';
import { postJsonRequest } from '../modules/requests';
import { factoryService } from '../modules/services'

/**
 * Create a new text's item into the given project.
 */
export const createSpecItemText = factoryService(({ userID, projectID, text }) =>
  postJsonRequest(`${API_BASE_URL}/users/${userID}/project_specs/${projectID}/create_text`, { text }));
