import {
  GET_PROFILE,
  SET_PROFILE,
  PROFILE_LOADING,
  SHOW_EDIT_PROFILE_PICTURE,
  HIDE_EDIT_PROFILE_PICTURE
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
    default: {
      return state;
    }
  }
};

export default ProfileReducer;
