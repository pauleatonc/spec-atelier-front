import { setLocalStorage } from 'helpers/localstorage.helper';
import getEndPoint from 'config/config';
import { REGISTRATION, REGISTRATION_ERROR } from 'config/constants';

export const registrationAction = (dispatch) => (data) => {
  const endpoint = getEndPoint({ service: 'registrations' });

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
        type: REGISTRATION,
        payload: {
          isLogin: response.data.logged_in,
          userData: response.user,
        },
      });
    })
    .catch((error) => {
      return dispatch({
        type: REGISTRATION_ERROR,
        payload: {
          isLogin: false,
          error,
        },
      });
    });
};
