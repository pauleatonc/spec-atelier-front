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
  UPDATE_SPEC_PRODUCTS_FILTER_KEYWORD,
  UPDATE_SPEC_PRODUCTS_FILTER_SECTION,
  UPDATE_SPEC_PRODUCTS_FILTER_SORT,
  UPDATE_SPEC_PROJECT_TYPE_FILTERS,
  GET_SPEC_MYSPEC,
  GET_SPEC_MYSPEC_ERROR,
  GET_SPEC_ROOMTYPES,
  GET_SPEC_ROOMTYPES_ERROR,
} from './SpecProducts.actions';

const specProductsState = {
  collection: [],
  filters: {
    item: '',
    limit: 20,
    keyword: '',
    section: '',
    sort: '',
    specification: [],
  },
  loading: false,
  nextPage: null,
  show: false,
  total: 0,
  specification: [],
};

/**
 * The products' reducer.
 */
const specProductsReducer = (state = specProductsState, { payload, type }) => {
  switch (type) {
    case GET_SPEC_PRODUCTS: {
      return { ...state, collection: [], loading: true, nextPage: null, total: 0 };
    }
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
    case UPDATE_SPEC_PROJECT_TYPE_FILTERS: {
      return {
        ...state,
        filters: {
          ...state.filters,
          project_types: payload.project_types || state.filters.project_types || [],
          room_types: payload.room_types || state.filters.room_types || [],
        }
      };
    }
    // eslint-disable-next-line no-lone-blocks
    case HIDE_SPEC_PRODUCTS_SUCCESS: {
      return { ...specProductsState, show: false };
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
          ...specProductsState.filters,
          item: state.filters.item,
          keyword: state.filters.keyword,
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
    case UPDATE_SPEC_PRODUCTS_FILTER_KEYWORD: {
      return {
        ...state,
        filters: {
          ...state.filters,
          keyword: payload.keyword,
        },
      };
    }
    case UPDATE_SPEC_PRODUCTS_FILTER_SECTION: {
      return {
        ...state,
        filters: {
          ...state.filters,
          section: payload.sectionID,
          item: payload.itemID,
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
    case GET_SPEC_MYSPEC: {
      return {
        ...state,
        specifications: payload.specifications || [],
      };
    }
    case GET_SPEC_MYSPEC_ERROR: {
      return {
        ...state,
        specifications: [],
      };
    }
    case GET_SPEC_ROOMTYPES: {
      return {
        ...state,
        room_types: payload.room_types || [],
      };
    }
    case GET_SPEC_ROOMTYPES_ERROR: {
      return {
        ...state,
        room_types: [],
      };
    }
    default: {
      return state;
    }
  }
};

export default specProductsReducer;
