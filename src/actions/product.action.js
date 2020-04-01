import {
  GET_PRODUCT,
  GET_PRODUCT_ERROR,
} from '@Configurations/constants';

import { getLocalStorage } from '@Helpers/localstorage.helper';
import getEndPoint from '@Configurations/config';

const dispatchFormat = (type, payload) => ({ type, payload });

export const get = async url => fetch(url, {
  method: 'GET',
  headers: {
    Authorization: `Bearer ${getLocalStorage('token')}`,
    'Content-Type': 'application/json',
  },
});

export const getProduct = id => async dispatch => {
  try {
    const url = getEndPoint({ service: `product/${id}` });
    return get(url)
      .then(response => response.json())
      .then(payload => dispatchFormat(GET_PRODUCT, payload));
  } catch (error) {
    return dispatch(dispatchFormat(GET_PRODUCT_ERROR, {
      error: true,
      nativeError: error,
    }));
  }
};