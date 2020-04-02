import getEndPoint from '@Configurations/config';
import { getLocalStorage } from '@Helpers/localstorage.helper';
import {
  GET_PRODUCTS_BY_ITEM_ERROR,
  GET_PRODUCTS_BY_ITEM_SUCCESS,
  SELECT_MENU,
  SELECT_SECTION_ITEM,
} from '@Configurations/constants';

export const onSelectMenu = payload => ({ payload, type: SELECT_MENU });
export const onSelectSectionItem = payload => ({ payload, type: SELECT_SECTION_ITEM });

export const onGetProductsByItemError = payload => ({ payload, type: GET_PRODUCTS_BY_ITEM_ERROR });
export const onGetProductsByItemSuccess = payload => ({ payload, type: GET_PRODUCTS_BY_ITEM_SUCCESS });
export const onGetProductsByItem = () => async (dispatch, getState) => {
  try {
    const state = getState();
    const { nextPage, selectedSectionItemID } = state.projectSpecification;
    let url = getEndPoint({ service: `items/${selectedSectionItemID}/products?limit=20` });

    if (nextPage) {
      url = `${url}&page=${nextPage}`;
    }

    // TODO: support filters and search
    return fetch(url, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${getLocalStorage('token')}`,
          'Content-Type': 'application/json',
        },
      })
      .then(response => response.json())
      .then(({ products = {} }) =>
        dispatch(onGetProductsByItemSuccess({ nextPage: products?.next_page, products: products?.list || [], total: products?.total || 0}))
      );
  } catch (error) {
    return dispatch(onGetProductsByItemError({ error: true, nativeError: error }));
  }
};