import onActionCreator from '../../config/store/helpers';

export const SHOW_MODAL = 'SHOW_MODAL';
export const HIDE_MODAL = 'HIDE_MODAL';

export const onShowModal = (type) => (dispatch) => {
	dispatch(onActionCreator(SHOW_MODAL, { type }));
};

export const onHideModal = () => (dispatch) => {
	dispatch(onActionCreator(HIDE_MODAL));
};
