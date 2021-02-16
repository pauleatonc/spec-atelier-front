import {
  GET_PROFILE,
  SET_PROFILE,
  PROFILE_LOADING,
} from './ProfileHeader.actions';

const Profile = {
  user: {

  },
  loading: false,
  error: false,
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
    default: {
      return state;
    }
  }
};

export default ProfileReducer;
