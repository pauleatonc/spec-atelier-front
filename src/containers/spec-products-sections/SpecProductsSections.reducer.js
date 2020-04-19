import { SHOW_SPEC_PRODUCTS_ITEMS_SUCCESS } from '../spec-products-items/SpecProductsItems.actions';
import {
  GET_PRODUCTS_SECTIONS,
  GET_PRODUCTS_SECTIONS_SUCCESS,
  HIDE_SPEC_PRODUCTS_SECTIONS_SUCCESS,
  SHOW_SPEC_PRODUCTS_SECTIONS_SUCCESS,
} from './SpecProductsSections.actions';

const specProductsSectionsState = {
  collection: [],
  loading: false,
  selectedSectionID: null,
  show: false,
};

/**
 * The products sections' reducer. 
 */
const specProductsSectionsReducer = (state = specProductsSectionsState, { payload, type }) => {
  switch (type) {
    case GET_PRODUCTS_SECTIONS: {
      return { ...state, loading: true };
    }
    case GET_PRODUCTS_SECTIONS_SUCCESS: {
      return { ...state, collection: payload.sections, loading: false };
    }
    case HIDE_SPEC_PRODUCTS_SECTIONS_SUCCESS: {
      return { ...state, show: false };
    }
    case SHOW_SPEC_PRODUCTS_ITEMS_SUCCESS: {
      return { ...state, selectedSectionID: payload.sectionID };
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
