import { batch } from 'react-redux';
import onActionCreator from '../../config/store/helpers';
import { addSpecBlock, addSpecBlockText, getSpecBlocks } from '../../services/specs.service';
import { onShowAlertSuccess } from '../alert/Alert.actions';

export const GET_SPEC_BLOCKS = 'GET_SPEC_BLOCKS';
export const GET_SPEC_BLOCKS_ERROR = 'GET_SPEC_BLOCKS_ERROR';
export const GET_SPEC_BLOCKS_SUCCESS = 'GET_SPEC_BLOCKS_SUCCESS';
export const onGetSpecBlocks = specID => async (dispatch, getState) => {
  dispatch(onActionCreator(GET_SPEC_BLOCKS));

  try {
    const { auth } = getState();
    const { blocks = [] } = await getSpecBlocks({ specID, userID: auth.user?.id }) || {};

    return dispatch(onActionCreator(GET_SPEC_BLOCKS_SUCCESS, { blocks }));
  } catch (error) {
    return dispatch(onActionCreator(GET_SPEC_BLOCKS, { error: true, nativeError: error }));
  }
};

export const ADD_SPEC_BLOCK = 'ADD_SPEC_BLOCK';
export const ADD_SPEC_BLOCK_ERROR = 'ADD_SPEC_BLOCK_ERROR';
export const ADD_SPEC_BLOCK_SUCCESS = 'ADD_SPEC_BLOCK_SUCCESS';
export const onAddSpecBlock = ({ specID, blockID }) => async (dispatch, getState) => {
  dispatch(onActionCreator(ADD_SPEC_BLOCK));

  try {
    const { auth, specProducts } = getState();
    const [block] = specProducts.collection
      .filter(specProduct => specProduct.id === blockID)
      .map(specProduct => ({
        itemID: specProduct.item.id,
        productID: specProduct.id,
        sectionID: specProduct.section.id,
      }));
    
    await addSpecBlock({ ...block, specID, userID: auth.user?.id });

    return batch(() => {
      dispatch(onActionCreator(ADD_SPEC_BLOCK_SUCCESS));
      dispatch(onGetSpecBlocks(specID));
    });
  } catch (error) {
    return dispatch(onActionCreator(ADD_SPEC_BLOCK_ERROR, { error: true, nativeError: error }));
  }
};

export const ATTACH_SPEC_PRODUCT = 'ATTACH_SPEC_PRODUCT';
export const onAttachSpecProduct = payload => dispatch =>
  batch(() => {
    dispatch(onAddSpecBlock({ ...payload, blockID: payload.productID }));
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
export const onAddSpecBlockText = ({ blockID, specID, text }) => async (dispatch, getState) => {
  dispatch(onActionCreator(ADD_SPEC_BLOCK_TEXT));

  try {
    const { auth } = getState();

    await addSpecBlockText({ blockID, specID, text, userID: auth.user?.id });

    return batch(() => {
      dispatch(onActionCreator(ADD_SPEC_BLOCK_TEXT_SUCCESS));
      dispatch(onGetSpecBlocks(specID));
    });
  } catch (error) {
    return dispatch(onActionCreator(ADD_SPEC_BLOCK_TEXT_ERROR, { error: true, nativeError: error }));
  }
};

export const UPDATE_SPEC_BLOCKS_SORT = 'UPDATE_SPEC_BLOCKS_SORT';
export const UPDATE_SPEC_BLOCKS_SORT_ERROR = 'UPDATE_SPEC_BLOCKS_SORT_ERROR';
export const UPDATE_SPEC_BLOCKS_SORT_SUCCESS = 'UPDATE_SPEC_BLOCKS_SORT_SUCCESS';
export const onUpdateSpecBlocksSort = blocksIDs => async (dispatch, getState) => {
  dispatch(onActionCreator(UPDATE_SPEC_BLOCKS_SORT));

  try {
    const { specDocument } = getState();
    const updatedSpecBlocks = blocksIDs.reduce((blocks, blockID) => {
      const found = specDocument.blocks.find(block => block.id === blockID);
      
      if (!found) {
        return blocks;
      }
      
      return blocks.concat(found);
    }, []);

    return dispatch(onActionCreator(UPDATE_SPEC_BLOCKS_SORT_SUCCESS, { blocks: updatedSpecBlocks }));
  } catch (error) {
    return dispatch(onActionCreator(UPDATE_SPEC_BLOCKS_SORT_ERROR, { error: true, nativeError: error }));
  }
};
