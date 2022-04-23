import {
  GET_CLIENTS,
  GET_CLIENTS_ERROR,
  GET_MORE_CLIENTS,
} from './ClientsList.actions';

const initialClientState = {
  clients: [],
  loading: true,
  show: false,
  params: {
    keyword: '',
    page: 0,
    limit: 6,
  },
  error: undefined,
  total: 0,
};

/** The clients reducer */
const clientsReducer = (state = initialClientState, { payload, type }) => {
  const newclients = payload?.clients?.list || [];
  switch (type) {
    case GET_CLIENTS:
      return {
        ...state,
        clients: payload?.clients || [],
        total: payload?.total || 0,
        loading: false,
        error: undefined,
        params: initialClientState.params,
      };
    case GET_MORE_CLIENTS:
      return {
        ...state,
        clients: [...state.clients, ...newclients],
        total: payload?.clients?.total || 0,
        loading: false,
        error: undefined,
        params: payload.params,
      };
    case GET_CLIENTS_ERROR:
      return {
        ...state,
        error: payload.error,
        loading: false,
      };
    default: {
      return state;
    }
  }
};

export default clientsReducer;
