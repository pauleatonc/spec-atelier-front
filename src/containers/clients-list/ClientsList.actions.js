import onActionCreator from '../../config/store/helpers';
import { getClients as getClientsData }from '../../services/clients.service';

export const GET_CLIENTS = 'GET_CLIENTS';
export const GET_MORE_CLIENTS = 'GET_MORE_CLIENTS';
export const GET_CLIENTS_ERROR = 'GET_CLIENTS_ERROR';


export const getMoreClients = (params) => async (dispatch) => {
	try {
		const { clients } = await getClientsData(params);
		dispatch(
			onActionCreator(GET_MORE_CLIENTS, { clients, loading: false, params }),
		);
	} catch (error) {
		dispatch(
			onActionCreator(GET_CLIENTS_ERROR, {
				loading: false,
				error: true,
				params,
			}),
		);
	}
};

export const getClients = (params) => async (dispatch) => {
	try {
		const { clients } = await getClientsData(params);
		return dispatch(
			onActionCreator(GET_CLIENTS, {
				clients: clients?.list ? clients?.list : clients,
				loading: false,
				params,
				total: clients?.total || 0,
			}),
		);
	} catch (error) {
		dispatch(
			onActionCreator(GET_CLIENTS_ERROR, {
				loading: false,
				error: true,
				params,
			}),
		);
	}
};
