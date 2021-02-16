import {
	LOADING_SPEC_DOWNLOAD,
	DOWNLOAD_URL_SUCCESS,
	DOWNLOAD_URL_ERROR,
	CLEAN_DOWNLOAD,
} from './SpecHeader.actions';

const specHeaderState = {
	error: undefined,
	loading: false,
	url: '',
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
		default: {
			return state;
		}
	}
};

export default specDocumentReducer;
