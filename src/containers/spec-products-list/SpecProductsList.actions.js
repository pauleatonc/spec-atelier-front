import onActionCreator from '../../config/store/helpers';
import { getProductsByItem } from '../../services/specification.service';

export const GET_PRODUCTS_BY_ITEM = 'GET_PRODUCTS_BY_ITEM';
export const GET_PRODUCTS_BY_ITEM_ERROR = 'GET_PRODUCTS_BY_ITEM_ERROR';
export const GET_PRODUCTS_BY_ITEM_SUCCESS = 'GET_PRODUCTS_BY_ITEM_SUCCESS';

export const onGetProductsByItem = ({ itemID }) => async (dispatch, getState) => {
  dispatch(onActionCreator(GET_PRODUCTS_BY_ITEM, { itemID }));
  try {
    const state = getState();
    const { selectedItemID } = state.specItemsList;
    const { nextPage } = state.specProductsList;

    // TODO: support filters and search
    const response = await getProductsByItem(itemID || selectedItemID, nextPage);

    return dispatch(
      onActionCreator(
        GET_PRODUCTS_BY_ITEM_SUCCESS,
        { nextPage: response?.products?.next_page, products: response?.products?.list || [], total: response?.products?.total || 0  }
      )
    );
  } catch (error) {
    return dispatch(onActionCreator(GET_PRODUCTS_BY_ITEM_ERROR, { error: true, nativeError: error }));
  }
};

export const HIDE_PRODUCTS_LIST_SUCCESS = 'HIDE_PRODUCTS_LIST_SUCCESS';
export const SHOW_PRODUCTS_LIST_SUCCESS = 'SHOW_PRODUCTS_LIST_SUCCESS';
export const onHideProductsListSuccess = () => ({ type: HIDE_PRODUCTS_LIST_SUCCESS });
export const onShowProductsListSuccess = () => ({ type: SHOW_PRODUCTS_LIST_SUCCESS });
