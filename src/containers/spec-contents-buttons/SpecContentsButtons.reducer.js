import { CHANGE_OPTION } from './SpecContentsButtons.actions';

const dataSectionState = {
	option: 'F',
};

const dataSectionsReducer = (state = dataSectionState, { payload, type }) => {
	switch (type) {
		case CHANGE_OPTION:
			return {
				...state,
				option: payload.option,
			};

		default:
			return state;
	}
};
export default dataSectionsReducer;
