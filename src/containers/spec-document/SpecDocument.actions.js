import { batch } from 'react-redux';
import onActionCreator from '../../config/store/helpers';
import { createSpecBlockText } from '../../services/specs.service';
import { onShowAlertSuccess } from '../alert/Alert.actions';

export const ADD_SPEC_BLOCK = 'ADD_SPEC_BLOCK';
export const ADD_SPEC_BLOCK_ERROR = 'ADD_SPEC_BLOCK_ERROR';
export const ADD_SPEC_BLOCK_SUCCESS = 'ADD_SPEC_BLOCK_SUCCESS';
export const onAddSpecBlock = blockID => (dispatch, getState) => {
  dispatch(onActionCreator(ADD_SPEC_BLOCK));

  try {
    const { specProducts } = getState();
    const [product] = specProducts.collection
      .filter(specProduct => specProduct.id === blockID)
      .map(specProduct => ({
        description: specProduct.long_desc || '',
        id: specProduct.id,
        reference: specProduct.reference || '',
        system: specProduct?.system?.name || '',
        title: specProduct.name,
        type: 'product',
      }));

    return dispatch(onActionCreator(ADD_SPEC_BLOCK_SUCCESS, product));
  } catch (error) {
    return dispatch(onActionCreator(ADD_SPEC_BLOCK_ERROR, { error: true, nativeError: error }));
  }
};

export const ATTACH_SPEC_PRODUCT = 'ATTACH_SPEC_PRODUCT';
export const onAttachSpecProduct = payload => dispatch =>
  batch(() => {
    dispatch(onAddSpecBlock(payload));
    dispatch(onShowAlertSuccess({ message: 'Añadiste producto a una sección' }));
  });

export const REMOVE_SPEC_BLOCK = 'REMOVE_SPEC_BLOCK';
export const REMOVE_SPEC_BLOCK_ERROR = 'REMOVE_SPEC_BLOCK_ERROR';
export const REMOVE_SPEC_BLOCK_SUCCESS = 'REMOVE_SPEC_BLOCK_SUCCESS';
export const onRemoveSpecBlock = blockID => dispatch => {
  dispatch(onActionCreator(REMOVE_SPEC_BLOCK));

  try {
    return dispatch(onActionCreator(REMOVE_SPEC_BLOCK_SUCCESS, { blockID }));
  } catch (error) {
    return dispatch(onActionCreator(REMOVE_SPEC_BLOCK_ERROR, { error: true, nativeError: error }));
  }
};

export const DETACH_SPEC_PRODUCT = 'DETACH_SPEC_PRODUCT';
export const onDetachSpecProduct = payload => dispatch =>
  dispatch(onAddSpecBlock(payload));

export const CREATE_SPEC_BLOCK_TEXT = 'CREATE_SPEC_BLOCK_TEXT';
export const CREATE_SPEC_BLOCK_TEXT_ERROR = 'CREATE_SPEC_BLOCK_TEXT_ERROR';
export const CREATE_SPEC_BLOCK_TEXT_SUCCESS = 'CREATE_SPEC_BLOCK_TEXT_SUCCESS';
export const onCreateSpecBlockText = ({ projectID, text }) => async (dispatch, getState) => {
  dispatch(onActionCreator(CREATE_SPEC_BLOCK_TEXT));

  try {
    const { auth } = getState();

    await createSpecBlockText({ projectID, text, userID: auth.user?.id });

    return dispatch(onActionCreator(CREATE_SPEC_BLOCK_TEXT_SUCCESS));
  } catch (error) {
    return dispatch(onActionCreator(CREATE_SPEC_BLOCK_TEXT_ERROR, { error: true, nativeError: error }));
  }
};
