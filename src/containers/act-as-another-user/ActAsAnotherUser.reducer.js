import {
  GET_USERS_TO_ACT_AS,
  GET_USERS_TO_ACT_AS_ERROR,
} from './ActAsAnotherUser.actions';

const actAsUserState = {
  users: [],
  params: {
    page: 0,
    limit: 10,
    keyword: '',
  },
};

/** The alert's reducer */
const actAsAnotherUserListReducer = (
  state = actAsUserState,
  { payload, type },
) => {
  switch (type) {
    case GET_USERS_TO_ACT_AS: {
      const users = payload?.users || [];
      return {
        ...state,
        users,
        loading: false,
      };
    }
    case GET_USERS_TO_ACT_AS_ERROR: {
      return { ...state, message: payload.message };
    }
    default: {
      return state;
    }
  }
};

export default actAsAnotherUserListReducer;
