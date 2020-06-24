import {
  GET_SPEC_PRODUCTS,
  GET_SPEC_PRODUCTS_ERROR,
  GET_SPEC_PRODUCTS_SUCCESS,
  GET_SPEC_PRODUCTS_BY_PAGE,
  GET_SPEC_PRODUCTS_BY_PAGE_ERROR,
  GET_SPEC_PRODUCTS_BY_PAGE_SUCCESS,
  HIDE_SPEC_PRODUCTS_SUCCESS,
  SHOW_SPEC_PRODUCTS_SUCCESS,
  UPDATE_SPEC_PRODUCTS_FILTERS,
  UPDATE_SPEC_PRODUCTS_FILTERS_ALL,
  UPDATE_SPEC_PRODUCTS_FILTER_ITEM,
  UPDATE_SPEC_PRODUCTS_FILTER_SEARCH,
  UPDATE_SPEC_PRODUCTS_FILTER_SECTION,
  UPDATE_SPEC_PRODUCTS_FILTER_SORT,
} from './SpecProducts.actions';

const specProductsState = {
  collection: [],
  filters: {
    item: '',
    limit: 20,
    search: '',
    section: '',
    sort: '',
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
    case GET_SPEC_PRODUCTS:
    case GET_SPEC_PRODUCTS_BY_PAGE: {
      return { ...state, loading: true };
    }
    case GET_SPEC_PRODUCTS_ERROR:
    case GET_SPEC_PRODUCTS_BY_PAGE_ERROR: {
      return { ...state, loading: false };
    }
    case GET_SPEC_PRODUCTS_SUCCESS:
    case GET_SPEC_PRODUCTS_BY_PAGE_SUCCESS: {
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
    case UPDATE_SPEC_PRODUCTS_FILTERS: {
      return {
        ...state,
        filters: {
          ...state.filters,
          [payload.key]: payload.value.map(val => val.value),
        },
      };
    }
    case UPDATE_SPEC_PRODUCTS_FILTERS_ALL: {
      return {
        ...state,
        filters: {
          item: state.filters.item,
          search: state.filters.search,
          section: state.filters.section,
          sort: state.filters.sort,
        },
      };
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
    case UPDATE_SPEC_PRODUCTS_FILTER_SEARCH: {
      return {
        ...state,
        filters: {
          ...state.filters,
          search: payload.search,
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
    case UPDATE_SPEC_PRODUCTS_FILTER_SORT: {
      return {
        ...state,
        filters: {
          ...state.filters,
          sort: payload.sort,
        },
      };
    }
    default: {
      return state;
    }
  }
};

export default specProductsReducer;
