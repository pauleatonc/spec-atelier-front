import {
    GET_BRANDS_HOME,
    GET_BRANDS_ERROR_HOME,
  } from './BrandsImageSlider.actions';
  
  const initialState = {
    brands: [],
    loading: true,
    error: undefined,
    total: 0,
  };
  
  /**
   * The home brands reducer.
   */
  const brandsImageSliderReducer = (state = initialState, { payload, type }) => {
    switch (type) {
      case GET_BRANDS_HOME:
        return {
          ...state,
          brands: payload?.brands || [],
          loading: false,
          error: undefined,
        };
      case GET_BRANDS_ERROR_HOME:
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
  
  export default brandsImageSliderReducer;
  