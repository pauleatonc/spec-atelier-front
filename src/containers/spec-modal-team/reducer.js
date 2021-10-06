import { SHOW_MODAL, HIDE_MODAL } from './actions';
import { TYPE_MODALS } from './constants';

const initialState = {
	loading: false,
	[TYPE_MODALS.NEW_MEMBER_MODAL]: false,
	[TYPE_MODALS.TEAM_MODAL]: false,
	[TYPE_MODALS.DETAIL_MEMBER_MODAL]: false,
};

/**
 * plan form reducer.
 */
const reducer = (state = initialState, { payload, type }) => {
	switch (type) {
		case SHOW_MODAL:
			return {
				...state,
				[payload.type]: true,
			};
		case HIDE_MODAL:
			return {
				...initialState,
			};
		default: {
			return state;
		}
	}
};

export default reducer;
