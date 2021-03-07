import onActionCreator from '../../config/store/helpers';
import {
  setProfile,
  getProfile,
  setProfileImage,
} from '../../services/profile.service';

export const SET_PROFILE = 'SET_PROFILE';
export const GET_PROFILE = 'GET_PROFILE';
export const PROFILE_LOADING = 'PROFILE_LOADING';
export const CLEAN_PROFILE_STORE = 'CLEAN_PROFILE_STORE';
export const SHOW_EDIT_PROFILE_PICTURE = 'SHOW_EDIT_PROFILE_PICTURE';
export const HIDE_EDIT_PROFILE_PICTURE = 'HIDE_EDIT_PROFILE_PICTURE';
export const CHANGE_PROFILE_PICTURE_LOADING = 'CHANGE_PROFILE_PICTURE_LOADING';
export const CHANGE_PROFILE_PICTURE_SUCCESS = 'CHANGE_PROFILE_PICTURE_SUCCESS';
export const CHANGE_PROFILE_PICTURE_ERROR = 'CHANGE_PROFILE_PICTURE_ERROR';

export const cleanStoreProductList = () => (dispatch) =>
  dispatch(onActionCreator(CLEAN_PRODUCT_LIST_STORE));

export const getUserProfile = () => async (dispatch, getState) => {
  try {
    const { user } = getState().auth;
    dispatch(onActionCreator(PROFILE_LOADING));

    const response = await getProfile({ id: user.id });
    if (response?.status >= 400)
      return dispatch(
        onActionCreator(GET_PROFILE, { loading: false, error: true, user: {} }),
      );
    return dispatch(
      onActionCreator(GET_PROFILE, {
        loading: false,
        user: response.user || {},
      }),
    );
  } catch (error) {
    return dispatch(
      onActionCreator(GET_PROFILE, { loading: false, error, user: {} }),
    );
  }
};

export const setUserProfile = ({ user: profile }) => async (dispatch, getState) => {
  try {
    const { user } = getState().auth;
    dispatch(onActionCreator(PROFILE_LOADING));
    const response = await setProfile({ id: user.id, user: profile });
    if (response?.status >= 400)
      return dispatch(
        onActionCreator(GET_PROFILE, { loading: false, error: true }),
      );
    return dispatch(
      onActionCreator(GET_PROFILE, { loading: false, user: response.user }),
    );
  } catch (error) {
    return dispatch(onActionCreator(GET_PROFILE, { loading: false, error }));
  }
};

export const onShowEditProfilePicture = () => ({ type: SHOW_EDIT_PROFILE_PICTURE });
export const onHideEditProfilePicture = () => ({ type: HIDE_EDIT_PROFILE_PICTURE });

export const onChangeProfilePicture = image => (dispatch, getState) => {
  const { user } = getState().auth;
  dispatch(onActionCreator(CHANGE_PROFILE_PICTURE_LOADING));
  setProfileImage({ id: user.id, image }).then(
		(response) => {
      dispatch(onHideEditProfilePicture());
      dispatch(onActionCreator(CHANGE_PROFILE_PICTURE_SUCCESS, { user: response.user }));
		},
		(error) => {
			console.error(error);
			return dispatch(onActionCreator(CHANGE_PROFILE_PICTURE_ERROR));
		},
	);
}
