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

export const cleanStoreProductList = () => (dispatch) =>
  dispatch(onActionCreator(CLEAN_PRODUCT_LIST_STORE));

export const getUserProfile = () => async (dispatch, getSate) => {
  try {
    const { user } = getSate().auth;
    dispatch(onActionCreator(PROFILE_LOADING));

    const response = await getProfile({ id: user.id });
    if (response?.status >= 400)
      return dispatch(
        onActionCreator(GET_PROFILE, { loading: false, error: true, user: {} }),
      );
    console.log('erw', response);
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

export const setUserProfile = ({ user: profile }) => async (dispatch, getSate) => {
  try {
    const { user } = getSate().auth;
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
