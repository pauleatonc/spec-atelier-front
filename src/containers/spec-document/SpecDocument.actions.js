import { batch } from 'react-redux';
import onActionCreator from '../../config/store/helpers';
import {
  addSpecBlock,
  addSpecBlockText,
  deleteSpecBlock,
  deleteSpecBlockImage,
  getSpecBlocks,
  sortSpecBlocks,
  updateSpecBlockImage,
  updateSpecBlockText,
  deleteSpecBlockText,
  updateProduct,
  saveSpecChanges,
  submitChanges,
  editSpecBlockImage,
  undoRemove,
  undoSend,
  getUpdated,
  getApproveRequest,
  getApproveRequestBlocks,
} from '../../services/specs.service';
import { onShowAlertSuccess } from '../alert/Alert.actions';
import { updateProductsWithProduct } from '../products-list/ProductsList.actions';
import { closeModal } from '../spec-modal-product/SpecModalProduct.actions';
import { MAX_SCREEN_SMALL_NAV_JS } from '../../config/constants/styled-vars';
import { onGetChangeHistory } from '../spec-history/SpecHistory.actions';
import {
  filteredBlocks,
  getChanges,
  getSpecDocument,
  getUserID,
} from './utils';

const matchMedia = window.matchMedia(MAX_SCREEN_SMALL_NAV_JS).matches;
const specDocument = (getState) => getSpecDocument(getState);
const userID = (getState) => getUserID(getState);

export const SET_UPDATE_FALSE = 'SET_UPDATE_FALSE';
export const GET_SPEC_BLOCKS = 'GET_SPEC_BLOCKS';
export const GET_SPEC_BLOCKS_SUCCESS = 'GET_SPEC_BLOCKS_SUCCESS';
export const UPDATE_TEAM_DATA = 'UPDATE_TEAM_DATA';
export const SAVE_TEAM_MEMBERS = 'SAVE_TEAM_MEMBERS';
export const DELETE_MEMBER_TEAM = 'DELETE_MEMBER_TEAM';
export const onGetSpecBlocks = (specID) => async (dispatch, getState) => {
  dispatch(onActionCreator(SET_UPDATE_FALSE));
  dispatch(onActionCreator(GET_SPEC_BLOCKS));
  try {
    const { blocks = [], project = {} } =
      (await getSpecBlocks({ specID, userID: userID(getState) })) || {};
    const changes = getChanges(blocks);
    return dispatch(
      onActionCreator(GET_SPEC_BLOCKS_SUCCESS, {
        blocks,
        project,
        changes,
        updateSuccess: true,
      }),
    );
  } catch (error) {
    return dispatch(
      onActionCreator(GET_SPEC_BLOCKS, { error: true, nativeError: error }),
    );
  }
};

export const ADD_SPEC_BLOCK = 'ADD_SPEC_BLOCK';
export const ADD_SPEC_BLOCK_ERROR = 'ADD_SPEC_BLOCK_ERROR';
export const ADD_SPEC_BLOCK_SUCCESS = 'ADD_SPEC_BLOCK_SUCCESS';
export const onAddSpecBlock = ({
  specID,
  productID,
  systemID,
  ...rest
}) => async (dispatch, getState) => {
  dispatch(onShowAlertSuccess({ message: 'Añadiendo producto...' }));
  dispatch(onActionCreator(ADD_SPEC_BLOCK));
  try {
    const { blocks: updatedBlocks, product } = await addSpecBlock(
      {
        params: { ...rest },
        productID,
        systemID,
        specID,
        userID: userID(getState),
      },
      ADD_SPEC_BLOCK,
    );
    const changes = getChanges(updatedBlocks);
    dispatch(updateProductsWithProduct(product));
    dispatch(
      onActionCreator(ADD_SPEC_BLOCK_SUCCESS, {
        blocks: updatedBlocks,
        changes,
      }),
    );
    dispatch(
      onShowAlertSuccess({ message: 'Añadiste producto a una sección' }),
    );
    if (matchMedia) dispatch(closeModal());
    dispatch(onGetChangeHistory(specID, { limit: 7, page: 0 }));
  } catch (error) {
    dispatch(
      onActionCreator(ADD_SPEC_BLOCK_ERROR, {
        error: true,
        nativeError: error,
      }),
    );
  }
};

export const ATTACH_SPEC_PRODUCT = 'ATTACH_SPEC_PRODUCT';
export const onAttachSpecProduct = (payload) => (dispatch) => {
  batch(() => {
    dispatch(onAddSpecBlock({ ...payload }));
  });
};

