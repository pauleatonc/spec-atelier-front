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
export const onGetProductsByItem = () => {
  return async dispatch => {
    try {
      // TODO: make the call to the related endpoint.
      return dispatch(onGetProductsByItemSuccess({ nextPage: null, products: [], total: 0 }));
    } catch (error) {
      return dispatch(onGetProductsByItemError({
        error: true,
        nativeError: error,
      }));
    }
  };
};
