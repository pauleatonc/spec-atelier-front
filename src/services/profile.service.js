import {
  getJsonRequest,
  patchFormRequest,
  putJsonRequest,
} from 'modules/requests';
import { factoryService, formatParams } from 'modules/services';
import { API_BASE_URL } from 'config/constants/environment';

/** Get user Profile */
export const getProfile = factoryService(({ id }) =>
  getJsonRequest(`${API_BASE_URL}/users/${id}`),
);

/** Set user Profile image */
export const setProfile = factoryService(({ id, user }) =>
  putJsonRequest(`${API_BASE_URL}/users/${id}`, { user }),
);

/** Set user Profile image */
export const setProfileImage = factoryService(({ id, image }) => {
  const body = { image };
  return patchFormRequest(
    `${API_BASE_URL}/users/${id}/profile_image_upload`,
    body,
  );
});

export const getStats = factoryService(({ id, filters }) =>
  getJsonRequest(`${API_BASE_URL}/users/${id}/stats${formatParams(filters)}`),
);

// how: GET api/users/{:id}
// update: PUT api/users/{:id} ==> espero user: {first_name: string, last_name: string, city: string, company: string }
// subir imagen: PATCH  api/users/{:id}/profile_image_upload ==> image: document (editado)
