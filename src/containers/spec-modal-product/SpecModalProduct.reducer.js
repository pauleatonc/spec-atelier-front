import {
	GET_PRODUCT,
	GET_PRODUCT_ERROR,
	SHOW_MODAL_PRODUCT,
	CLOSE_MODAL_PRODUCT,
	GET_IMAGE_SIZE_DATA,
	GET_IMAGE_SIZE_DATA_ERROR,
	GET_IMAGE_SIZE_DATA_SUCCESS,
} from './SpecModalProduct.actions';

export const initialState = {
	product: undefined,
	error: false,
	loader: true,
	showModalProduct: false,
	imageSizeData: {
		loading: false,
	},
};

const productsReducer = (state = initialState, action) => {
	const { payload, type } = action;
	switch (type) {
		case GET_PRODUCT:
			return {
				...state,
				product: payload.product,
				loader: payload.loader,
				showModalProduct: true,
			};
		case GET_PRODUCT_ERROR:
			return {
				...state,
				error: payload.error,
				loader: payload.loader,
			};
		case SHOW_MODAL_PRODUCT: {
			return {
				...state,
				hasProduct: payload.hasProduct,
				showModalProduct: true,
			};
		}
		case CLOSE_MODAL_PRODUCT:
			return {
				...initialState,
			};
		case GET_IMAGE_SIZE_DATA:
			return {
				...state,
				imageSizeData: {
					loading: true,
				},
			};
		case GET_IMAGE_SIZE_DATA_SUCCESS:
			return {
				...state,
				imageSizeData: {
					loading: false,
					width: payload.width,
					height: payload.height,
				},
			};
		case GET_IMAGE_SIZE_DATA_ERROR:
			return {
				...state,
				imageSizeData: {
					loading: false,
					error: payload.errorMessage,
				},
			};
		default:
			return state;
	}
};

export default productsReducer;
