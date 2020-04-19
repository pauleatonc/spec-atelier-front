import onActionCreator from '../../config/store/helpers';
import { getProductsByItem } from '../../services/products.service';

export const GET_PRODUCTS_BY_ITEM = 'GET_PRODUCTS_BY_ITEM';
export const GET_PRODUCTS_BY_ITEM_ERROR = 'GET_PRODUCTS_BY_ITEM_ERROR';
export const GET_PRODUCTS_BY_ITEM_SUCCESS = 'GET_PRODUCTS_BY_ITEM_SUCCESS';

export const onGetProductsByItem = ({ itemID }) => async (dispatch, getState) => {
  dispatch(onActionCreator(GET_PRODUCTS_BY_ITEM));

  try {
    const state = getState();
    const { nextPage } = state.specProducts;

    // TODO: support filters and search
    const response = await getProductsByItem(itemID, nextPage);

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

export const SHOW_SPEC_PRODUCTS_SUCCESS = 'SHOW_SPEC_PRODUCTS_SUCCESS';
export const onShowSpecProductsSuccess = payload => ({ payload, type: SHOW_SPEC_PRODUCTS_SUCCESS });
