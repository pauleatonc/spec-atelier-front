import {
  HIDE_SPEC_PRODUCTS_SUCCESS,
  SHOW_SPEC_PRODUCTS_SUCCESS,
  UPDATE_SPEC_PRODUCTS_FILTER_ITEM,
  UPDATE_SPEC_PRODUCTS_FILTER_SECTION,
  UPDATE_SPEC_PRODUCTS_FILTER_SUBITEM,
  SHOW_ATTACH_MODAL,
  HIDE_ATTACH_MODAL,
} from './SpecProducts.actions';

const specProductsState = {
  collection: [],
  filters: {
    item: '',
    section: '',
    subitem: '',
  },
  loading: false,
  show: false,
  showAttachModal: false,
  productToAttach: {},
};

/** The products' reducer */
const specProductsReducer = (state = specProductsState, { payload, type }) => {
  switch (type) {
    case HIDE_SPEC_PRODUCTS_SUCCESS: {
      return { ...specProductsState, show: false };
    }
    case SHOW_SPEC_PRODUCTS_SUCCESS: {
      return { ...state, show: true };
    }
    case UPDATE_SPEC_PRODUCTS_FILTER_ITEM: {
      return {
        ...state,
        filters: {
          ...state.filters,
          ...payload,
        },
      };
    }
    case UPDATE_SPEC_PRODUCTS_FILTER_SECTION: {
      return {
        ...state,
        filters: {
          ...state.filters,
          ...payload,
        },
      };
    }
    case SHOW_ATTACH_MODAL: {
      return {
        ...state,
        showAttachModal: true,
        productToAttach: payload.product,
      };
    }
    case HIDE_ATTACH_MODAL: {
      return {
        ...state,
        showAttachModal: false,
        productToAttach: {},
      };
    }
    case UPDATE_SPEC_PRODUCTS_FILTER_SUBITEM: {
      return {
        ...state,
        filters: {
          ...state.filters,
          ...payload,
        },
      };
    }
    default: {
      return state;
    }
  }
};

export default specProductsReducer;
