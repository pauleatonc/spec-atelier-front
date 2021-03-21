import {
  GET_CLIENT,
  GET_CLIENT_ERROR,
  CLEAN_STORE,
} from './client.actions';

const initialClient = {
  client: undefined,
  loading: false,
  view: 'data',
  error: undefined,
  created: false,
  message: undefined,
};

/**
 * client reducer.
 */
const clientReducer = (state = initialClient, { payload, type }) => {
  switch (type) {
    case GET_CLIENT:
      return {
        ...state,
        client: payload?.client,
        loading: false,
        error: undefined,
      };
    case GET_CLIENT_ERROR:
      return {
        ...state,
        loading: false,
        error: payload?.error,
      };
    case CLEAN_STORE:
      return { ...initialClient };
    default: {
      return state;
    }
  }
};

export default clientReducer;
