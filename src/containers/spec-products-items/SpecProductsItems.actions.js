import { batch } from 'react-redux';
import onActionCreator from '../../config/store/helpers';
import { getProductsItems } from '../../services/products.service';

export const GET_SPEC_PRODUCTS_ITEMS = 'GET_SPEC_PRODUCTS_ITEMS';
export const GET_SPEC_PRODUCTS_ITEMS_ERROR = 'GET_SPEC_PRODUCTS_ITEMS_ERROR';
export const GET_SPEC_PRODUCTS_ITEMS_SUCCESS = 'GET_SPEC_PRODUCTS_ITEMS_SUCCESS';
export const onGetSpecProductsItems = ({ sectionID } = {}) => async (dispatch, getState) => {
  dispatch(onActionCreator(GET_SPEC_PRODUCTS_ITEMS));

  try {
    const { specProducts } = getState();
    const response = await getProductsItems({ sectionID: sectionID || specProducts.filters.section, params: { with_products: true }});
    return dispatch(onActionCreator(GET_SPEC_PRODUCTS_ITEMS_SUCCESS, { items: response.items }));
  } catch (error) {
    return dispatch(onActionCreator(GET_SPEC_PRODUCTS_ITEMS_ERROR, { error }));
  }
};

export const HIDE_SPEC_PRODUCTS_ITEMS_SUCCESS = 'HIDE_SPEC_PRODUCTS_ITEMS_SUCCESS';
export const onHideSpecProductsItemsSuccess = () => ({ type: HIDE_SPEC_PRODUCTS_ITEMS_SUCCESS });

export const SHOW_SPEC_PRODUCTS_ITEMS = 'SHOW_SPEC_PRODUCTS_ITEMS';
export const SHOW_SPEC_PRODUCTS_ITEMS_SUCCESS = 'SHOW_SPEC_PRODUCTS_ITEMS_SUCCESS';
export const onShowSpecProductsItems = () => dispatch =>
  batch(() => {
    dispatch(onActionCreator(SHOW_SPEC_PRODUCTS_ITEMS_SUCCESS));
    dispatch(onGetSpecProductsItems());
  });
