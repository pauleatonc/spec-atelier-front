import onActionCreator from '../../config/store/helpers';

import { checkEmail } from '../../services/users.service';

export const SHOW_MODAL = 'SHOW_MODAL';
export const HIDE_MODAL = 'HIDE_MODAL';

export const onShowModal = (type) => (dispatch) => {
	dispatch(onActionCreator(SHOW_MODAL, { type }));
};

export const onHideModal = () => (dispatch) => {
	dispatch(onActionCreator(HIDE_MODAL));
};

export const checkUserEmail = (email) => {
	checkEmail({ email }).then(
		(response) => console.log(response),
		(error) => console.error(error),
	);
};
