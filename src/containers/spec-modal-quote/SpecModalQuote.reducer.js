import {
  GET_PRODUCT_QUOTE,
  GET_PRODUCT_ERROR_QUOTE,
  SHOW_MODAL_QUOTE,
  CLOSE_MODAL_QUOTE,
  DATA_USER,
  SEND_QUOTE,
} from './SpecModalQuote.actions';

export const initialState = {
  product: undefined,
  user: undefined,
  error: false,
  loader: true,
  showModalQuote: false,
};

const productsReducer = (state = initialState, action) => {
  const { payload, type } = action;
  switch (type) {
    case GET_PRODUCT_QUOTE:
      return {
        ...state,
        product: payload.product,
        loader: payload.loader,
        showModalQuote: true,
      };
    case GET_PRODUCT_ERROR_QUOTE:
      return {
        ...state,
        error: payload.error,
        loader: payload.loader,
      };
    case SHOW_MODAL_QUOTE: {
      return {
        ...state,
        showModalQuote: true,
      };
    }
    case CLOSE_MODAL_QUOTE:
      return {
        ...initialState,
      };
    case DATA_USER:
      return {
        ...state,
        user: payload,
      };
    case SEND_QUOTE:
      return {
        ...state,
        error: false,
      };
    default:
      return state;
  }
};

export default productsReducer;
