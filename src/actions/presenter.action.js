/* eslint-disable import/prefer-default-export */
/* eslint-disable import/no-unresolved */
import { APP_PRESENTER, LOGIN_PRESENTER } from '@Configurations/constants';

export const presenterAction = dispatch => pathname => {
	return dispatch({
		type: pathname === 'app' ? APP_PRESENTER : LOGIN_PRESENTER,
		payload: {
			view: pathname,
		},
	});
};
