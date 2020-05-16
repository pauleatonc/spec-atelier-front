import { API_BASE_URL } from '../config/constants/environment';
import { getJsonRequest } from '../modules/requests';

/**
 * 
 * Get default app data
 */

export const getDefaultData = () => getJsonRequest(`${API_BASE_URL}/api/configs/project_data/`);
