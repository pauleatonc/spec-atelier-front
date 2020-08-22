import {
  EDIT_SPEC_PRODUCT,
  EDIT_SPEC_PRODUCT_ERROR,
  EDIT_SPEC_PRODUCT_SUCCESS,
  GET_SPEC_PRODUCTS_BRANDS_SUCCESS,
  GET_SPEC_PRODUCTS_SYSTEMS_SUCCESS,
  HIDE_SPEC_EDIT_PRODUCT_SUCCESS,
  // SHOW_SPEC_EDIT_PRODUCT_SUCCESS,
  GET_SPEC_PRODUCT,
  GET_SPEC_PRODUCT_SUCCESS,
  GET_SPEC_PRODUCT_ERROR,
} from './SpecEditProduct.actions';

const editProductState = {
  brandsCollection: [],
  show: false,
  systemsCollection: [],
  product: {},
  loading: false,
  editing: false,
  images: [
    { code: 1, name: 'one', src: '' },
    { code: 2, name: 'two', src: '' },
    { code: 3, name: 'three', src: '' },
    { code: 4, name: 'four', src: '' },
    { code: 5, name: 'five', src: '' },
  ],
  pdfs: [
    { code: 1, name: '', url: '' },
    { code: 2, name: '', url: '' },
  ],
};

/**
 * The edit product's reducer. 
 */
const editProductReducer = (state = editProductState, { payload, type }) => {
  switch (type) {
    case GET_SPEC_PRODUCT: {
      console.log('here')
      return { ...state, loading: false, product: {}, show: true };
    }
    case GET_SPEC_PRODUCT_SUCCESS: {
      console.log('payload', payload)
      return { ...state, loading: false, product: payload.product };
    }
    case GET_SPEC_PRODUCT_ERROR: {
      return { ...state, loading: false, error: payload.error };
    }
    case EDIT_SPEC_PRODUCT: {
      return { ...state, editing: true };
    }
    case EDIT_SPEC_PRODUCT_ERROR: {
      return { ...state, editing: false };
    }
    case EDIT_SPEC_PRODUCT_SUCCESS:
    case HIDE_SPEC_EDIT_PRODUCT_SUCCESS: {
      return editProductState;
    }
    case GET_SPEC_PRODUCTS_BRANDS_SUCCESS: {
      return { ...state, brandsCollection: payload.brands };
    }
    case GET_SPEC_PRODUCTS_SYSTEMS_SUCCESS: {
      return { ...state, systemsCollection: payload.systems };
    }
    default: {
      return state;
    }
  }
};

export default editProductReducer;
