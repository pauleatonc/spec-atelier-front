/* eslint-disable import/prefer-default-export */
/* eslint-disable no-undef */
/* eslint-disable no-console */
/* eslint-disable import/no-unresolved */
import request from '@Helpers/request.helper';
import {
	GET_ALL_PROJECTS,
	GET_PROJECTS_ERROR,
	GET_ORDERED_PROJECTS,
} from '@Configurations/constants';

const dispatchFormat = (type, payload) => ({ type, payload });

export const getAllProjectsAction = dispatch => async () => {
	try {
		const result = await request({ url: '/projects' });

		if (result.error) throw new Error(result.error);

		dispatch(
			dispatchFormat(GET_ALL_PROJECTS, {
				projects: result.projects,
				loader: false,
			}),
		);
	} catch (error) {
		dispatch(
			dispatchFormat(GET_PROJECTS_ERROR, {
				loader: false,
				error: true,
			}),
		);
	}
};

export const getOrderedProjectsAction = dispatch => async ordered_by => {
	try {
		const result = await request({
			url: '/projects/ordered',
			params: { ordered_by },
		});

		if (result.error) throw new Error(result.error);

		dispatch(
			dispatchFormat(GET_ORDERED_PROJECTS, {
				projects: result.projects,
				loader: false,
			}),
		);
	} catch (error) {
		dispatch(
			dispatchFormat(GET_PROJECTS_ERROR, {
				loader: false,
				error: true,
			}),
		);
	}
};
