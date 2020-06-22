import {
  GET_SPEC_PRODUCTS,
  GET_SPEC_PRODUCTS_ERROR,
  GET_SPEC_PRODUCTS_SUCCESS,
  HIDE_SPEC_PRODUCTS_SUCCESS,
  SHOW_SPEC_PRODUCTS_SUCCESS,
  UPDATE_SPEC_PRODUCTS_FILTER_ITEM,
  UPDATE_SPEC_PRODUCTS_FILTER_SECTION,
} from './SpecProducts.actions';

const specProductsState = {
  collection: [],
  filters: {
    item: '',
    search: '',
    section: '',
  },
  loading: false,
  nextPage: null,
  show: false,
  total: 0,
};

/**
 * The products' reducer.
 */
const specProductsReducer = (state = specProductsState, { payload, type }) => {
  switch (type) {
    case GET_SPEC_PRODUCTS: {
      return { ...state, loading: true };
    }
    case GET_SPEC_PRODUCTS_ERROR: {
      return { ...state, loading: false };
    }
    case GET_SPEC_PRODUCTS_SUCCESS: {
      return {
        ...state,
        collection: payload.products || [],
        loading: false,
        nextPage: payload.nextPage || null,
        total: payload.total || 0,
      };
    }
    case HIDE_SPEC_PRODUCTS_SUCCESS: {
      return specProductsState;
    }; 
    case SHOW_SPEC_PRODUCTS_SUCCESS: {
      return { ...state, show: true };
    }
    case UPDATE_SPEC_PRODUCTS_FILTER_ITEM: {
      return {
        ...state,
        filters: {
          ...state.filters,
          item: payload.itemID,
        },
      };
    }
    case UPDATE_SPEC_PRODUCTS_FILTER_SECTION: {
      return {
        ...state,
        filters: {
          ...state.filters,
          section: payload.sectionID,
        },
      };
    }
    default: {
      return state;
    }
  }
};

export default specProductsReducer;
