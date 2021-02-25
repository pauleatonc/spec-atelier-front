import { API_BASE_URL } from '../config/constants/environment';
import { getJsonRequest, postFormRequest, putJsonRequest } from '../modules/requests';
import { factoryService } from '../modules/services';

/**
 * Get user Profile
 */
export const getProfile = factoryService(({ id }) => getJsonRequest(`${API_BASE_URL}/users/${id}`));

/**
 * Set user Profile image
 */

export const setProfile = factoryService(({ id, user }) => putJsonRequest(`${API_BASE_URL}/users/${id}`, { user }));


/**
 * Set user Profile image
 */

export const setProfileImage = factoryService(({ id, data }) => postFormRequest(`${API_BASE_URL}/users/${id}/add_profile_image`, data));

// how: GET api/users/{:id}
// update: PUT api/users/{:id} ==> espero user: {first_name: string, last_name: string, city: string, company: string }
// subir imagen: PATCH  api/users/{:id}/profile_image_upload ==> image: document (editado)
