import {
  POST_CONTACT_FORM,
  POST_CONTACT_FORM_ERROR,
  OPEN_CONTACT_FORM_MODAL,
  CLOSE_CONTACT_FORM_MODAL,
} from './ModalContactForm.actions';

const initialModalContactFormState = {
  loading: true,
  show: false,
  selectedBrand: {},
  showContactModal: false,
  sended: false,
  contact: {
    user_phone: '',
    message: '',
  },
  message: '',
};

/**
 * The contactForms reducer.
 */
const modalContactFormReducer = (state = initialModalContactFormState, { payload, type }) => {
  switch (type) {
    case POST_CONTACT_FORM:
      return {
        ...state,
        sended: true,
        loading: false,
        error: undefined,
        showContactModal: false,
        selectedBrand: {},
        message: 'Hemos enviado la información al colaborador.',
      };
    case POST_CONTACT_FORM_ERROR:
      return {
        ...state,
        sended: false,
        error: payload.error,
        loading: false,
        message: 'Error al enviar formulario.'
      };
    case OPEN_CONTACT_FORM_MODAL:
      return {
        ...state,
        selectedBrand: payload?.selectedBrand,
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
