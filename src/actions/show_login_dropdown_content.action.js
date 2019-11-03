/* eslint-disable import/no-unresolved */
/* eslint-disable import/prefer-default-export */
import {
	SHOW_LOGIN_DROPDOWN_CONTENT,
	HIDE_LOGIN_DROPDOWN_CONTENT,
} from '@Configurations/constants';

export const toggleDropdownContentAction = dispatch => isShowed => {
	return dispatch({
		type: isShowed ? HIDE_LOGIN_DROPDOWN_CONTENT : SHOW_LOGIN_DROPDOWN_CONTENT,
		payload: {
			show: !isShowed,
		},
	});
};
