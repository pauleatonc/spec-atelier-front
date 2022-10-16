import onActionCreator from '../../config/store/helpers';
import { getProductById } from '../../services/products.service';
import { getProfile } from '../../services/profile.service';
import { sendQuote } from '../../services/specs.service';

export const GET_PRODUCT_QUOTE = 'GET_PRODUCT_QUOTE';
export const GET_PRODUCT_ERROR_QUOTE = 'GET_PRODUCT_ERROR_QUOTE';
export const CLOSE_MODAL_QUOTE = 'CLOSE_MODAL_QUOTE';
export const SHOW_MODAL_QUOTE = 'SHOW_MODAL_QUOTE';
export const DATA_USER = 'DATA_USER';

export const getProduct = ({ id }, user) => async (dispatch) => {
  dispatch(onActionCreator(SHOW_MODAL_QUOTE));
  try {
    const response = await getProductById(id);
    const responseU = await getProfile(user);
    dispatch(onActionCreator(DATA_USER, responseU));
    return dispatch(onActionCreator(GET_PRODUCT_QUOTE, response));
  } catch (error) {
    return dispatch(
      onActionCreator(GET_PRODUCT_ERROR_QUOTE, {
        error: true,
        nativeError: error,
      }),
    );
  }
};

export const SEND_QUOTE = 'SEND_QUOTE';
export const SEND_QUOTE_ERROR = 'SEND_QUOTE_ERROR';
export const sendQuoteA = (params) => async (dispatch) => {
  sendQuote(params).then(
    dispatch(
      onActionCreator(SEND_QUOTE, {
        params,
        error: false,
      }),
    ),
    (error) => {
      // TODO: update
      dispatch(
        onActionCreator(SEND_QUOTE_ERROR, {
          error: true,
        }),
      );
    },
  );
};

export const closeModal = (reset) => (dispatch) => {
  if (reset) reset();
  dispatch(onActionCreator(CLOSE_MODAL_QUOTE, {}));
};
