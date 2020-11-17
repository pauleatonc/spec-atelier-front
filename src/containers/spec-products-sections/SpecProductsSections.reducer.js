import {
  GET_SPEC_PRODUCTS_SECTIONS,
  GET_SPEC_PRODUCTS_SECTIONS_ERROR,
  GET_SPEC_PRODUCTS_SECTIONS_SUCCESS,
  HIDE_SPEC_PRODUCTS_SECTIONS_SUCCESS,
  SHOW_SPEC_PRODUCTS_SECTIONS_SUCCESS,
} from './SpecProductsSections.actions';

const specProductsSectionsState = {
  collection: [],
  loading: false,
  show: false,
};

/**
 * The products sections' reducer. 
 */
const specProductsSectionsReducer = (state = specProductsSectionsState, { payload, type }) => {
  switch (type) {
    case GET_SPEC_PRODUCTS_SECTIONS: {
      return { ...state, loading: true };
    }
    case GET_SPEC_PRODUCTS_SECTIONS_ERROR:
    case GET_SPEC_PRODUCTS_SECTIONS_SUCCESS: {
      return { ...state, collection: payload.sections || [], loading: false };
    }
    case HIDE_SPEC_PRODUCTS_SECTIONS_SUCCESS: {
      return specProductsSectionsState;
    }
    case SHOW_SPEC_PRODUCTS_SECTIONS_SUCCESS: {
      return { ...state, show: true };
    }
    default: {
      return state;
    }
  }
};

export default specProductsSectionsReducer;
