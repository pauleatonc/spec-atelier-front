/* eslint-disable import/no-unresolved */
import {
  GET_PRODUCT,
  GET_PRODUCT_ERROR,
} from '@Configurations/constants';

export const initialState = {
  product: null,
  error: false,
  loader: true,
};

const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PRODUCT:
      return {
        ...state,
        product: action.payload.product,
        loader: action.payload.loader,
      };
    case GET_PRODUCT_ERROR:
      return {
        ...state,
        error: action.payload.error,
        loader: action.payload.loader,
      };
    default:
      return state;
  }
};

export default productsReducer;