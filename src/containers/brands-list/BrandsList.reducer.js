import {
  GET_BRANDS,
  GET_BRANDS_ERROR,
  GET_MORE_BRANDS,
} from './BrandsList.actions';

const initialBrandState = {
  brands: [],
  loading: true,
  show: false,
  params: {
    keyword: '',
    page: 0,
    limit: 6,
  },
  error: undefined,
  total: 0,
};

/** The brands reducer */
const brandsReducer = (state = initialBrandState, { payload, type }) => {
  const newBrands = payload?.brands?.list || [];
  switch (type) {
    case GET_BRANDS:
      return {
        ...state,
        brands: payload?.brands || [],
        total: payload?.total || 0,
        loading: false,
        error: undefined,
        params: initialBrandState.params,
      };
    case GET_MORE_BRANDS:
      return {
        ...state,
        brands: [...state.brands, ...newBrands],
        total: payload?.brands?.total || 0,
        loading: false,
        error: undefined,
        params: payload.params,
      };
    case GET_BRANDS_ERROR:
      return {
        ...state,
        error: payload.error,
        loading: false,
      };
    default: {
      return state;
    }
  }
};

export default brandsReducer;
