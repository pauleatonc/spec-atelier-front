import { RECOVER_PASSWORD, RECOVER_PASSWORD_ERROR } from 'config/constants';

export const initialState = {
  sended: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case RECOVER_PASSWORD:
      return {
        ...state,
        sended: action.payload.sended,
      };
    case RECOVER_PASSWORD_ERROR:
      return {
        ...state,
        sended: action.payload.sended,
      };
    default:
      return state;
  }
};
