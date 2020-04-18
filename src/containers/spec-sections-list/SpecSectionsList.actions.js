import onActionCreator from '../../config/store/helpers';
import { getSections } from '../../services/specification.service';

export const GET_SECTIONS = 'GET_SECTIONS';
export const GET_SECTIONS_ERROR = 'GET_SECTIONS_ERROR';
export const GET_SECTIONS_SUCCESS = 'GET_SECTIONS_SUCCESS';
export const onGetSections = () => async dispatch => {
  dispatch(onActionCreator(GET_SECTIONS));

  try {
    const response = await getSections();

    return dispatch(onActionCreator(GET_SECTIONS_SUCCESS, { sections: response.sections }));
  } catch (error) {
    return dispatch(onActionCreator(GET_SECTIONS_ERROR, { error }));
  }
};

export const HIDE_SPEC_SECTIONS_LIST_SUCCESS = 'HIDE_SPEC_SECTIONS_LIST_SUCCESS';
export const SHOW_SPEC_SECTIONS_LIST_SUCCESS = 'SHOW_SPEC_SECTIONS_LIST_SUCCESS';
export const onHideSpecSectionsListSuccess = () => ({ type: HIDE_SPEC_SECTIONS_LIST_SUCCESS });
export const onShowSpecSectionsListSuccess = () => ({ type: SHOW_SPEC_SECTIONS_LIST_SUCCESS });
