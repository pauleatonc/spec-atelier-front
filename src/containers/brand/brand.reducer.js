import {
  GET_BRAND,
  GET_BRAND_ERROR,
  CLEAN_STORE,
} from './brand.actions';

const initialBrand = {
  brand: undefined,
  loading: false,
  view: 'data',
  error: undefined,
  created: false,
  message: undefined,
};

/**
 * brand reducer.
 */
const brandReducer = (state = initialBrand, { payload, type }) => {
  switch (type) {
    case GET_BRAND:
      return {
        ...state,
        brand: payload?.brand,
        loading: false,
        error: undefined,
      };
    case GET_BRAND_ERROR:
      return {
        ...state,
        loading: false,
        error: payload?.error,
      };
    case CLEAN_STORE:
      return { ...initialBrand };
    default: {
      return state;
    }
  }
};

export default brandReducer;
