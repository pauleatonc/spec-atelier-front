import { batch } from 'react-redux';
import onActionCreator from '../../config/store/helpers';
import { getProducts } from '../../services/products.service';
import { HIDE_SPEC_PRODUCTS_SECTIONS_SUCCESS, onShowSpecProductsSections } from '../spec-products-sections/SpecProductsSections.actions';
import { HIDE_SPEC_PRODUCTS_ITEMS_SUCCESS } from '../spec-products-items/SpecProductsItems.actions';

export const GET_SPEC_PRODUCTS = 'GET_SPEC_PRODUCTS';
export const GET_SPEC_PRODUCTS_ERROR = 'GET_SPEC_PRODUCTS_ERROR';
export const GET_SPEC_PRODUCTS_SUCCESS = 'GET_SPEC_PRODUCTS_SUCCESS';
export const onGetSpecProducts = () => async (dispatch, getState) => {
  dispatch(onActionCreator(GET_SPEC_PRODUCTS));

  try {
    const { specProducts } = getState();
    const response = await getProducts(specProducts.filters);

    return dispatch(
      onActionCreator(
        GET_SPEC_PRODUCTS_SUCCESS,
        {
          nextPage: response?.products?.next_page,
          products: response?.products?.list,
          total: response?.products?.total || 0,
        },
      ),
    );
  } catch (error) {
    return dispatch(onActionCreator(GET_SPEC_PRODUCTS_ERROR, { error: true, nativeError: error }));
  }
};

export const UPDATE_SPEC_PRODUCTS = 'UPDATE_SPEC_PRODUCTS';
export const UPDATE_SPEC_PRODUCTS_ERROR = 'UPDATE_SPEC_PRODUCTS_ERROR';
export const UPDATE_SPEC_PRODUCTS_SUCCESS = 'UPDATE_SPEC_PRODUCTS_SUCCESS';
export const onUpdateSpecProducts = page => async (dispatch, getState) => {
  dispatch(onActionCreator(UPDATE_SPEC_PRODUCTS));

  try {
    const { specProducts } = getState();
    const response = await getProducts({ page });

    return dispatch(
      onActionCreator(
        UPDATE_SPEC_PRODUCTS_SUCCESS,
        {
          nextPage: response?.products?.next_page,
          products: specProducts.collection.concat(response?.products?.list || []),
          total: response?.products?.total || 0,
        },
      ),
    );
  } catch (error) {
    return dispatch(onActionCreator(UPDATE_SPEC_PRODUCTS_ERROR, { error: true, nativeError: error }));
  }
};

export const UPDATE_SPEC_PRODUCTS_FILTER_ITEM = 'UPDATE_SPEC_PRODUCTS_FILTER_ITEM';
export const UPDATE_SPEC_PRODUCTS_FILTER_SEARCH = 'UPDATE_SPEC_PRODUCTS_FILTER_SEARCH';
export const UPDATE_SPEC_PRODUCTS_FILTER_SECTION = 'UPDATE_SPEC_PRODUCTS_FILTER_SECTION';

export const HIDE_SPEC_PRODUCTS_SUCCESS = 'HIDE_SPEC_PRODUCTS_SUCCESS';
export const onHideSpecProductsSuccess = () => dispatch =>
  batch(() => {
    dispatch(onActionCreator(HIDE_SPEC_PRODUCTS_SECTIONS_SUCCESS));
    dispatch(onActionCreator(HIDE_SPEC_PRODUCTS_ITEMS_SUCCESS));
    dispatch(onActionCreator(HIDE_SPEC_PRODUCTS_SUCCESS));
  });

export const SHOW_SPEC_PRODUCTS_SUCCESS = 'SHOW_SPEC_PRODUCTS_SUCCESS';
export const onShowSpecProductsSuccess = () => dispatch =>
  batch(() => {
    dispatch(onShowSpecProductsSections());
    dispatch(onActionCreator(SHOW_SPEC_PRODUCTS_SUCCESS));
    dispatch(onGetSpecProducts());
  });
