import { HIDE_ALERT_SUCCESS, SHOW_ALERT_SUCCESS } from './Alert.actions';

const specAlertState = {
  message: '',
  show: false,
};

/** The alert's reducer */
const alertReducer = (state = specAlertState, { payload, type }) => {
  switch (type) {
    case HIDE_ALERT_SUCCESS: {
      return specAlertState;
    }
    case SHOW_ALERT_SUCCESS: {
      return { ...state, message: payload.message, show: true };
    }
    default: {
      return state;
    }
  }
};

export default alertReducer;
