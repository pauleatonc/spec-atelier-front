import {
  deleteLocalStorage,
  getLocalStorage,
  setLocalStorage,
} from 'helpers/localstorage.helper';
import getEndPoint from 'config/config';
import { LOG_IN, LOG_IN_ERROR, LOG_OUT } from 'config/constants';

export const loginAction = (dispatch) => (data) => {
  const endpoint = getEndPoint({ service: 'sessions' });

  fetch(`${endpoint}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .then((response) => {
      setLocalStorage({
        key: 'token',
        value: response.user.jwt,
      });

      setLocalStorage({
        key: 'userID',
        value: response.user.id,
      });

      return dispatch({
        type: LOG_IN,
        payload: {
          isLogin: true,
          userData: response.user,
        },
      });
    })
    .catch((error) => {
      return dispatch({
        type: LOG_IN_ERROR,
        payload: {
          isLogin: false,
          error,
        },
      });
    });
};

export const logoutAction = (dispatch) => () => {
  const endpoint = getEndPoint({ service: 'logout' });
  const token = getLocalStorage('token');

  fetch(`${endpoint}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  })
    .then((res) => res.json())
    .then(() => {
      deleteLocalStorage('token');
      deleteLocalStorage('userID');
      deleteLocalStorage('responseStatus');
      return dispatch({
        type: LOG_OUT,
        payload: {
          isLogin: false,
          userData: [],
        },
      });
    });
};
