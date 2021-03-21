import { API_BASE_URL } from '../config/constants/environment';
import { postJsonRequest } from '../modules/requests';
import { cleanObject, factoryService } from '../modules/services';

/**
 * Send Contact Info to Client.
 */
export const postContactClient = factoryService(
  ({ clientId, contact }) => postJsonRequest(`${API_BASE_URL}/clients/${clientId}/contact_form`, { client_contact_form: cleanObject(contact) }),
);

/**
 * Send Contact Info to Client with Product.
 */
export const postContactProduct = factoryService(
  ({ productId, contact }) => postJsonRequest(`${API_BASE_URL}/products/${productId}/contact_form`, { product_contact_form: cleanObject(contact) }),
);


