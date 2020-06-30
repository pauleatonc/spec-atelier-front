import { postJsonRequest } from '../modules/requests';
import { API_BASE_URL } from '../config/constants/environment';

/**
 * Create a new text's item into the given project.
 */
export const createSpecItemText = (userID, projectID, text) =>
  postJsonRequest(`${API_BASE_URL}/users/${userID}/project_specs/${projectID}/create_text`, { text });
