import { batch } from 'react-redux';
import onActionCreator from 'config/store/helpers';
import { postPlanContact } from 'services/plans.service';

export const SHOW_MODAL_STEP_ONE = 'SHOW_MODAL_STEP_ONE';
export const SHOW_MODAL_STEP_TWO = 'SHOW_MODAL_STEP_TWO';
export const HIDE_MODAL_STEP_TWO = 'HIDE_MODAL_STEP_TWO';
export const SHOW_SUCCESS_MODAL = 'SHOW_SUCCESS_MODAL';
export const HIDE_MODAL = 'HIDE_MODAL';

export const onShowModalStepOne = (type) => (dispatch) => {
  dispatch(onActionCreator(SHOW_MODAL_STEP_ONE, { type }));
};

export const onShowModalStepTwo = (itemsTotal) => (dispatch) => {
  dispatch(onActionCreator(SHOW_MODAL_STEP_TWO, { itemsTotal }));
};

export const onHideModal = (reset) => (dispatch) => {
  if (reset) reset();
  dispatch(onActionCreator(HIDE_MODAL));
};

export const onHideModalStepTwo = () => (dispatch) =>
  dispatch(onActionCreator(HIDE_MODAL_STEP_TWO));

export const sendContactData = (params) => (dispatch) => {
  postPlanContact(params).then(
    () => {
      batch(() => {
        dispatch(onHideModal());
        dispatch(onActionCreator(SHOW_SUCCESS_MODAL));
      });
    },
    (error) => {
      console.error(error);
    },
  );
};