export const REMOVE_SPEC_BLOCK = 'REMOVE_SPEC_BLOCK';
export const REMOVE_SPEC_BLOCK_ERROR = 'REMOVE_SPEC_BLOCK_ERROR';
export const REMOVE_SPEC_BLOCK_SUCCESS = 'REMOVE_SPEC_BLOCK_SUCCESS';
export const onRemoveSpecBlock = ({ block, specID }) => async (
  dispatch,
  getState,
) => {
  dispatch(onShowAlertSuccess({ message: 'Removiendo producto...' }));
  dispatch(onActionCreator(REMOVE_SPEC_BLOCK));
  try {
    const { blocks: updatedBlocks, product } = await deleteSpecBlock({
      block,
      specID,
      userID: userID(getState),
    });
    const changes = getChanges(updatedBlocks);
    if (product) dispatch(updateProductsWithProduct(product));
    dispatch(
      onActionCreator(REMOVE_SPEC_BLOCK_SUCCESS, {
        blocks: updatedBlocks,
        changes,
      }),
    );
    dispatch(
      onShowAlertSuccess({ message: 'Removiste el producto de una sección' }),
    );
    if (matchMedia) dispatch(closeModal());
  } catch (error) {
    dispatch(
      onActionCreator(REMOVE_SPEC_BLOCK_ERROR, {
        error: true,
        nativeError: error,
      }),
    );
  }
};

export const DETACH_SPEC_PRODUCT = 'DETACH_SPEC_PRODUCT';
export const onDetachSpecProduct = ({ product, specID, items }) => (
  dispatch,
) => {
  const blocks = [];
  if (items) {
    items.forEach(({ id }) => {
      specDocument.blocks
        .filter(
          (block) =>
            block.item === id &&
            block.element?.original_product_id === product.id,
        )
        .forEach((filterBlocks) => blocks.push(filterBlocks.id));
    });
  } else
    specDocument.blocks
      .filter((block) => block.element?.original_product_id === product.id)
      .forEach((filterBlocks) => blocks.push(filterBlocks.id));

  return dispatch(onRemoveSpecBlock({ specID, block: blocks }));
};

export const ADD_SPEC_BLOCK_IMAGE = 'ADD_SPEC_BLOCK_IMAGE';
export const ADD_SPEC_BLOCK_IMAGE_ERROR = 'ADD_SPEC_BLOCK_IMAGE_ERROR';
export const ADD_SPEC_BLOCK_IMAGE_SUCCESS = 'ADD_SPEC_BLOCK_IMAGE_SUCCESS';
export const onAddSpecBlockImage = ({ blockID, imageID, specID }) => async (
  dispatch,
  getState,
) => {
  dispatch(onActionCreator(ADD_SPEC_BLOCK_IMAGE));
  try {
    const { blocks: updatedBlocks } = await updateSpecBlockImage({
      blockID,
      imageID,
      specID,
      userID: userID(getState),
    });
    const changes = getChanges(updatedBlocks);
    return dispatch(
      onActionCreator(ADD_SPEC_BLOCK_IMAGE_SUCCESS, {
        blocks: updatedBlocks,
        changes,
      }),
    );
  } catch (error) {
    return dispatch(
      onActionCreator(ADD_SPEC_BLOCK_IMAGE_ERROR, {
        error: true,
        nativeError: error,
      }),
    );
  }
};

export const EDIT_SPEC_BLOCK_IMAGE = 'EDIT_SPEC_BLOCK_IMAGE';
export const EDIT_SPEC_BLOCK_IMAGE_SUCCESS = 'EDIT_SPEC_BLOCK_IMAGE_SUCCESS';
export const EDIT_SPEC_BLOCK_IMAGE_ERROR = 'EDIT_SPEC_BLOCK_IMAGE_ERROR';
export const onEditSpecBlockImage = ({
  blockImageID,
  imageID,
  specID,
}) => async (dispatch, getState) => {
  dispatch(onActionCreator(EDIT_SPEC_BLOCK_IMAGE));
  try {
    const { blocks: updatedBlocks } = await editSpecBlockImage({
      blockImageID,
      imageID,
      specID,
      userID: userID(getState),
    });
    const changes = getChanges(updatedBlocks);
    return dispatch(
      onActionCreator(EDIT_SPEC_BLOCK_IMAGE_SUCCESS, {
        blocks: updatedBlocks,
        changes,
      }),
    );
  } catch (error) {
    return dispatch(
      onActionCreator(EDIT_SPEC_BLOCK_IMAGE_ERROR, {
        error: true,
        nativeError: error,
      }),
    );
  }
};

