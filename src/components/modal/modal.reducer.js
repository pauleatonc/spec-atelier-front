import {
  SHOW_MODAL,
  HIDE_MODAL,
} from './modal.actions';

export const initialState = {
  isOpen: false,
};

const modalReducer = (state = initialState, action) => {
  const { type } = action;
  switch (type) {
    case SHOW_MODAL:
      return {
        ...state,
        isOpen: true,
      }
    case HIDE_MODAL:
      return {
        ...state,
        isOpen: false,
      }
    default:
      return state;
  }
};

export default modalReducer;