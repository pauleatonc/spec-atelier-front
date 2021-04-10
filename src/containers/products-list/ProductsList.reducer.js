import {
	GET_PRODUCTS,
	GET_PRODUCTS_ERROR,
	GET_PRODUCTS_SUCCESS,
	GET_SECTIONS_ERROR,
	GET_SECTIONS_SUCCESS,
	GET_ITEMS_SUCCESS,
	GET_ITEMS_ERROR,
	GET_MORE_PRODUCTS,
	ON_SELECT_ALL,
	CLEAN_PRODUCT_LIST_STORE,
	GET_BRANDS_SUCCESS,
	GET_BRANDS_ERROR,
} from './ProductsList.actions';

export const productsListInitialState = {
	filters: {
		page: 0,
		limit: 10,
		keyword: '',
		section: [],
		room_type: [],
		project_type: [],
		item: [],
		client: [],
		sort: '',
		with_products: true,
		most_used: false,
	},
	products: [],
	items: [],
	brands: [],
	sections: [],
	isSelectedAll: true,
	loading: true,
	nextPage: null,
	show: false,
	total: 0,
	error: false,
};

/**
 * The products' reducer.
 */
const productsListReducer = (
	state = { ...productsListInitialState },
	{ payload, type },
) => {
	switch (type) {
		case GET_PRODUCTS: {
			return {
				...state,
				loading: true,
				error: false,
			};
		}
		case GET_MORE_PRODUCTS: {
			return {
				...state,
				filters: { ...payload.filters },
				products: [...state.products, ...(payload?.products || [])],
				loading: false,
				error: false,
			};
		}
		case GET_PRODUCTS_ERROR:
		case GET_PRODUCTS_SUCCESS: {
			return {
				...state,
				...payload,
				loading: false,
				error: false,
			};
		}
		case GET_SECTIONS_SUCCESS: {
			return {
				...state,
				sections: payload.sections,
				error: false,
			};
		}
		case GET_ITEMS_SUCCESS: {
			return {
				...state,
				items: payload.items,
				error: false,
			};
		}
		case GET_BRANDS_SUCCESS:
			return {
				...state,
				brands: payload.brands.list,
				error: false,
			};
		case GET_SECTIONS_ERROR:
		case GET_ITEMS_ERROR:
		case GET_BRANDS_ERROR:
			return { ...state };
		case ON_SELECT_ALL:
			return {
				...state,
				isSelectedAll: payload.isSelectedAll,
				loading: false,
				error: false,
			};
		case CLEAN_PRODUCT_LIST_STORE:
			return {
				...productsListInitialState,
			};
		default: {
			return state;
		}
	}
};

export default productsListReducer;
