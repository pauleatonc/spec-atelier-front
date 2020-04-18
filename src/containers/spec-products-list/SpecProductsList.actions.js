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
    
    if (!itemID && !selectedItemID) {
      return dispatch(GET_PRODUCTS_BY_ITEM_ERROR, { error: true });
    }

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

export const HIDE_SPEC_PRODUCTS_LIST_SUCCESS = 'HIDE_SPEC_PRODUCTS_LIST_SUCCESS';
export const SHOW_SPEC_PRODUCTS_LIST_SUCCESS = 'SHOW_SPEC_PRODUCTS_LIST_SUCCESS';
export const onHideSpecProductsListSuccess = () => ({ type: HIDE_SPEC_PRODUCTS_LIST_SUCCESS });
export const onShowSpecProductsListSuccess = () => ({ type: SHOW_SPEC_PRODUCTS_LIST_SUCCESS });
