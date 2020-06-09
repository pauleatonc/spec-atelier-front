import { API_BASE_URL } from '../config/constants/environment';
import { postJsonRequest } from '../modules/requests';
import { cleanObject } from './services.helpers';

/**
 * Send Contact Info.
 */
export const postContact = (brandId, contact) => postJsonRequest(`${API_BASE_URL}/api/brands/${brandId}/contact_form`, { brand_contact_form: cleanObject(contact) });

