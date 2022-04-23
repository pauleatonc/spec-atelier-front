import {
  LOADING_SPEC_DOWNLOAD,
  DOWNLOAD_URL_SUCCESS,
  DOWNLOAD_URL_ERROR,
  CLEAN_DOWNLOAD,
  LOADING_BUDGET_DOWNLOAD,
  DOWNLOAD_BUDGET_SUCCESS,
  DOWNLOAD_BUDGET_ERROR,
} from './SpecHeader.actions';

const specHeaderState = {
  error: undefined,
  loading: false,
  url: '',
};

/** The spec document header' reducer */
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
    case LOADING_BUDGET_DOWNLOAD:
      return { ...state, loading: true };
    case DOWNLOAD_BUDGET_SUCCESS:
      return { ...state, loading: false };
    case DOWNLOAD_BUDGET_ERROR:
      return { ...state, loading: false };
    default: {
      return state;
    }
  }
};

export default specDocumentReducer;
