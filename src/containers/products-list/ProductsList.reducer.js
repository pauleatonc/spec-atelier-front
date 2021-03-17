import {
  GET_PRODUCTS,
  GET_PRODUCTS_ERROR,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_FILTERS_ALL,
  GET_SECTIONS_ERROR,
  GET_SECTIONS_SUCCESS,
  GET_ITEMS_SUCCESS,
  GET_ITEMS_ERROR,
  GET_MORE_PRODUCTS,
  GET_PRODUCTS_BY_FILTER,
  ON_SELECT_ALL,
  CLEAN_PRODUCT_LIST_STORE,
  GET_BRANDS_SUCCESS,
  GET_BRANDS_ERROR
} from './ProductsList.actions';

const productsListState = {
  filters: {
    page: 0,
    limit: 10,
    keyword: '',
    section: [],
    room_type: [],
    project_type: [],
    item: [],
    brand: [],
    sort: '',
    with_products: true,
    most_used: false,
  },
  products: [],
  items: [],
  brands: [],
  sections: [],
  isSelectedAll: true,
  loading: false,
  nextPage: null,
  show: false,
  total: 0,
  error: false,
};

/**
 * The products' reducer.
 */
const productsListReducer = (state = { ...productsListState }, { payload, type }) => {
  switch (type) {
    case GET_PRODUCTS: {
      return {
        ...state,
        loading: true,
        error: false,
      };
    }
    case GET_PRODUCTS_BY_FILTER: {
      return {
        ...state,
        ...payload,
        isSelectedAll: false,
        loading: false,
        error: false,
      };
    }
    case GET_MORE_PRODUCTS: {
      return {
        ...state,
        filters: { ...payload.filters },
        products: [...state.products, ...(payload?.products || [])],
        loading: false,
        error: false,
      }
    }
    case GET_PRODUCTS_ERROR:
    case GET_PRODUCTS_SUCCESS: {
      return {
        ...state,
        ...payload,
        loading: false,
        error: false,
      };
    }
    case GET_PRODUCTS_FILTERS_ALL: {
      return {
        ...state,
        ...payload,
        isSelectedAll: true,
        loading: false,
        error: false,
      };
    }
    case GET_SECTIONS_SUCCESS: {
      return {
        ...state,
        sections: payload.sections,
        loading: false,
        error: false,
      };
    }
    case GET_SECTIONS_ERROR:
      return { ...state };
    case GET_ITEMS_SUCCESS: {
      return {
        ...state,
        items: payload.items,
        loading: false,
        error: false,
      };
    }
    case GET_ITEMS_ERROR:
      break;
    case ON_SELECT_ALL:
      return {
        ...state,
        isSelectedAll: payload.isSelectedAll,
        loading: false,
        error: false,
      };
    case CLEAN_PRODUCT_LIST_STORE:
      return {
        ...productsListState,
      };
    case GET_BRANDS_SUCCESS:
      return {
        ...state,
        brands: payload.brands.list,
        loading: false,
        error: false,
      };
    case GET_BRANDS_ERROR:
      break;
    default: {
      return state;
    }
  }
};

export default productsListReducer;
