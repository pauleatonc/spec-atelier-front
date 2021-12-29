import { API_BASE_URL } from '../config/constants/environment';
import {
	getJsonRequest,
	postJsonRequest,
	patchJsonRequest,
} from '../modules/requests';
import { factoryService, formatParams } from '../modules/services';

export const getUsers = factoryService((params) =>
	getJsonRequest(`${API_BASE_URL}/users${formatParams(params || {})}`),
);

export const impersonateUser = factoryService((data) =>
	postJsonRequest(`${API_BASE_URL}/users/impersonate`, data),
);

export const checkEmail = factoryService((email) =>
	getJsonRequest(`${API_BASE_URL}/users/check_email_exists?email=${email}`),
);

export const inviteUserToProject = factoryService(({ projectID, params }) => {
	const body = {
		invitation: params,
	};
	return postJsonRequest(
		`${API_BASE_URL}/projects/${projectID}/invitations`,
		body,
	);
});

export const updatePermissions = factoryService(({ id, params }) => {
	return patchJsonRequest(
		`${API_BASE_URL}/project_configs/${id}/update`,
		params,
	);
});

export const unShareUserToProject = factoryService(({ id, email }) =>
	postJsonRequest(`${API_BASE_URL}project_configs/${id}/unshare`, { email }),
);

export const getUserPermissions = factoryService(({ id, email }) =>
	getJsonRequest(
		`${API_BASE_URL}/project_configs/${id}/permissions?email=${email}`,
	),
);
