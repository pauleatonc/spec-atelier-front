import { HIDE_SPEC_PRODUCTS_SECTIONS_SUCCESS, SHOW_SPEC_PRODUCTS_SECTIONS_SUCCESS } from '../spec-products-sections/SpecProductsSections.actions';
import { SHOW_SPEC_PRODUCTS_ITEMS_SUCCESS } from '../spec-products-items/SpecProductsItems.actions';
import { SHOW_SPEC_PRODUCTS_SUCCESS } from '../spec-products/SpecProducts.actions';

const specDocumentPreviewState = {
  collection: [],
  show: false,
};

/**
 * The document preview reducer. 
 */
const specDocumentPreviewReducer = (state = specDocumentPreviewState, { type }) => {
  switch (type) {
    case HIDE_SPEC_PRODUCTS_SECTIONS_SUCCESS:
    case SHOW_SPEC_PRODUCTS_ITEMS_SUCCESS:
    case SHOW_SPEC_PRODUCTS_SECTIONS_SUCCESS: {
      return { ...state, show: false };
    }
    case SHOW_SPEC_PRODUCTS_SUCCESS: {
      return { ...state, show: true };
    }
    default: {
      return state;
    }
  }
};

export default specDocumentPreviewReducer;
