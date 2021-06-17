import {
  CREATE_SPEC_PRODUCT,
  CREATE_SPEC_PRODUCT_ERROR,
  CREATE_SPEC_PRODUCT_SUCCESS,
  GET_SPEC_PRODUCTS_BRANDS_SUCCESS,
  GET_SPEC_PRODUCTS_SYSTEMS_SUCCESS,
  HIDE_SPEC_CREATE_PRODUCT_SUCCESS,
  HIDE_SPEC_CREATE_PRODUCT_STEP_TWO_SUCCESS,
  HIDE_SPEC_CREATE_PRODUCT_STEP_THREE_SUCCESS,
  SHOW_SPEC_CREATE_PRODUCT_SUCCESS,
  SHOW_SPEC_CREATE_PRODUCT_STEP_TWO_SUCCESS,
  SHOW_SPEC_CREATE_PRODUCT_STEP_THREE_SUCCESS,
  SHOW_SPEC_CREATE_PRODUCT_FROM_ITEM_SUCCESS,
} from './SpecCreateProduct.actions';

const createProductState = {
  brandsCollection: [],
  stepOne: { show: false },
  stepTwo: { show: false, },
  stepThree: { show: false },
  systemsCollection: [],
};

/**
 * The create product's reducer.
 */
const createProductReducer = (state = createProductState, { payload, type }) => {
  switch (type) {
    case CREATE_SPEC_PRODUCT: {
      return { ...state, loading: true };
    }
    case CREATE_SPEC_PRODUCT_ERROR: {
      return { ...state, loading: false };
    }
    case CREATE_SPEC_PRODUCT_SUCCESS:
    case HIDE_SPEC_CREATE_PRODUCT_SUCCESS: {
      return createProductState;
    }
    case GET_SPEC_PRODUCTS_BRANDS_SUCCESS: {
      return { ...state, brandsCollection: payload.brands };
    }
    case GET_SPEC_PRODUCTS_SYSTEMS_SUCCESS: {
      return { ...state, systemsCollection: payload.systems };
    }
    case HIDE_SPEC_CREATE_PRODUCT_STEP_TWO_SUCCESS: {
      return {
        ...state,
        stepTwo: { ...state.stepTwo, ...payload, show: false },
      };
    }
    case HIDE_SPEC_CREATE_PRODUCT_STEP_THREE_SUCCESS: {
      return {
        ...state,
        stepThree: { ...state.stepThree, ...payload, show: false },
      };
    }
    case SHOW_SPEC_CREATE_PRODUCT_SUCCESS: {
      return {
        ...state,
        stepOne: { ...state.stepOne, show: true },
      };
    }

    case SHOW_SPEC_CREATE_PRODUCT_FROM_ITEM_SUCCESS: {
      return {
        ...state,
        stepOne: {
          ...state.stepOne,
          ...payload,
          show: true,
        },
      };
    }

    case SHOW_SPEC_CREATE_PRODUCT_STEP_TWO_SUCCESS: {
      return {
        ...state,
        stepOne: { ...state.stepOne, ...payload },
        stepTwo: { ...state.stepTwo, show: true },
      };
    }
    case SHOW_SPEC_CREATE_PRODUCT_STEP_THREE_SUCCESS: {
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
