import {
  CREATE_PRODUCT,
  CREATE_PRODUCT_SUCCESS,
  HIDE_SPEC_CREATE_PRODUCT,
  HIDE_SPEC_CREATE_PRODUCT_STEP_TWO,
  HIDE_SPEC_CREATE_PRODUCT_STEP_THREE,
  GET_PRODUCTS_SYSTEMS_SUCCESS,
  SHOW_SPEC_CREATE_PRODUCT,
  SHOW_SPEC_CREATE_PRODUCT_STEP_TWO,
  SHOW_SPEC_CREATE_PRODUCT_STEP_THREE,
} from './SpecCreateProduct.actions';

const createProductState = {
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
    case CREATE_PRODUCT_SUCCESS:
    case HIDE_SPEC_CREATE_PRODUCT: {
      return createProductState;
    }
    case HIDE_SPEC_CREATE_PRODUCT_STEP_TWO: {
      return {
        ...state,
        stepTwo: { ...state.stepTwo, show: false },
      };
    }
    case HIDE_SPEC_CREATE_PRODUCT_STEP_THREE: {
      return {
        ...state,
        stepThree: { ...state.stepThree, ...payload, show: false },
      };
    }
    case GET_PRODUCTS_SYSTEMS_SUCCESS: {
      return { ...state, systemsCollection: payload.systems };
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
