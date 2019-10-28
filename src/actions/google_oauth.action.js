/* eslint-disable import/prefer-default-export */
/* eslint-disable import/no-unresolved */
import getEndPoint from '@Configurations/config';
import { GOOGLE_LOG_IN } from '@Configurations/constants';

export const googleOuathAction = dispatch => data => {
	const endpoint = getEndPoint({ path: 'googleOauth', service: 'googleOauth' });
};
