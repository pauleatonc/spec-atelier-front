import onActionCreator from '../../config/store/helpers';
import { downloadSpec } from '../../services/specs.service';

export const LOADING_SPEC_DOWNLOAD = 'LOADING_SPEC_DOWNLOAD';
export const DOWNLOAD_URL_SUCCESS = 'DOWNLOAD_URL_SUCCESS';
export const DOWNLOAD_URL_ERROR = 'DOWNLOAD_URL_ERROR';
export const CLEAN_DOWNLOAD = 'CLEAN_DOWNLOAD';

export const downloadSpecDocument = ({ specID }) => async (dispatch, getState) => {
  dispatch(onActionCreator(LOADING_SPEC_DOWNLOAD));

  try {
    const { auth } = getState();
    const { url } = await downloadSpec({ specID, userID: auth.user?.id });
    return dispatch(onActionCreator(DOWNLOAD_URL_SUCCESS, { url }));
  } catch (error) {
    return dispatch(onActionCreator(DOWNLOAD_URL_ERROR, { error: true, nativeError: error }));
  }
};

export const cleanDownload = () => dispatch => dispatch(onActionCreator(CLEAN_DOWNLOAD));