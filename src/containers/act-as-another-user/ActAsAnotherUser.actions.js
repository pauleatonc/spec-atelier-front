/* eslint-disable import/no-unresolved */
import onActionCreator from '../../config/store/helpers';
import { getUsers as getUsersData } from '../../services/users.service';


export const GET_USERS_TO_ACT_AS = 'GET_USERS_TO_ACT_AS';
export const GET_USERS_TO_ACT_AS_ERROR = 'GET_USERS_TO_ACT_AS_ERROR';

export const getUsers = params => async dispatch => {
  try {
    const response = await getUsersData(params);
    if (response?.status >= 400) dispatch(onActionCreator(GET_USERS_TO_ACT_AS_ERROR, { loading: false }));
    dispatch(onActionCreator(GET_USERS_TO_ACT_AS, { users: response.users, loading: false }));
  } catch (error) {
    dispatch(onActionCreator(GET_USERS_TO_ACT_AS_ERROR, { loading: false, error }));
  }
};
