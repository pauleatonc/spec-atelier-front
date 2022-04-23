import { getJsonRequest, postJsonRequest } from 'modules/requests';
import { cleanObject, factoryService, formatParams } from 'modules/services';
import { API_BASE_URL } from 'config/constants/environment';

/** Gets the list of collaborators by params (page, limit, sort, keywords) */
export const getClients = factoryService((params) =>
  getJsonRequest(`${API_BASE_URL}/clients${formatParams(params || {})}`),
);

/** Create new Client. (maybe delete it) */
export const createNewClient = factoryService(({ userId, client }) =>
  postJsonRequest(`${API_BASE_URL}/users/${userId}/clients/`, {
    clients: cleanObject(client),
  }),
);

/** Gets the list of collaborators by params (page, limit, sort, keywords) */
export const getClient = factoryService((clientId) =>
  getJsonRequest(`${API_BASE_URL}/clients/${clientId}`),
);
