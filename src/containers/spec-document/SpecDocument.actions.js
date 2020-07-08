import { batch } from 'react-redux';
import onActionCreator from '../../config/store/helpers';
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
        element: {
          description: specProduct.long_desc || '',
          id: specProduct.id,
          images: (specProduct.images || []).map((image, index) => ({
            id: `${specProduct.id}-images-${index}`,
            url: image.urls?.thumb,
          })),
          reference: specProduct.reference || '',
          system: specProduct?.system?.name || '',
          title: specProduct.name,
        },
        id: `${specProduct.id}-block-product`,
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

export const ADD_SPEC_BLOCK_IMAGE = 'ADD_SPEC_BLOCK_IMAGE';
export const ADD_SPEC_BLOCK_IMAGE_ERROR = 'ADD_SPEC_BLOCK_IMAGE_ERROR';
export const ADD_SPEC_BLOCK_IMAGE_SUCCESS = 'ADD_SPEC_BLOCK_IMAGE_SUCCESS';
export const onAddSpecBlockImage = ({ blockID, imageID }) => async (dispatch, getState) => {
  dispatch(onActionCreator(ADD_SPEC_BLOCK_IMAGE));

  try {
    const { specDocument } = getState();
    const updatedBlocks = specDocument.blocks?.map(block => {
      if (block.id === blockID) {
        return {
          ...block,
          element: { ...block.element, image: imageID },
        };
      }

      return block;
    })

    return dispatch(onActionCreator(ADD_SPEC_BLOCK_IMAGE_SUCCESS, { blocks: updatedBlocks }));
  } catch (error) {
    return dispatch(onActionCreator(ADD_SPEC_BLOCK_IMAGE_ERROR, { error: true, nativeError: error }));
  }
};

export const ADD_SPEC_BLOCK_TEXT = 'ADD_SPEC_BLOCK_TEXT';
export const ADD_SPEC_BLOCK_TEXT_ERROR = 'ADD_SPEC_BLOCK_TEXT_ERROR';
export const ADD_SPEC_BLOCK_TEXT_SUCCESS = 'ADD_SPEC_BLOCK_TEXT_SUCCESS';
export const onAddSpecBlockText = ({ blockID, text }) => async dispatch => {
  dispatch(onActionCreator(ADD_SPEC_BLOCK_TEXT));

  try {
    // const { auth } = getState();

    // await createSpecBlockText({ projectID, text, userID: auth.user?.id });

    return dispatch(onActionCreator(ADD_SPEC_BLOCK_TEXT_SUCCESS, { blockID, text }));
  } catch (error) {
    return dispatch(onActionCreator(ADD_SPEC_BLOCK_TEXT_ERROR, { error: true, nativeError: error }));
  }
};
