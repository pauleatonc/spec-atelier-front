import { API_BASE_URL } from '../config/constants/environment';
import { postJsonRequest } from '../modules/requests';
import { cleanObject, factoryService } from '../modules/services';

/**
 * Send Contact Info.
 */
export const postContact = factoryService(
  ({ brandId, contact }) => postJsonRequest(`${API_BASE_URL}/brands/${brandId}/contact_form`, { brand_contact_form: cleanObject(contact) }),
);

