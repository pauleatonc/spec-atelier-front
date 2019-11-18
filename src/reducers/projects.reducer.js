/* eslint-disable import/no-unresolved */
import { GET_ALL_PROJECTS } from '@Configurations/constants';

export const initialState = {
	projects: [],
};

export default (state = initialState, action) => {
	switch (action.type) {
		case GET_ALL_PROJECTS:
			return {
				...state,
				projects: action.payload.projects,
			};
		default:
			return state;
	}
};
