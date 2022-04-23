import { getJsonRequest } from 'modules/requests';
import { factoryService, formatParams } from 'modules/services';
import { API_BASE_URL } from 'config/constants/environment';

/** Gets the list of sections by params (page, limit, sort, keywords) */
export const getSections = factoryService((params) =>
  getJsonRequest(`${API_BASE_URL}/sections${formatParams(params)}`),
);

/** Gets the list of sections by params (page, limit) */
export const getSection = factoryService((sectionId) =>
  getJsonRequest(`${API_BASE_URL}/sections/${sectionId}`),
);
