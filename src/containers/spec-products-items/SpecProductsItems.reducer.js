import {
  GET_SPEC_PRODUCTS_ITEMS,
  GET_SPEC_PRODUCTS_ITEMS_ERROR,
  GET_SPEC_PRODUCTS_ITEMS_SUCCESS,
  HIDE_SPEC_PRODUCTS_ITEMS_SUCCESS,
  SHOW_SPEC_PRODUCTS_ITEMS_SUCCESS,
} from './SpecProductsItems.actions';

const specProductsItemsState = {
  collection: [],
  loading: false,
  show: false,
};

/**
 * The products items' reducer. 
 */
const specProductsItemsReducer = (state = specProductsItemsState, { payload, type }) => {
  switch (type) {
    case GET_SPEC_PRODUCTS_ITEMS: {
      return { ...state, loading: true };
    }
    case GET_SPEC_PRODUCTS_ITEMS_ERROR: {
      return { ...state, loading: false };
    }
    case GET_SPEC_PRODUCTS_ITEMS_SUCCESS: {
      return { ...state, collection: payload.items || [], loading: false };
    }
    case HIDE_SPEC_PRODUCTS_ITEMS_SUCCESS: {
      return specProductsItemsState;
    }
    case SHOW_SPEC_PRODUCTS_ITEMS_SUCCESS: {
      return { ...state, show: true };
    }
    default: {
      return state;
    }
  }
};

export default specProductsItemsReducer;
