import onActionCreator from '../../config/store/helpers';
import { getProducts as getProductsService  } from '../../services/products.service';

export const GET_PRODUCTS = 'GET_ALL_PRODUCTS';
export const GET_MORE_PRODUCTS = 'GET_MORE_PRODUCTS';
export const GET_PRODUCTS_ERROR = 'GET_PRODUCTS_ERROR';
export const OPEN_PRODUCT_MODAL = 'OPEN_PRODUCT_MODAL';
export const CLOSE_PRODUCT_MODAL = 'CLOSE_PRODUCT_MODAL';
export const CLEAN_PRODUCTS_LIST = 'CLEAN_PRODUCTS_LIST';

// async calls
export const getProducts = params => async dispatch => {
  try {
    const  { products, status } = await getProductsService(params);
    console.log('prod', products, status);
    dispatch(onActionCreator(GET_PRODUCTS, { products, loading: false, params }));
  } catch (error) {
    dispatch(onActionCreator(GET_PRODUCTS_ERROR, { loading: false, error: true, params }));
  }
};

export const getMoreProducts = params => async dispatch => {
  try {
    const { products } = await getProductsService(params);
    dispatch(onActionCreator(GET_MORE_PRODUCTS, { products, loading: false, params }));
  } catch (error) {
    dispatch(onActionCreator(GET_PRODUCTS_ERROR, { loading: false, error: true, params }));
  }
};

// sync calls
export const openContactFormModal = selectedProduct => dispatch => dispatch(onActionCreator(OPEN_PRODUCT_MODAL, { selectedProduct }));

export const closeContactFormModal = () => dispatch => dispatch(onActionCreator(CLOSE_PRODUCT_MODAL, { }));

export const cleanProductList = () => dispatch => dispatch(onActionCreator(CLEAN_PRODUCTS_LIST, {}))