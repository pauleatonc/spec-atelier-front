import { batch } from 'react-redux';
import onActionCreator from '../../config/store/helpers';
import { getProductsSections } from '../../services/products.service';

export const GET_SPEC_PRODUCTS_SECTIONS = 'GET_SPEC_PRODUCTS_SECTIONS';
export const GET_SPEC_PRODUCTS_SECTIONS_ERROR = 'GET_SPEC_PRODUCTS_SECTIONS_ERROR';
export const GET_SPEC_PRODUCTS_SECTIONS_SUCCESS = 'GET_SPEC_PRODUCTS_SECTIONS_SUCCESS';
export const onGetSpecProductsSections = ({ specID }) => async dispatch => {
  dispatch(onActionCreator(GET_SPEC_PRODUCTS_SECTIONS));
  try {
    const response = await getProductsSections({ project_spec_id: specID });
    return dispatch(onActionCreator(GET_SPEC_PRODUCTS_SECTIONS_SUCCESS, { sections: response.sections }));
  } catch (error) {
    return dispatch(onActionCreator(GET_SPEC_PRODUCTS_SECTIONS_ERROR, { error: true, nativeError: error }));
  }
};

export const HIDE_SPEC_PRODUCTS_SECTIONS_SUCCESS = 'HIDE_SPEC_PRODUCTS_SECTIONS_SUCCESS';

export const SHOW_SPEC_PRODUCTS_SECTIONS = 'SHOW_SPEC_PRODUCTS_SECTIONS';
export const SHOW_SPEC_PRODUCTS_SECTIONS_SUCCESS = 'SHOW_SPEC_PRODUCTS_SECTIONS_SUCCESS';
export const onShowSpecProductsSections = ({ specID }) => dispatch =>
  batch(() => {
    dispatch(onActionCreator(SHOW_SPEC_PRODUCTS_SECTIONS_SUCCESS));
    dispatch(onGetSpecProductsSections({ specID }));
  });
