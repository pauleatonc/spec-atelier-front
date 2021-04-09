import onActionCreator from '../../config/store/helpers';
import { cleanObjectsAndArrays } from '../../modules/services';
import { getStats } from '../../services/profile.service';

export const GET_PROFILE_STATS_PRODUCTS = 'GET_PROFILE_STATS_PRODUCTS';
export const GET_PROFILE_STATS_PRODUCTS_SUCCESS =
	'GET_PROFILE_STATS_PRODUCTS_SUCCESS';
export const GET_PROFILE_STATS_PRODUCTS_ERROR =
	'GET_PROFILE_STATS_PRODUCTS_ERROR';
export const GET_PROFILE_STATS_PROJECTS = 'GET_PROFILE_STATS_PROJECTS';
export const GET_PROFILE_STATS_PROJECTS_SUCCESS =
	'GET_PROFILE_STATS_PROJECTS_SUCCESS';
export const GET_PROFILE_STATS_PROJECTS_ERROR =
	'GET_PROFILE_STATS_PROJECTS_ERROR';

export const onGetStats = (filters) => (dispatch, getState) => {
	const {
		user: { id },
	} = getState().auth;
	const params = {
		id,
		filters: cleanObjectsAndArrays(filters),
	};
	if (filters?.stat === 'product_stats') {
		dispatch(onActionCreator(GET_PROFILE_STATS_PRODUCTS));
		getStats(params).then(
			({ products }) =>
				dispatch(
					onActionCreator(GET_PROFILE_STATS_PRODUCTS_SUCCESS, {
						products: { ...products },
						filters,
					}),
				),
			(error) =>
				dispatch(
					onActionCreator(GET_PROFILE_STATS_PRODUCTS_ERROR, {
						error: true,
						nativeError: error,
					}),
				),
		);
	} else if (filters?.stat === 'project_stats') {
		dispatch(onActionCreator(GET_PROFILE_STATS_PROJECTS));
		getStats(params).then(
			({ projects }) =>
				dispatch(
					onActionCreator(GET_PROFILE_STATS_PROJECTS_SUCCESS, {
						projects: { ...projects },
						filters,
					}),
				),
			(error) =>
				dispatch(
					onActionCreator(GET_PROFILE_STATS_PROJECTS_ERROR, {
						error: true,
						nativeError: error,
					}),
				),
		);
	}
};
