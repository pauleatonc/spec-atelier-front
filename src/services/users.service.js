import { API_BASE_URL } from '../config/constants/environment';
import {
	getJsonRequest,
	postJsonRequest,
	patchJsonRequest,
	deleteJsonRequest,
} from '../modules/requests';
import { factoryService, formatParams } from '../modules/services';

import { PERMISSIONS_TYPE } from '../containers/spec-modal-team/constants';

export const getUsers = factoryService((params) =>
	getJsonRequest(`${API_BASE_URL}/users${formatParams(params || {})}`),
);

export const impersonateUser = factoryService((data) =>
	postJsonRequest(`${API_BASE_URL}/users/impersonate`, data),
);

export const checkEmail = factoryService((emails) =>
	getJsonRequest(`${API_BASE_URL}/users/check_email_exists${emails}`),
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

export const updatePermission = factoryService(
	({ projectId, permissionId, invitation, type }) => {
		const body = {
			[type]: invitation,
		};
		return patchJsonRequest(
			`${API_BASE_URL}/projects/${projectId}/${type}s/${permissionId}`,
			body,
		);
	},
);

export const getUserPermissions = factoryService(({ id, email }) =>
	getJsonRequest(
		`${API_BASE_URL}/project_configs/${id}/permissions?email=${email}`,
	),
);

export const deleteUser = factoryService(
	({ projectId, permissionId, permissionType }) =>
		deleteJsonRequest(
			`${API_BASE_URL}/projects/${projectId}/${
				permissionType === PERMISSIONS_TYPE.INVITATION
					? 'invitations'
					: 'permissions'
			}/${permissionId}`,
		),
);

export const resendInvitation = factoryService(({ projectId, invitationId }) =>
	patchJsonRequest(
		`${API_BASE_URL}/projects/${projectId}/invitations/${invitationId}/resend`,
	),
);
