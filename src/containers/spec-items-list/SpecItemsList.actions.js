import onActionCreator from '../../config/store/helpers';
import { getItems } from '../../services/specification.service';

export const GET_SECTION_ITEMS = 'GET_SECTION_ITEMS';
export const GET_SECTION_ITEMS_ERROR = 'GET_SECTION_ITEMS_ERROR';
export const GET_SECTION_ITEMS_SUCCESS = 'GET_SECTION_ITEMS_SUCCESS';

export const onGetSectionItems = ({ sectionID }) => async dispatch => {
  dispatch(onActionCreator(GET_SECTION_ITEMS));

  try {
    const response = await getItems(sectionID);

    return dispatch(onActionCreator(GET_SECTION_ITEMS_SUCCESS, { items: response.items }));
  } catch (error) {
    return dispatch(onActionCreator(GET_SECTION_ITEMS_ERROR, { error }));
  }
};

export const HIDE_SPEC_ITEMS_LIST_SUCCESS = 'HIDE_SPEC_ITEMS_LIST_SUCCESS';
export const SHOW_SPEC_ITEMS_LIST_SUCCESS = 'SHOW_SPEC_ITEMS_LIST_SUCCESS';
export const onHideSpecItemsListSuccess = () => ({ type: HIDE_SPEC_ITEMS_LIST_SUCCESS });
export const onShowSpecItemsListSuccess = () => ({ type: SHOW_SPEC_ITEMS_LIST_SUCCESS });