export const REMOVE_SPEC_BLOCK_IMAGE = 'REMOVE_SPEC_BLOCK_IMAGE';
export const REMOVE_SPEC_BLOCK_IMAGE_ERROR = 'REMOVE_SPEC_BLOCK_IMAGE_ERROR';
export const REMOVE_SPEC_BLOCK_IMAGE_SUCCESS =
  'REMOVE_SPEC_BLOCK_IMAGE_SUCCESS';
export const onRemoveSpecBlockImage = ({ imageBlockID, specID }) => async (
  dispatch,
  getState,
) => {
  dispatch(onActionCreator(REMOVE_SPEC_BLOCK_IMAGE));
  try {
    const { blocks: updatedBlocks } = await deleteSpecBlockImage({
      imageBlockID,
      specID,
      userID: userID(getState),
    });
    const changes = getChanges(updatedBlocks);
    return dispatch(
      onActionCreator(REMOVE_SPEC_BLOCK_IMAGE_SUCCESS, {
        blocks: updatedBlocks,
        changes,
      }),
    );
  } catch (error) {
    return dispatch(
      onActionCreator(REMOVE_SPEC_BLOCK_IMAGE_ERROR, {
        error: true,
        nativeError: error,
      }),
    );
  }
};

export const ADD_SPEC_BLOCK_TEXT = 'ADD_SPEC_BLOCK_TEXT';
export const ADD_SPEC_BLOCK_TEXT_ERROR = 'ADD_SPEC_BLOCK_TEXT_ERROR';
export const ADD_SPEC_BLOCK_TEXT_SUCCESS = 'ADD_SPEC_BLOCK_TEXT_SUCCESS';
export const onAddSpecBlockText = ({ blockID, specID, textValue }) => async (
  dispatch,
  getState,
) => {
  dispatch(onActionCreator(ADD_SPEC_BLOCK_TEXT));
  try {
    const { blocks: updatedBlocks } = await addSpecBlockText({
      blockID,
      specID,
      textValue,
      userID: userID(getState),
    });
    const changes = getChanges(updatedBlocks);
    return dispatch(
      onActionCreator(ADD_SPEC_BLOCK_TEXT_SUCCESS, {
        blocks: updatedBlocks,
        changes,
      }),
    );
  } catch (error) {
    return dispatch(
      onActionCreator(ADD_SPEC_BLOCK_TEXT_ERROR, {
        error: true,
        nativeError: error,
      }),
    );
  }
};

export const REMOVE_SPEC_BLOCK_TEXT = 'REMOVE_SPEC_BLOCK_TEXT';
export const REMOVE_SPEC_BLOCK_TEXT_ERROR = 'REMOVE_SPEC_BLOCK_TEXT_ERROR';
export const REMOVE_SPEC_BLOCK_TEXT_SUCCESS = 'REMOVE_SPEC_BLOCK_TEXT_SUCCESS';
export const onRemoveSpecBlockText = ({ textID, specID }) => async (
  dispatch,
  getState,
) => {
  dispatch(onActionCreator(REMOVE_SPEC_BLOCK_TEXT));
  try {
    const { blocks: updatedBlocks } = await deleteSpecBlockText({
      specID,
      textID,
      userID: userID(getState),
    });
    const changes = getChanges(updatedBlocks);
    return dispatch(
      onActionCreator(REMOVE_SPEC_BLOCK_TEXT_SUCCESS, {
        blocks: updatedBlocks,
        changes,
      }),
    );
  } catch (error) {
    return dispatch(
      onActionCreator(REMOVE_SPEC_BLOCK_TEXT_ERROR, {
        error: true,
        nativeError: error,
      }),
    );
  }
};

export const UPDATE_SPEC_BLOCK_TEXT = 'UPDATE_SPEC_BLOCK_TEXT';
export const UPDATE_SPEC_BLOCK_TEXT_ERROR = 'UPDATE_SPEC_BLOCK_TEXT_ERROR';
export const UPDATE_SPEC_BLOCK_TEXT_SUCCESS = 'UPDATE_SPEC_BLOCK_TEXT_SUCCESS';
export const onUpdateSpecBlockText = ({
  blockID,
  specID,
  textID,
  textValue,
}) => async (dispatch, getState) => {
  dispatch(onActionCreator(UPDATE_SPEC_BLOCK_TEXT));
  try {
    const { blocks: updatedBlocks } = await updateSpecBlockText({
      blockID,
      specID,
      textID,
      textValue,
      userID: userID(getState),
    });
    const changes = getChanges(updatedBlocks);
    return dispatch(
      onActionCreator(UPDATE_SPEC_BLOCK_TEXT_SUCCESS, {
        blocks: updatedBlocks,
        changes,
      }),
    );
  } catch (error) {
    return dispatch(
      onActionCreator(UPDATE_SPEC_BLOCK_TEXT_ERROR, {
        error: true,
        nativeError: error,
      }),
    );
  }
};

