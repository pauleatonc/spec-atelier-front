import onActionCreator from '../../config/store/helpers';

import { checkEmail, inviteUserToProject } from '../../services/users.service';

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

export const checkUserEmail = (email) => (dispatch) => {
	checkEmail(email).then(
		({ user }) => dispatch(onActionCreator(CHECK_EMAIL_EXIST, { user, email })),
		(error) => console.error(error),
	);
};

export const hideDisclaimer = () => onActionCreator(HIDE_DISCLAIMER);

export const sendUserInvitation = (projectID, params) => {
	inviteUserToProject({ projectID, params }).then(
		(response) => console.log(response),
		(error) => console.error(error),
	);
};

export const setDetailMember = (member) => (dispatch) => {
	dispatch(onActionCreator(SET_DETAIL_MEMBER, { member }));
};
