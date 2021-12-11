import {
	SHOW_MODAL,
	HIDE_MODAL,
	CHECK_EMAIL_EXIST,
	SET_DETAIL_MEMBER,
	HIDE_DISCLAIMER,
} from './actions';
import { TYPE_MODALS } from './constants';

const initialState = {
	loading: false,
	[TYPE_MODALS.NEW_MEMBER_MODAL]: false,
	[TYPE_MODALS.TEAM_MODAL]: false,
	[TYPE_MODALS.DETAIL_MEMBER_MODAL]: false,
	showDisclaimer: false,
	user: null,
	detailMember: null,
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
		case CHECK_EMAIL_EXIST:
			return {
				...state,
				showDisclaimer: !payload.user?.id,
				user: payload.user,
			};
		case SET_DETAIL_MEMBER:
			return {
				...state,
				detailMember: payload.member,
				[TYPE_MODALS.NEW_MEMBER_MODAL]: false,
				[TYPE_MODALS.TEAM_MODAL]: false,
				[TYPE_MODALS.DETAIL_MEMBER_MODAL]: true,
			};
		case HIDE_DISCLAIMER:
			return {
				...state,
				showDisclaimer: false,
				user: null,
			};
		default: {
			return state;
		}
	}
};

export default reducer;
