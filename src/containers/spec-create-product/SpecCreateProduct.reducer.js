import {
  CREATE_PRODUCT,
  CREATE_PRODUCT_ERROR,
  CREATE_PRODUCT_SUCCESS,
  GET_PRODUCTS_BRANDS_SUCCESS,
  GET_PRODUCTS_SYSTEMS_SUCCESS,
  HIDE_SPEC_CREATE_PRODUCT,
  HIDE_SPEC_CREATE_PRODUCT_STEP_TWO,
  HIDE_SPEC_CREATE_PRODUCT_STEP_THREE,
  SHOW_SPEC_CREATE_PRODUCT,
  SHOW_SPEC_CREATE_PRODUCT_STEP_TWO,
  SHOW_SPEC_CREATE_PRODUCT_STEP_THREE,
} from './SpecCreateProduct.actions';

const createProductState = {
  brandsCollection: [],
  stepOne: { show: false },
  stepTwo: { show: false },
  stepThree: { show: false },
  systemsCollection: [],
};

/**
 * The create product's reducer. 
 */
const createProductReducer = (state = createProductState, { payload, type }) => {
  switch (type) {
    case CREATE_PRODUCT: {
      return { ...state, loading: true };
    }
    case CREATE_PRODUCT_ERROR: {
      return { ...state, loading: false };
    }
    case CREATE_PRODUCT_SUCCESS:
    case HIDE_SPEC_CREATE_PRODUCT: {
      return createProductState;
    }
    case GET_PRODUCTS_BRANDS_SUCCESS: {
      return { ...state, brandsCollection: payload.brands };
    }
    case GET_PRODUCTS_SYSTEMS_SUCCESS: {
      return { ...state, systemsCollection: payload.systems };
    }
    case HIDE_SPEC_CREATE_PRODUCT_STEP_TWO: {
      return {
        ...state,
        stepTwo: { ...state.stepTwo, ...payload, show: false },
      };
    }
    case HIDE_SPEC_CREATE_PRODUCT_STEP_THREE: {
      return {
        ...state,
        stepThree: { ...state.stepThree, ...payload, show: false },
      };
    }
    case SHOW_SPEC_CREATE_PRODUCT: {
      return {
        ...state,
        stepOne: { ...state.stepOne, show: true },
      };
    }
    case SHOW_SPEC_CREATE_PRODUCT_STEP_TWO: {
      return {
        ...state,
        stepOne: { ...state.stepOne, ...payload },
        stepTwo: { ...state.stepTwo, show: true },
      };
    }
    case SHOW_SPEC_CREATE_PRODUCT_STEP_THREE: {
      return {
        ...state,
        stepTwo: { ...state.stepTwo, ...payload },
        stepThree: { ...state.stepThree, show: true },
      };
    }
    default: {
      return state;
    }
  }
};

export default createProductReducer;
