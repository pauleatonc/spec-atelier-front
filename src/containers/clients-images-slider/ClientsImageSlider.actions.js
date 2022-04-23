import onActionCreator from 'config/store/helpers';
import { getClients as getClientsData } from 'services/clients.service';

export const GET_CLIENTS_HOME = 'GET_CLIENTS_HOME';
export const GET_CLIENTS_ERROR_HOME = 'GET_CLIENTS_ERROR_HOME';

// async calls
export const getClients = () => async (dispatch) => {
  try {
    const { clients } = await getClientsData();
    return dispatch(
      onActionCreator(GET_CLIENTS_HOME, {
        clients: clients?.list ? clients?.list : clients,
        loading: false,
        total: clients?.total || 0,
      }),
    );
  } catch (error) {
    return dispatch(
      onActionCreator(GET_CLIENTS_ERROR_HOME, { loading: false, error: true }),
    );
  }
};
