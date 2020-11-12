import {
  GET_SLIDER_BRANDS,
  GET_SLIDER_BRANDS_ERROR,
  GET_SLIDER_BRANDS_LOADING,
} from './BrandSlider.actions';


const initialBrandState = {
  brands: [],
  loading: true,
  show: false,
};

/**
 * The brands reducer.
 */
const brandsSliderReducer = (state = initialBrandState, { payload, type }) => {
  switch (type) {
    case GET_SLIDER_BRANDS:
      return {
        ...state,
        brands: payload?.brands?.list || [],
        loading: false,
        error: undefined,
      };
      case GET_SLIDER_BRANDS_LOADING:
        return {
          ...state,
          loading: true,
        };
    case GET_SLIDER_BRANDS_ERROR:
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

export default brandsSliderReducer;
