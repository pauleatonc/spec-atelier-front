
import { batch } from 'react-redux';
import onActionCreator from '../../config/store/helpers';
import { getProductById } from '../../services/products.service';
import { showModal } from '../../components/modal/modal.actions';

export const GET_PRODUCT = 'GET_PRODUCT';
export const GET_PRODUCT_ERROR = 'GET_PRODUCT_ERROR';
export const CLOSE_MODAL = 'CLOSE_MODAL';

export const getProduct = ({ id }) => async dispatch => {
  try {
    const response = await getProductById(id);
    return batch(() => {
      dispatch(onActionCreator(GET_PRODUCT, response));
      dispatch(showModal());
    });
  } catch (error) {
    return dispatch(onActionCreator(GET_PRODUCT_ERROR, {
      error: true,
      nativeError: error,
    }));
  }
};

export const closeModal = () => dispatch => dispatch(onActionCreator(CLOSE_MODAL, {}));