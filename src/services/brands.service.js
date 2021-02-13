import { API_BASE_URL } from '../config/constants/environment';
import { getJsonRequest, postJsonRequest } from '../modules/requests';
import { cleanObject, factoryService, formatParams } from '../modules/services';

/**
 * Gets the list of collaborators by params (page, limit, sort, keywords).
 */
export const getBrands = factoryService((params) =>
	getJsonRequest(`${API_BASE_URL}/brands${formatParams(params || {})}`),
);

/**
 * Create new Brand.
 */
export const createNewBrand = factoryService(({ userId, brand }) =>
	postJsonRequest(`${API_BASE_URL}/users/${userId}/brands/`, {
		brand: cleanObject(brand),
	}),
);

/**
 * Gets the list of collaborators by params (page, limit, sort, keywords).
 */
export const getBrand = factoryService((brandId) =>
	getJsonRequest(`${API_BASE_URL}/brands/${brandId}`),
);

/**
 * Gets the list of collaborators by params (page, limit, sort, keywords).
 */
export const getClients = factoryService((params) =>
	getJsonRequest(`${API_BASE_URL}/clients${formatParams(params || {})}`),
);
