import { HIDE_SPEC_SECTIONS_LIST_SUCCESS, SHOW_SPEC_SECTIONS_LIST_SUCCESS } from '../spec-sections-list/SpecSectionsList.actions';
import { SHOW_SPEC_ITEMS_LIST_SUCCESS } from '../spec-items-list/SpecItemsList.actions';
import { GET_PRODUCTS_BY_ITEM_SUCCESS } from '../spec-products-list/SpecProductsList.actions';
import { HIDE_SELECTED_PRODUCTS_SUCCESS, SHOW_SELECTED_PRODUCTS_SUCCESS } from './SpecSelectedProducts.actions';

const specSelectedProductsState = {
  collection: [],
  show: false,
};

/**
 * The selected products reducer. 
 */
const specSelectedProductsReducer = (state = specSelectedProductsState, { type }) => {
  switch (type) {
    case HIDE_SELECTED_PRODUCTS_SUCCESS:
    case HIDE_SPEC_SECTIONS_LIST_SUCCESS:
    case SHOW_SPEC_ITEMS_LIST_SUCCESS:
    case SHOW_SPEC_SECTIONS_LIST_SUCCESS: {
      return { ...state, show: false };
    }
    case GET_PRODUCTS_BY_ITEM_SUCCESS:
    case SHOW_SELECTED_PRODUCTS_SUCCESS: {
      return { ...state, show: true };
    }
    default: {
      return state;
    }
  }
};

export default specSelectedProductsReducer;
