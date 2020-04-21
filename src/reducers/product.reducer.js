/* eslint-disable import/no-unresolved */
import {
  GET_PRODUCT,
  GET_PRODUCT_ERROR,
  TOGGLE_MODAL,
} from '@Configurations/constants';

export const initialState = {
  product: undefined,
  error: false,
  loader: true,
  showModalProduct: false,
};

const productsReducer = (state = initialState, action) => {
  const { payload, type } = action;
  switch (type) {
    case GET_PRODUCT:
      return {
        ...state,
        product: payload.product,
        loader: payload.loader,
      };
    case GET_PRODUCT_ERROR:
      return {
        ...state,
        error: payload.error,
        loader: payload.loader,
      };
    case TOGGLE_MODAL:
      return {
        ...state,
        showModalProduct: !state.showModalProduct,
      }
    default:
      return state;
  }
};

export default productsReducer;