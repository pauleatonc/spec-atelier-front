import { API_BASE_URL } from '../config/constants/environment';
import { getJsonRequest } from '../modules/requests';
import { factoryService } from '../modules/services';

/**
 * Get default app data
 */
export const getDefaultData = factoryService(() => getJsonRequest(`${API_BASE_URL}/configs/project_data/`));
