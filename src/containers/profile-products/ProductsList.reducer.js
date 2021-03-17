import {
  GET_PROFILE_PRODUCTS,
  GET_PROFILE_PRODUCTS_ERROR,
  GET_PROFILE_PRODUCTS_SUCCESS,
  GET_PROFILE_PRODUCTS_FILTERS_ALL,
  GET_PROFILE_SECTIONS_ERROR,
  GET_PROFILE_SECTIONS_SUCCESS,
  GET_PROFILE_ITEMS_SUCCESS,
  GET_PROFILE_ITEMS_ERROR,
  GET_PROFILE_MORE_PRODUCTS,
  GET_PROFILE_PRODUCTS_BY_FILTER,
  ON_SELECT_ALL,
  CLEAN_PRODUCT_LIST_STORE,
} from './ProductsList.actions';

const ProfileProductsListState = {
  filters: {
    page: 0,
    limit: 10,
    keyword: '',
    section: [],
    room_type: [],
    project_type: [],
    item: [],
    client: [],
    sort: '',
    most_used: false,
    my_products: true,
  },
  products: [],
  items: [],
  clients: [],
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
const ProfileProductsListReducer = (state = { ...ProfileProductsListState }, { payload, type }) => {
  switch (type) {
    case GET_PROFILE_PRODUCTS: {
      return {
        ...state,
        loading: true,
        error: false,
      };
    }
    case GET_PROFILE_PRODUCTS_BY_FILTER: {
      return {
        ...state,
        ...payload,
        isSelectedAll: false,
        loading: false,
        error: false,
      };
    }
    case GET_PROFILE_MORE_PRODUCTS: {
      return {
        ...state,
        filters: { ...payload.filters },
        products: [...state.products, ...(payload?.products || [])],
        loading: false,
        error: false,
      }
    }
    case GET_PROFILE_PRODUCTS_ERROR:
    case GET_PROFILE_PRODUCTS_SUCCESS: {
      return {
        ...state,
        ...payload,
        loading: false,
        error: false,
      };
    }
    case GET_PROFILE_PRODUCTS_FILTERS_ALL: {
      return {
        ...state,
        ...payload,
        isSelectedAll: true,
        loading: false,
        error: false,
      };
    }
    case GET_PROFILE_SECTIONS_SUCCESS: {
      return {
        ...state,
        sections: payload.sections,
        loading: false,
        error: false,
      };
    }
    case GET_PROFILE_SECTIONS_ERROR:
      return { ...state };
    case GET_PROFILE_ITEMS_SUCCESS: {
      return {
        ...state,
        items: payload.items,
        loading: false,
        error: false,
      };
    }
    case GET_PROFILE_ITEMS_ERROR:
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
        ...ProfileProductsListState,
      };
    default: {
      return state;
    }
  }
};

export default ProfileProductsListReducer;
