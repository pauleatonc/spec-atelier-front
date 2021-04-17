import {
	HIDE_SPEC_PRODUCTS_SUCCESS,
	SHOW_SPEC_PRODUCTS_SUCCESS,
	UPDATE_SPEC_PRODUCTS_FILTER_ITEM,
	UPDATE_SPEC_PRODUCTS_FILTER_SECTION,
} from './SpecProducts.actions';

const specProductsState = {
	collection: [],
	filters: {
		item: '',
		limit: 20,
		keyword: '',
		section: '',
		sort: '',
		specification: [],
	},
	loading: false,
	nextPage: null,
	show: false,
	total: 0,
	specification: [],
	room_types: [],
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
		default: {
			return state;
		}
	}
};

export default specProductsReducer;
