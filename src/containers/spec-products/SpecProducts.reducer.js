import { HIDE_SPEC_PRODUCTS_SECTIONS_SUCCESS, SHOW_SPEC_PRODUCTS_SECTIONS_SUCCESS } from '../spec-products-sections/SpecProductsSections.actions';
import { SHOW_SPEC_PRODUCTS_ITEMS_SUCCESS } from '../spec-products-items/SpecProductsItems.actions';
import {
  GET_PRODUCTS_BY_ITEM,
  GET_PRODUCTS_BY_ITEM_SUCCESS,
  SHOW_SPEC_PRODUCTS_SUCCESS,
} from './SpecProducts.actions';

const specProductsState = {
  collection: [],
  filters: [],
  loading: false,
  nextPage: null,
  search: '',
  show: false,
  total: 0,
};

/**
 * The products' reducer.
 */
const specProductsReducer = (state = specProductsState, { payload, type }) => {
  switch (type) {
    case GET_PRODUCTS_BY_ITEM: {
      return { ...state, loading: true };
    }
    case GET_PRODUCTS_BY_ITEM_SUCCESS: {
      return {
        ...state,
        collection: payload.products,
        filters: payload.filters,
        loading: false,
        nextPage: payload.nextPage,
        search: payload.search,
        total: payload.total,
      };
    }
    case HIDE_SPEC_PRODUCTS_SECTIONS_SUCCESS:
    case SHOW_SPEC_PRODUCTS_ITEMS_SUCCESS:
    case SHOW_SPEC_PRODUCTS_SECTIONS_SUCCESS: {
      return { ...state, show: false };
    }
    case SHOW_SPEC_PRODUCTS_SUCCESS: {
      return { ...specProductsState, show: true };
    }
    default: {
      return state;
    }
  }
};

export default specProductsReducer;
