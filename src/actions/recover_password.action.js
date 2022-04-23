import getEndPoint from 'config/config';
import { RECOVER_PASSWORD, RECOVER_PASSWORD_ERROR } from 'config/constants';

export const recoverPasswordAction = (dispatch) => (email) => {
  const endpoint = getEndPoint({ service: 'password_forgot' });

  fetch(`${endpoint}?email=${email}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((res) => res.json())
    .then((response) => {
      return dispatch({
        type: RECOVER_PASSWORD,
        payload: {
          sended: response.status,
        },
      });
    })
    .catch(() => {
      return dispatch({
        type: RECOVER_PASSWORD_ERROR,
        payload: {
          sended: false,
        },
      });
    });
};
