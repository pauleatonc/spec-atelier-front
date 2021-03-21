import {
  GET_CLIENT_PRODUCTS,
  GET_PRODUCTS_ERROR,
  GET_MORE_PRODUCTS_CLIENT,
  OPEN_PRODUCT_MODAL,
  CLOSE_PRODUCT_MODAL,
  CLEAN_PRODUCTS_LIST,
} from './ClientProductsList.actions';

const initialProductState = {
  products: [],
  loading: true,
  show: false,
  params: {
    keyword: '',
    page: 0,
    limit: 6,
    client: '',
  },
  next_page: 1,
  selectedProduct: undefined,
  showProductModal: false,
};

/**
 * The products reducer.
 */
const clientProductsReducer = (state = initialProductState, { payload, type }) => {
  switch (type) {
    case GET_CLIENT_PRODUCTS:
      return {
        ...state,
        products: payload?.products?.list || [],
        total: payload?.products?.total || 0,
        loading: false,
        error: undefined,
        params: initialProductState.params,
      };
    case GET_MORE_PRODUCTS_CLIENT:
      const newProducts = payload?.products?.list || [];
      return {
        ...state,
        products: [...state.products, ...newProducts],
        total: payload?.products?.total || 0,
        next_page: payload?.products?.next_page,
        loading: false,
        error: undefined,
        params: payload.params,
      };
    case GET_PRODUCTS_ERROR:
      return {
        ...state,
        error: payload.error,
        loading: false,
      };
    case OPEN_PRODUCT_MODAL:
      return {
        ...state,
        selectedProduct: payload?.selectedProduct,
        showProductModal: true,
      };
    case CLOSE_PRODUCT_MODAL:
      return {
        ...state,
        selectedProduct: undefined,
        showProductModal: false,
      };
    case CLEAN_PRODUCTS_LIST:
      return {
        ...initialProductState,
      }
    default: {
      return state;
    }
  }
};

export default clientProductsReducer;
