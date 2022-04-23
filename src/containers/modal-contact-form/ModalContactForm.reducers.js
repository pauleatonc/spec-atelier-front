import {
  POST_CONTACT_FORM,
  POST_CONTACT_FORM_ERROR,
  OPEN_CONTACT_FORM_MODAL,
  CLOSE_CONTACT_FORM_MODAL,
} from './ModalContactForm.actions';

const initialModalContactFormState = {
  loading: true,
  show: false,
  selectedClient: {
    name: '',
  },
  selectedProduct: {},
  showContactModal: false,
  sended: false,
  contact: {
    user_phone: '',
    message: '',
  },
  message: '',
  error: undefined,
};

/** The contactForms reducer */
const modalContactFormReducer = (
  state = initialModalContactFormState,
  { payload, type },
) => {
  switch (type) {
    case POST_CONTACT_FORM:
      return {
        ...initialModalContactFormState,
        sended: true,
        loading: false,
      };
    case POST_CONTACT_FORM_ERROR:
      return {
        ...state,
        sended: false,
        error: payload.error,
        loading: false,
      };
    case OPEN_CONTACT_FORM_MODAL:
      return {
        ...state,
        selectedClient: payload?.selectedClient || {},
        selectedProduct: payload?.selectedProduct || {},
        showContactModal: true,
      };
    case CLOSE_CONTACT_FORM_MODAL:
      return {
        ...initialModalContactFormState,
      };
    default: {
      return state;
    }
  }
};

export default modalContactFormReducer;
