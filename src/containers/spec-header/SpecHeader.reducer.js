import {
	LOADING_SPEC_DOWNLOAD,
	DOWNLOAD_URL_SUCCESS,
	DOWNLOAD_URL_ERROR,
	CLEAN_DOWNLOAD,
	LOADING_BUDGET_DOCUMENT,
	DOWNLOAD_BUDGET_SUCCESS,
	DOWNLOAD_BUDGET_ERROR,
} from './SpecHeader.actions';

const specHeaderState = {
	error: undefined,
	loading: false,
	url: '',
	budgetDocument: null,
};

/**
 * The spec document header' reducer.
 */
const specDocumentReducer = (state = specHeaderState, { payload, type }) => {
	switch (type) {
		case LOADING_SPEC_DOWNLOAD:
			return { ...state, loading: true, url: '' };
		case DOWNLOAD_URL_SUCCESS:
			return { ...state, loading: false, url: payload.url };
		case DOWNLOAD_URL_ERROR:
			return { ...state, loading: false, url: '' };
		case CLEAN_DOWNLOAD:
			return { ...state, url: '', budgetDocument: null };
		case LOADING_BUDGET_DOCUMENT:
			return { ...state, loading: true, budgetDocument: null };
		case DOWNLOAD_BUDGET_SUCCESS:
			return {
				...state,
				loading: false,
				budgetDocument: payload.budgetDocument,
			};
		case DOWNLOAD_BUDGET_ERROR:
			return { ...state, loading: false, budgetDocument: null };
		default: {
			return state;
		}
	}
};

export default specDocumentReducer;
