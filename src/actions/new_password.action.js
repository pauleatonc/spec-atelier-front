import getEndPoint from 'config/config';
import { NEW_PASSWORD, NEW_PASSWORD_ERROR } from 'config/constants';

export const newPasswordAction = (dispatch) => ({ token, password }) => {
  const endpoint = getEndPoint({ service: 'password_reset' });

  fetch(`${endpoint}?token=${token}&password=${password}`, {
    method: 'GET',
    header: {
      'Content-Type': 'application/json',
    },
  })
    .then((res) => res.json())
    .then((response) => {
      return dispatch({
        type: NEW_PASSWORD,
        payload: {
          status: response.status,
        },
      });
    })
    .catch(() => {
      return dispatch({
        type: NEW_PASSWORD_ERROR,
        payload: {
          status: false,
        },
      });
    });
};
