import onActionCreator from '../../config/store/helpers';
import { createSpecItemText } from '../../services/specs.service';

export const CREATE_SPEC_ITEM_TEXT = 'CREATE_SPEC_ITEM_TEXT';
export const CREATE_SPEC_ITEM_TEXT_ERROR = 'CREATE_SPEC_ITEM_TEXT_ERROR';
export const CREATE_SPEC_ITEM_TEXT_SUCCESS = 'CREATE_SPEC_ITEM_TEXT_SUCCESS';
export const onCreateSpecItemText = ({ projectID, text }) => async (dispatch, getState) => {
  dispatch(onActionCreator(CREATE_SPEC_ITEM_TEXT));

  try {
    const { auth } = getState();

    await createSpecItemText({ projectID, text, userID: auth.user?.id });

    return dispatch(onActionCreator(CREATE_SPEC_ITEM_TEXT_SUCCESS));
  } catch (error) {
    return dispatch(onActionCreator(CREATE_SPEC_ITEM_TEXT_ERROR, { error: true, nativeError: error }));
  }
};
