import {
	HIDE_SPEC_ADMIN_SUCCESS,
	SHOW_SPEC_ADMIN_SUCCESS,
	UPDATE_PRODUCT_CONFIG_SUCCESS,
	EDIT_CONFIG,
	SET_LOCAL_CONFIG,
} from './SpecAdmin.actions';

const specAdminState = {
	show: false,
	savedConfig: 0,
	initialConfig: true,
	localConfig: {
		all: true,
		short_desc: true,
		long_desc: true,
		reference: true,
		brand: true,
	},
};

/**
 * The spec admin' reducer.
 */
const specAdminReducer = (state = specAdminState, { type, payload }) => {
	switch (type) {
		case HIDE_SPEC_ADMIN_SUCCESS: {
			return { ...state, show: false };
		}
		case SHOW_SPEC_ADMIN_SUCCESS: {
			return { ...state, show: true };
		}
		case SET_LOCAL_CONFIG: {
			return { ...state, localConfig: payload };
		}
		case EDIT_CONFIG: {
			return {
				...state,
				initialConfig: false,
				localConfig: {
					...state.localConfig,
					...payload.newConfig,
				},
			};
		}
		case UPDATE_PRODUCT_CONFIG_SUCCESS: {
			return { ...state, savedConfig: state.savedConfig + 1 };
		}
		default: {
			return state;
		}
	}
};

export default specAdminReducer;
