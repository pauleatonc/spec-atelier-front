import onActionCreator from '../../config/store/helpers';

export const SELECT_FILTER = 'SELECT_FILTER';

export const selectFilter = selected => dispatch => dispatch(onActionCreator(SELECT_FILTER, { selected }));

