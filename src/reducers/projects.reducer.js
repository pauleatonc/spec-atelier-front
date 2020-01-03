/* eslint-disable import/no-unresolved */
import {
	GET_ALL_PROJECTS,
	GET_ORDERED_PROJECTS,
	GET_PROJECTS_ERROR,
} from '@Configurations/constants';

export const initialState = {
	projects: [],
	error: false,
	loader: true,
};

export default (state = initialState, action) => {
	switch (action.type) {
		case GET_ALL_PROJECTS:
		case GET_ORDERED_PROJECTS:
			return {
				...state,
				projects: action.payload.projects,
				loader: action.payload.loader,
			};
		case GET_PROJECTS_ERROR:
			return {
				...state,
				error: action.payload.error,
				loader: action.payload.loader,
			};
		default:
			return state;
	}
};
