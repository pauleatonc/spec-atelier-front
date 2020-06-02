import {
  GET_BRANDS,
  GET_BRANDS_ERROR,
  GET_MORE_BRANDS,
  OPEN_BRAND_MODAL,
  CLOSE_BRAND_MODAL,
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
  selectedBrand: undefined,
  showBrandModal: false,
};

/**
 * The brands reducer.
 */
const brandsReducer = (state = initialBrandState, { payload, type }) => {
  switch (type) {
    case GET_BRANDS:
      return {
        ...state,
        brands: payload?.brands?.list || [],
        total: payload?.brands?.total || 0,
        loading: false,
        error: undefined,
        params: initialBrandState.params,
      };
    case GET_MORE_BRANDS:
      console.log('brands',payload);
      const newBrands = payload?.brands?.list || [];
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
    case OPEN_BRAND_MODAL:
      return {
        ...state,
        selectedBrand: payload?.selectedBrand,
        showBrandModal: true,
      };
    case CLOSE_BRAND_MODAL:
      return {
        ...state,
        selectedBrand: undefined,
        showBrandModal: false,
      };
    default: {
      return state;
    }
  }
};

export default brandsReducer;
