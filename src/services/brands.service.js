import { API_BASE_URL } from '../config/constants/environment';
import { getJsonRequest, postJsonRequest } from '../modules/requests';
import { cleanObject, factoryService, formatParams } from '../modules/services';

/**
 * Gets the list of collaborators by params (page, limit, sort, keywords).
 */
export const getBrands = factoryService((params) =>
	getJsonRequest(`${API_BASE_URL}/brands${formatParams(params || {})}`),
);
