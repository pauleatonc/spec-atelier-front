import { HIDE_SPEC_PRODUCTS_SECTIONS_SUCCESS, SHOW_SPEC_PRODUCTS_SECTIONS_SUCCESS } from '../spec-products-sections/SpecProductsSections.actions';
import { SHOW_SPEC_PRODUCTS_SUCCESS } from '../spec-products/SpecProducts.actions';
import {
  GET_PRODUCTS_ITEMS,
  GET_PRODUCTS_ITEMS_SUCCESS,
  SHOW_SPEC_PRODUCTS_ITEMS_SUCCESS,
} from './SpecProductsItems.actions';

const specProductsItemsState = {
  collection: [],
  loading: false,
  selectedItemID: null,
  show: false,
};

/**
 * The products items' reducer. 
 */
const specProductsItemsReducer = (state = specProductsItemsState, { payload, type }) => {
  switch (type) {
    case GET_PRODUCTS_ITEMS: {
      return { ...state, loading: true };
    }
    case GET_PRODUCTS_ITEMS_SUCCESS: {
      return { ...state, collection: payload.items || [], loading: false };
    }
    case HIDE_SPEC_PRODUCTS_SECTIONS_SUCCESS:
    case SHOW_SPEC_PRODUCTS_SECTIONS_SUCCESS: {
      return specProductsItemsState;
    }
    case SHOW_SPEC_PRODUCTS_ITEMS_SUCCESS: {
      return { ...state, show: true };
    }
    case SHOW_SPEC_PRODUCTS_SUCCESS: {
      return { ...state, selectedItemID: payload.itemID };
    }
    default: {
      return state;
    }
  }
};

export default specProductsItemsReducer;