export const SORT_SPEC_BLOCKS = 'SORT_SPEC_BLOCKS';
export const SORT_SPEC_BLOCKS_ERROR = 'SORT_SPEC_BLOCKS_ERROR';
export const SORT_SPEC_BLOCKS_SUCCESS = 'SORT_SPEC_BLOCKS_SUCCESS';
export const onSortSpecBlocks = ({ blocksIDs, blockId, specID }) => async (
  dispatch,
  getState,
) => {
  onActionCreator(SORT_SPEC_BLOCKS);
  try {
    const { blocks } = await sortSpecBlocks({
      specID,
      blocks: blocksIDs,
      block: blockId,
      userID: userID(getState),
    });
    return dispatch(onActionCreator(SORT_SPEC_BLOCKS_SUCCESS, { blocks }));
  } catch (error) {
    return dispatch(
      onActionCreator(SORT_SPEC_BLOCKS_ERROR, {
        error: true,
        nativeError: error,
      }),
    );
  }
};

export const UPDATE_PRODUCT = 'UPDATE_PRODUCT';
export const UPDATE_PRODUCT_SUCCESS = 'UPDATE_PRODUCT_SUCCESS';
export const UPDATE_PRODUCT_ERROR = 'UPDATE_PRODUCT_ERROR';
export const UPDATE_BLOCKS = 'UPDATE_BLOCKS';
export const handleUpdateProduct = (data, tableInputType, item) => async (
  dispatch,
) => {
  dispatch(onActionCreator(UPDATE_PRODUCT));
  updateProduct(data).then(
    ({ product }) => {
      // se destructura response
      dispatch(
        onActionCreator(UPDATE_PRODUCT_SUCCESS, {
          product,
          tableInputType,
          item,
        }),
      );
    },
    (error) => {
      // TODO: update
      dispatch(onActionCreator(UPDATE_PRODUCT_ERROR));
      console.error(error);
    },
  );
};

export const handleUpdateTeamData = (invitation) => (dispatch, getState) => {
  const {
    specDocument: {
      project: { team },
    },
  } = getState();
  const userToUpdate = team.indexOf(
    team.find((member) => member.user.email === invitation.user.email),
  );
  team[userToUpdate] = invitation;
  dispatch(onActionCreator(UPDATE_TEAM_DATA, { updatedTeamData: team }));
};

export const handleSaveTeamMembers = (invitations) => (dispatch) =>
  dispatch(onActionCreator(SAVE_TEAM_MEMBERS, { invitations }));

export const handleDeleteMemberTeam = (permissionId) => (dispatch) =>
  dispatch(onActionCreator(DELETE_MEMBER_TEAM, { permissionId }));

export const SAVE_SPEC_CHANGES = 'SAVE_SPEC_CHANGES';
export const SAVE_SPEC_CHANGES_SUCCESS = 'SAVE_SPEC_CHANGES_SUCCESS';
export const SAVE_SPEC_CHANGES_ERROR = 'SAVE_SPEC_CHANGES_ERROR';
export const onSaveSpecChanges = (specID, params) => async (
  dispatch,
  getState,
) => {
  const { auth } = getState();
  dispatch(onActionCreator(SAVE_SPEC_CHANGES));
  saveSpecChanges({ specID, userID: auth.user?.id, params })
    .then((response) => console.log(response))
    .catch((error) =>
      dispatch(onActionCreator(SAVE_SPEC_CHANGES_ERROR, { error })),
    );
};

export const SEND_CHANGED_BLOCKS = 'SEND_CHANGED_BLOCKS';
export const SEND_CHANGED_BLOCKS_SUCCESS = 'SEND_CHANGED_BLOCKS_SUCCESS';
export const SEND_CHANGED_BLOCKS_ERROR = 'SEND_CHANGED_BLOCKS_ERROR';
export const handleSubmitChanges = ({ changes, specID, comment }) => async (
  dispatch,
  getState,
) => {
  dispatch(onShowAlertSuccess({ message: 'Enviando cambios...' }));
  dispatch(onActionCreator(SEND_CHANGED_BLOCKS));
  submitChanges({ changes, specID, userID: userID(getState), comment }).then(
    (response) => {
      dispatch(onActionCreator(SEND_CHANGED_BLOCKS_SUCCESS, response));
      dispatch(
        onShowAlertSuccess({ message: 'Se enviaron cambios a tu proyecto' }),
      );
      if (matchMedia) dispatch(closeModal());
    },
    (error) => {
      dispatch(
        onShowAlertSuccess({
          message: 'Hubo un error al enviar sus cambios',
        }),
      );
      dispatch(onActionCreator(SEND_CHANGED_BLOCKS_ERROR));
      console.error(error);
    },
  );
};

