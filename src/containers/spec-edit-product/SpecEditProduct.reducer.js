import {
  EDIT_SPEC_PRODUCT,
  EDIT_SPEC_PRODUCT_ERROR,
  EDIT_SPEC_PRODUCT_SUCCESS,
  GET_SPEC_PRODUCTS_BRANDS_SUCCESS,
  GET_SPEC_PRODUCTS_SYSTEMS_SUCCESS,
  HIDE_SPEC_EDIT_PRODUCT_SUCCESS,
  GET_SPEC_PRODUCT,
  GET_SPEC_PRODUCT_SUCCESS,
  GET_SPEC_PRODUCT_ERROR,
  SPEC_EDIT_PRODUCT_CLEAN_STORE,
} from './SpecEditProduct.actions';

const editProductState = {
  brandsCollection: [],
  show: false,
  systemsCollection: [],
  product: {
    name: '',
    short_desc: '',
    long_desc: '',
    section: {},
    item: {},
    system: {},
    price: '',
    brand: {},
    images: [],
    pdfs: [],
    project_type: [],
    room_type: [],
    work_type: [],
  },
  loading: false,
  editing: false,
  images: [],
  documents: [],
};

/**
 * The edit product's reducer. 
 */
const editProductReducer = (state = editProductState, { payload, type }) => {
  switch (type) {
    case GET_SPEC_PRODUCT: {
      return { ...state, loading: false, product: {}, show: true };
    }
    case GET_SPEC_PRODUCT_SUCCESS: {
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
    case SPEC_EDIT_PRODUCT_CLEAN_STORE: {
      return { ...editProductState };
    }
    default: {
      return state;
    }
  }
};

export default editProductReducer;
