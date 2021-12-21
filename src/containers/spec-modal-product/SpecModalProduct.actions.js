
import onActionCreator from '../../config/store/helpers';
import { getProductById } from '../../services/products.service';

export const GET_PRODUCT = 'GET_PRODUCT';
export const GET_PRODUCT_ERROR = 'GET_PRODUCT_ERROR';
export const CLOSE_MODAL_PRODUCT = 'CLOSE_MODAL_PRODUCT';
export const SHOW_MODAL_PRODUCT = 'SHOW_MODAL_PRODUCT';

export const getProduct = ({ id }) => async dispatch => {
  dispatch(onActionCreator(SHOW_MODAL_PRODUCT));
  try {
    const response = await getProductById(id);
    return dispatch(onActionCreator(GET_PRODUCT, response));
  } catch (error) {
    return dispatch(onActionCreator(GET_PRODUCT_ERROR, {
      error: true,
      nativeError: error,
    }));
  }
};

export const closeModal = () => dispatch => dispatch(onActionCreator(CLOSE_MODAL_PRODUCT, {}));