/* eslint-disable import/no-unresolved */
import { GET_ALL_PROJECTS, GET_ORDERED_PROJECTS } from '@Configurations/constants';

export const initialState = {
	projects: [],
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
		default:
			return state;
	}
};
