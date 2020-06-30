import { API_BASE_URL } from '../config/constants/environment';
import { getJsonRequest, postJsonRequest } from '../modules/requests';
import { formatParams, cleanObject } from './services.helpers';

/**
 * Gets the list of collaboratos by params (page, limit, sort, keywords).
 */
export const getBrands = (params) => getJsonRequest(`${API_BASE_URL}/brands${formatParams(params || {})}`);

/**
 * Create new Brand.
 */
export const createNewBrand = (userId, brand) => postJsonRequest(`${API_BASE_URL}/users/${userId}/brands/`, { brand: cleanObject(brand) });

/**
 * Gets the list of collaboratos by params (page, limit, sort, keywords).
 */
export const getBrand = brandId => getJsonRequest(`${API_BASE_URL}/brands/${brandId}`);

