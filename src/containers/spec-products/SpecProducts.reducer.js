import {
	HIDE_SPEC_PRODUCTS_SUCCESS,
	SHOW_SPEC_PRODUCTS_SUCCESS,
	UPDATE_SPEC_PRODUCTS_FILTER_ITEM,
	UPDATE_SPEC_PRODUCTS_FILTER_SECTION,
	SHOW_ATTACH_MODAL,
	HIDE_ATTACH_MODAL,
} from './SpecProducts.actions';

const specProductsState = {
	collection: [],
	filters: {
		item: '',
		section: '',
	},
	loading: false,
	show: false,
	showAttachModal: false,
	productToAttach: {},
};

/**
 * The products' reducer.
 */
const specProductsReducer = (state = specProductsState, { payload, type }) => {
	switch (type) {
		// eslint-disable-next-line no-lone-blocks
		case HIDE_SPEC_PRODUCTS_SUCCESS: {
			return { ...specProductsState, show: false };
		}
		case SHOW_SPEC_PRODUCTS_SUCCESS: {
			return { ...state, show: true };
		}

		case UPDATE_SPEC_PRODUCTS_FILTER_ITEM: {
			return {
				...state,
				filters: {
					...state.filters,
					item: payload.itemID,
				},
			};
		}
		case UPDATE_SPEC_PRODUCTS_FILTER_SECTION: {
			return {
				...state,
				filters: {
					...state.filters,
					section: payload.sectionID,
					item: payload.itemID,
				},
			};
		}
		case SHOW_ATTACH_MODAL: {
			return {
				...state,
				showAttachModal: true,
				productToAttach: payload.product,
			};
		}
		case HIDE_ATTACH_MODAL: {
			return {
				...state,
				showAttachModal: false,
				productToAttach: {},
			};
		}
		default: {
			return state;
		}
	}
};

export default specProductsReducer;
