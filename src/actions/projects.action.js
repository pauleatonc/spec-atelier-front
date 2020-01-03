/* eslint-disable import/prefer-default-export */
/* eslint-disable no-undef */
/* eslint-disable no-console */
/* eslint-disable import/no-unresolved */
import request from '@Helpers/request.helper';
import {
	GET_ALL_PROJECTS,
	GET_ORDERED_PROJECTS,
} from '@Configurations/constants';

const dispatchFormat = (type, payload) => ({ type, payload });

export const getAllProjectsAction = dispatch => () => {
	request({ url: '/projects' }).then(result =>
		dispatch(
			dispatchFormat(GET_ALL_PROJECTS, {
				projects: result.projects,
				loader: false,
			}),
		),
	);
};

export const getOrderedProjectsAction = dispatch => ordered_by => {
	request({ url: '/projects/ordered', params: { ordered_by } }).then(result =>
		dispatch(
			dispatchFormat(GET_ORDERED_PROJECTS, {
				projects: result.projects,
				loader: false,
			}),
		),
	);
};
