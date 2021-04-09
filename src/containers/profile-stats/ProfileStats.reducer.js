import {
	GET_PROFILE_STATS_PRODUCTS,
	GET_PROFILE_STATS_PRODUCTS_SUCCESS,
	GET_PROFILE_STATS_PRODUCTS_ERROR,
	GET_PROFILE_STATS_PROJECTS,
	GET_PROFILE_STATS_PROJECTS_SUCCESS,
	GET_PROFILE_STATS_PROJECTS_ERROR,
} from './ProfileStats.actions';

const ProfileStatsState = {
	filters: {
		page: 0,
		limit: 10,
		sort_by: null,
		stat: null,
	},
	products: {
		loading: false,
		nextPage: null,
		total: 0,
		error: false,
		list: [],
	},
	projects: {
		loading: false,
		nextPage: null,
		total: 0,
		error: false,
		list: [],
	},
};

/**
 * The Stats' reducer.
 */
const ProfileStatsReducer = (
	state = { ...ProfileStatsState },
	{ payload, type },
) => {
	switch (type) {
		case GET_PROFILE_STATS_PRODUCTS: {
			return {
				...state,
				products: {
					...state.products,
					loading: true,
					error: false,
				},
			};
		}
		case GET_PROFILE_STATS_PRODUCTS_SUCCESS: {
			return {
				...state,
				filters: { ...payload.filters },
				products: {
					loading: false,
					error: false,
					...payload.products,
				},
			};
		}
		case GET_PROFILE_STATS_PRODUCTS_ERROR: {
			return {
				...state,
				products: {
					...payload,
					loading: false,
					error: true,
				},
			};
		}
		case GET_PROFILE_STATS_PROJECTS: {
			return {
				...state,
				projects: {
					...state.projects,
					loading: true,
					error: false,
				},
			};
		}
		case GET_PROFILE_STATS_PROJECTS_SUCCESS: {
			return {
				...state,
				filters: { ...payload.filters },
				projects: {
					loading: false,
					error: false,
					...payload.projects,
				},
			};
		}
		case GET_PROFILE_STATS_PROJECTS_ERROR: {
			return {
				...state,
				projects: {
					...payload,
					loading: false,
					error: true,
				},
			};
		}
		default: {
			return state;
		}
	}
};

export default ProfileStatsReducer;
