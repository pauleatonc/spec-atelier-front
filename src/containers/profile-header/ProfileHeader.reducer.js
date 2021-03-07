import {
  GET_PROFILE,
  SET_PROFILE,
  PROFILE_LOADING,
  SHOW_EDIT_PROFILE_PICTURE,
  HIDE_EDIT_PROFILE_PICTURE,
  CHANGE_PROFILE_PICTURE_LOADING,
  CHANGE_PROFILE_PICTURE_SUCCESS,
  CHANGE_PROFILE_PICTURE_ERROR
} from './ProfileHeader.actions';

const Profile = {
  user: {

  },
  loading: false,
  error: false,
  showEditProfilePicture: false
};

/**
 * The products' reducer.
 */
const ProfileReducer = (state = { ...Profile }, { payload, type }) => {
  switch (type) {
    case GET_PROFILE: {
      return {
        ...state,
        ...payload,
        error: false,
        user: payload.user,
      };
    }
    case SET_PROFILE: {
      return {
        ...state,
        loading: false,
        error: false,
        user: payload.user,
      };
    }
    case PROFILE_LOADING: {
      return {
        ...state,
        loading: true,
      }
    }
    case SHOW_EDIT_PROFILE_PICTURE: {
      return {
        ...state,
        showEditProfilePicture: true
      }
    }
    case HIDE_EDIT_PROFILE_PICTURE: {
      return {
        ...state,
        showEditProfilePicture: false
      }
    }
    case CHANGE_PROFILE_PICTURE_LOADING: {
      return {
        ...state,
        loading: true
      }
    }
    case CHANGE_PROFILE_PICTURE_SUCCESS: {
      return {
        ...state,
        loading: false,
        error: false,
        user: { ...payload.user }
      }
    }
    case CHANGE_PROFILE_PICTURE_ERROR: {
      return {
        ...state,
        loading: false,
        error: true,
      }
    }
    default: {
      return state;
    }
  }
};

export default ProfileReducer;
