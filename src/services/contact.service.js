import { API_BASE_URL } from '../config/constants/environment';
import { postJsonRequest } from '../modules/requests';
import { cleanObject, factoryService } from '../modules/services';

/**
 * Send Contact Info to Brand.
 */
export const postContactBrand = factoryService(
  ({ brandId, contact }) => postJsonRequest(`${API_BASE_URL}/brands/${brandId}/contact_form`, { brand_contact_form: cleanObject(contact) }),
);

/**
 * Send Contact Info to Brand with Product.
 */
export const postContactProduct = factoryService(
  ({ productId, contact }) => postJsonRequest(`${API_BASE_URL}/products/${productId}/contact_form`, { product_contact_form: cleanObject(contact) }),
);


