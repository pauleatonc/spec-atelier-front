import onActionCreator from '../../config/store/helpers';
import { getProductsItems } from '../../services/products.service';

export const GET_PRODUCTS_ITEMS = 'GET_PRODUCTS_ITEMS';
export const GET_PRODUCTS_ITEMS_ERROR = 'GET_PRODUCTS_ITEMS_ERROR';
export const GET_PRODUCTS_ITEMS_SUCCESS = 'GET_PRODUCTS_ITEMS_SUCCESS';
export const onGetProductsItems = ({ sectionID }) => async dispatch => {
  dispatch(onActionCreator(GET_PRODUCTS_ITEMS));

  try {
    const response = await getProductsItems(sectionID);

    return dispatch(onActionCreator(GET_PRODUCTS_ITEMS_SUCCESS, { items: response.items }));
  } catch (error) {
    return dispatch(onActionCreator(GET_PRODUCTS_ITEMS_ERROR, { error }));
  }
};

export const SHOW_SPEC_PRODUCTS_ITEMS_SUCCESS = 'SHOW_SPEC_PRODUCTS_ITEMS_SUCCESS';
export const onShowSpecProductsItemsSuccess = payload => ({ payload, type: SHOW_SPEC_PRODUCTS_ITEMS_SUCCESS });
