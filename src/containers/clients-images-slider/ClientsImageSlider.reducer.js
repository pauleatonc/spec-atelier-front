import {
  GET_CLIENTS_HOME,
  GET_CLIENTS_ERROR_HOME,
} from './ClientsImageSlider.actions';

const initialState = {
  clients: [],
  loading: true,
  error: undefined,
  total: 0,
};

/** The home clients reducer */
const clientsImageSliderReducer = (state = initialState, { payload, type }) => {
  switch (type) {
    case GET_CLIENTS_HOME:
      return {
        ...state,
        clients: payload?.clients || [],
        loading: false,
        error: undefined,
      };
    case GET_CLIENTS_ERROR_HOME:
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

export default clientsImageSliderReducer;
