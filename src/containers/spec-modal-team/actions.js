import onActionCreator from '../../config/store/helpers';
import { onShowAlertSuccess } from '../alert/Alert.actions';
import { onGetSpecBlocks } from '../spec-document/SpecDocument.actions';
import {
	checkEmail,
	inviteUserToProject,
	deleteUser,
	resendInvitation,
	updatePermission,
} from '../../services/users.service';

import { TYPE_MODALS } from './constants';

export const SHOW_MODAL = 'SHOW_MODAL';
export const HIDE_MODAL = 'HIDE_MODAL';
export const CHECK_EMAIL_EXIST = 'CHECK_EMAIL_EXIST';
export const SET_DETAIL_MEMBER = 'SET_DETAIL_MEMBER';
export const HIDE_DISCLAIMER = 'HIDE_DISCLAIMER';

export const onShowModal = (type) => (dispatch) => {
	dispatch(onActionCreator(SHOW_MODAL, { type }));
};

export const onHideModal = () => (dispatch) => {
	dispatch(onActionCreator(HIDE_MODAL));
};

export const checkUserEmail = (emailList) => (dispatch) => {
	checkEmail(emailList).then(
		({ user }) => {
			dispatch(onActionCreator(CHECK_EMAIL_EXIST, { user, emailList }));
		},
		(error) => console.error(error),
	);
};

export const hideDisclaimer = () => onActionCreator(HIDE_DISCLAIMER);

export const sendUserInvitation = (projectID, params) => (dispatch) => {
	inviteUserToProject({ projectID, params }).then(
		({ message, errors }) => {
			dispatch(onShowAlertSuccess({ message }));
			if (!errors.length) {
				dispatch(onGetSpecBlocks(projectID));
				dispatch(onHideModal());
				dispatch(onShowModal(TYPE_MODALS.TEAM_MODAL));
			}
		},
		(error) => console.error(error),
	);
};

export const setDetailMember = (member) => (dispatch) => {
	dispatch(onActionCreator(SET_DETAIL_MEMBER, { member }));
};

export const onDeleteUser = (projectId, permissionId, permissionType) => (
	dispatch,
) =>
	deleteUser({ projectId, permissionId, permissionType }).then(
		({ message, error }) => {
			if (error) dispatch(onShowAlertSuccess({ message: error }));
			else {
				dispatch(onGetSpecBlocks(projectId));
				dispatch(onShowAlertSuccess({ message }));
				dispatch(onHideModal());
				dispatch(onShowModal(TYPE_MODALS.TEAM_MODAL));
			}
		},
		(error) => console.error(error),
	);

export const onResendInvitation = (projectId, invitationId) => (dispatch) => {
	resendInvitation({ projectId, invitationId }).then(
		({ message }) => {
			dispatch(onShowAlertSuccess({ message }));
		},
		(error) => console.error(error),
	);
};

export const onUpdatePermission = (
	projectId,
	permissionId,
	permissionType,
	invitation,
	callback,
) =>
	updatePermission({
		projectId,
		permissionId,
		permissionType,
		invitation,
	}).then(
		(response) => {
			console.log(response);
			if (callback) callback();
		},
		(error) => console.error(error),
	);
