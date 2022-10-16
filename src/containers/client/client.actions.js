import onActionCreator from '../../config/store/helpers';
import { getClient as getClientService } from '../../services/clients.service';

export const GET_CLIENT = 'GET_CLIENT';
export const GET_CLIENT_ERROR = 'GET_CLIENT_ERROR';
export const CLEAN_STORE = 'CLEAN_STORE';

export const cleanStore = () => (dispatch) =>
  dispatch(onActionCreator(CLEAN_STORE));

export const getClient = (clientId) => async (dispatch) => {
  try {
    const response = await getClientService(clientId);
    if (response?.status >= 400)
      return dispatch(
        onActionCreator(GET_CLIENT_ERROR, {
          loading: false,
          error: response?.error,
        }),
      );
    return dispatch(
      onActionCreator(GET_CLIENT, { client: response.client, loading: false }),
    );
  } catch (error) {
    return dispatch(
      onActionCreator(GET_CLIENT_ERROR, { loading: false, error }),
    );
  }
};
