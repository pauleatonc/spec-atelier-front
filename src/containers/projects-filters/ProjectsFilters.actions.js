import onActionCreator from '../../config/store/helpers';

export const PROJECTS_SORT_FILTER = 'PROJECTS_SORT_FILTER';

export const selectProjectSortFilter = selected => dispatch => dispatch(onActionCreator(PROJECTS_SORT_FILTER, { selected }));