export const SEND_CHANGE_BLOCK_SUCCESS = 'SEND_CHANGE_BLOCK_SUCCESS';
export const SEND_CHANGE_BLOCK_ERROR = 'SEND_CHANGE_BLOCK_ERROR';
export const onUndoChange = ({ changeID, specID }) => async (
  dispatch,
  getState,
) => {
  dispatch(onShowAlertSuccess({ message: 'Enviando cambios...' }));
  undoRemove({ changeID, specID, userID: userID(getState) }).then(
    (response) => {
      const blocks = filteredBlocks(specDocument(getState).blocks, response);
      const changes = getChanges(blocks);
      dispatch(
        onActionCreator(SEND_CHANGE_BLOCK_SUCCESS, {
          blocks,
          changes,
        }),
      );
      dispatch(onShowAlertSuccess({ message: 'Se deshizo el cambio' }));
    },
    () => {
      dispatch(
        onShowAlertSuccess({
          message: 'Hubo un error al enviar sus cambios',
        }),
      );
    },
  );
};

export const UNDO_SEND_BLOCK_SUCCESS = 'UNDO_SEND_BLOCK_SUCCESS';
export const UNDO_SEND_BLOCK_ERROR = 'UNDO_SEND_BLOCK_ERROR';
export const onUndoSend = ({ changeID, specID }) => async (
  dispatch,
  getState,
) => {
  dispatch(onShowAlertSuccess({ message: 'Deshaciendo el envío...' }));
  undoSend({ changeID, specID, userID: userID(getState) }).then(
    (response) => {
      const blocks = filteredBlocks(specDocument(getState).blocks, response);
      const changes = getChanges(blocks);
      dispatch(
        onActionCreator(UNDO_SEND_BLOCK_SUCCESS, {
          blocks,
          changes,
        }),
      );
      dispatch(onShowAlertSuccess({ message: 'Se deshizo el envío' }));
    },
    () => {
      dispatch(
        onShowAlertSuccess({
          message: 'Hubo un error al deshacer tu envío',
        }),
      );
    },
  );
};

export const STOP_UPDATE = 'STOP_UPDATE';
export const stopGetUpdate = () => async (dispatch) => {
  dispatch(onActionCreator(STOP_UPDATE));
};

export const UNDO_STOP_UPDATE = 'UNDO_STOP_UPDATE';
export const undoStopGetUpdate = () => async (dispatch) => {
  dispatch(onActionCreator(UNDO_STOP_UPDATE));
};

export const GET_UPDATE_SUCCESS = 'GET_UPDATE_SUCCESS';
export const onGetUpdate = ({ specID, date }) => async (dispatch, getState) => {
  try {
    const response = await getUpdated({
      specID,
      userID: userID(getState),
      date,
    });
    if (response) dispatch(stopGetUpdate());
    return dispatch(onActionCreator(GET_UPDATE_SUCCESS, response));
  } catch (error) {
    return console.error(error);
  }
};

export const GET_APPROVE_REQUEST_BLOCKS_SUCCESS =
  'GET_APPROVE_REQUEST_BLOCKS_SUCCESS';
export const onGetApproveRequestBlocks = (projectId, approveId, callback) => (
  dispatch,
  getState,
) => {
  const { user } = getState().auth;
  getApproveRequestBlocks({ userId: user.id, projectId, approveId }).then(
    (response) => {
      dispatch(onActionCreator(GET_APPROVE_REQUEST_BLOCKS_SUCCESS, response));
      if (callback) callback();
    },
    (error) => console.error(error),
  );
};

export const GET_APPROVE_REQUEST_SUCCESS = 'GET_APPROVE_REQUEST_SUCCESS';
export const onGetApproveRequest = (projectId) => (dispatch, getState) => {
  const { user } = getState().auth;
  getApproveRequest({ userId: user.id, projectId }).then(
    (response) => {
      dispatch(onActionCreator(GET_APPROVE_REQUEST_SUCCESS, response));
      dispatch(
        onGetApproveRequestBlocks(projectId, response.approve_requests[0].id),
      );
    },
    (error) => console.error(error),
  );
};
