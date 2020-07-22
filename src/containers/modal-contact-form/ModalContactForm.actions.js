import { batch } from 'react-redux';
import onActionCreator from '../../config/store/helpers';
import { postContact } from '../../services/contact.service';
import { onShowAlertSuccess } from '../alert/Alert.actions';

export const POST_CONTACT_FORM = 'POST_CONTACT_FORM';
export const POST_CONTACT_FORM_ERROR = 'POST_CONTACT_FORM_ERROR';
export const OPEN_CONTACT_FORM_MODAL = 'OPEN_CONTACT_FORM_MODAL';
export const CLOSE_CONTACT_FORM_MODAL = 'CLOSE_CONTACT_FORM_MODAL';

// async calls
export const sendContactData = newContact => async dispatch => {
  try {
    const message = 'Hemos enviado la información al colaborador.';
    await postContact({ brandId: newContact.brand_id, contact: newContact });
    batch(() => {
      dispatch(onShowAlertSuccess({ message }));
      dispatch(onActionCreator(POST_CONTACT_FORM, { sended: true, loading: false }));
    });
  } catch (error) {
    const message = 'Error al enviar formulario.';
    batch(() => {
      dispatch(onShowAlertSuccess({ message }));
      dispatch(onActionCreator(POST_CONTACT_FORM_ERROR, { loading: false, error: true }));
    });
  }
};

// sync calls
export const openContactModal = selectedBrand => dispatch => dispatch(onActionCreator(OPEN_CONTACT_FORM_MODAL, { selectedBrand }));

export const closeContactModal = () => dispatch => dispatch(onActionCreator(CLOSE_CONTACT_FORM_MODAL, { }));
