import onActionCreator from '../../config/store/helpers';
import { getProductsSections } from '../../services/products.service';

export const GET_PRODUCTS_SECTIONS = 'GET_PRODUCTS_SECTIONS';
export const GET_PRODUCTS_SECTIONS_ERROR = 'GET_PRODUCTS_SECTIONS_ERROR';
export const GET_PRODUCTS_SECTIONS_SUCCESS = 'GET_PRODUCTS_SECTIONS_SUCCESS';
export const onGetProductsSections = () => async (dispatch, getState) => {
  dispatch(onActionCreator(GET_PRODUCTS_SECTIONS));

  try {
    const state = getState();
    const { collection } = state.specProductsSections;

    if (collection?.length > 0) {
      return dispatch(onActionCreator(GET_PRODUCTS_SECTIONS_SUCCESS, { sections: collection }));
    }

    const response = await getProductsSections();

    return dispatch(onActionCreator(GET_PRODUCTS_SECTIONS_SUCCESS, { sections: response.sections }));
  } catch (error) {
    return dispatch(onActionCreator(GET_PRODUCTS_SECTIONS_ERROR, { error }));
  }
};

export const HIDE_SPEC_PRODUCTS_SECTIONS_SUCCESS = 'HIDE_SPEC_PRODUCTS_SECTIONS_SUCCESS';
export const SHOW_SPEC_PRODUCTS_SECTIONS_SUCCESS = 'SHOW_SPEC_PRODUCTS_SECTIONS_SUCCESS';
export const onHideSpecProductsSectionsSuccess = () => ({ type: HIDE_SPEC_PRODUCTS_SECTIONS_SUCCESS });
export const onShowSpecProductsSectionsSuccess = () => ({ type: SHOW_SPEC_PRODUCTS_SECTIONS_SUCCESS });
