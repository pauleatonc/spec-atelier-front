import { postJsonRequest } from 'modules/requests';
import { cleanObject, factoryService } from 'modules/services';
import { API_BASE_URL } from 'config/constants/environment';

/** request business plan */
export const postPlanContact = factoryService((params) =>
  postJsonRequest(`${API_BASE_URL}/plans/contact_form`, {
    plan_contact_form: cleanObject(params),
  }),
);
