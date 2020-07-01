import { API_BASE_URL } from '../config/constants/environment';
import { postJsonRequest } from '../modules/requests';
import { factoryService } from '../modules/services'

/**
 * Create an associated text's by the given block.
 */
export const createSpecBlockText = factoryService(({ userID, projectID, text }) =>
  postJsonRequest(`${API_BASE_URL}/users/${userID}/project_specs/${projectID}/create_text`, { text }));
