
import onActionCreator from '../../config/store/helpers';
import { getProductById } from '../../services/products.service';
import { getProfile } from '../../services/profile.service';

export const GET_PRODUCT_QUOTE = 'GET_PRODUCT_QUOTE';
export const GET_PRODUCT_ERROR_QUOTE = 'GET_PRODUCT_ERROR_QUOTE';
export const CLOSE_MODAL_QUOTE = 'CLOSE_MODAL_QUOTE';
export const SHOW_MODAL_QUOTE = 'SHOW_MODAL_QUOTE';
export const DATA_USER = 'DATA_USER';

export const getProduct = ({ id },user) => async dispatch => {
  const idUser = user.id;
  dispatch(onActionCreator(SHOW_MODAL_QUOTE));
  try {
    const response = await getProductById(id);
    const responseU = await getProfile(user);
    dispatch(onActionCreator(DATA_USER, responseU));
    return dispatch(onActionCreator(GET_PRODUCT_QUOTE, response));
  } catch (error) {
    return dispatch(onActionCreator(GET_PRODUCT_ERROR_QUOTE, {
      error: true,
      nativeError: error,
    }));
  }
};

export const closeModal = () => dispatch => dispatch(onActionCreator(CLOSE_MODAL_QUOTE, {}));