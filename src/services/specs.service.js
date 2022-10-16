import { API_BASE_URL } from '../config/constants/environment';
import {
  deleteJsonRequest,
  getJsonRequest,
  postJsonRequest,
  patchJsonRequest,
  getBlobRequest,
} from '../modules/requests';
import {
  cleanObjectsAndArrays,
  factoryService,
  formatParams,
} from '../modules/services';

/** Add a block to the spec */
export const addSpecBlock = factoryService(
  ({ specID, userID, productID, systemID, params }) =>
    postJsonRequest(
      `${API_BASE_URL}/users/${userID}/project_specs/${specID}/create_product${formatParams(
        cleanObjectsAndArrays(params),
      )}`,
      {
        product: productID,
        system: systemID,
      },
    ),
);

/** Add a block's text to the given block */
export const addSpecBlockText = factoryService(
  ({ blockID, specID, textValue, userID }) =>
    postJsonRequest(
      `${API_BASE_URL}/users/${userID}/project_specs/${specID}/create_text`,
      { block: blockID, text: textValue },
    ),
);

/** Delete a block from the spec */
export const deleteSpecBlock = factoryService(({ block, specID, userID }) => {
  return deleteJsonRequest(
    `${API_BASE_URL}/users/${userID}/project_specs/${specID}/remove_block`,
    { block },
  );
});

/** Delete the image of the given block */
export const deleteSpecBlockImage = factoryService(
  ({ imageBlockID, specID, userID }) =>
    patchJsonRequest(
      `${API_BASE_URL}/users/${userID}/project_specs/${specID}/remove_product_image`,
      { block: imageBlockID },
    ),
);

/** Delete the given block's text */
export const deleteSpecBlockText = factoryService(
  ({ specID, textID, userID }) =>
    deleteJsonRequest(
      `${API_BASE_URL}/users/${userID}/project_specs/${specID}/remove_text`,
      { block: textID },
    ),
);

/** Get the spec blocks */
export const getSpecBlocks = factoryService(({ specID, userID }) =>
  getJsonRequest(`${API_BASE_URL}/users/${userID}/project_specs/${specID}`),
);

/** Sort the spec blocks */
export const sortSpecBlocks = factoryService(
  ({ blocks, block, specID, userID }) =>
    patchJsonRequest(
      `${API_BASE_URL}/users/${userID}/project_specs/${specID}/reorder_blocks`,
      { blocks, block },
    ),
);

/** Update the image of the given block */
export const updateSpecBlockImage = factoryService(
  ({ blockID, imageID, specID, userID }) =>
    patchJsonRequest(
      `${API_BASE_URL}/users/${userID}/project_specs/${specID}/add_product_image`,
      { block: blockID, image: imageID },
    ),
);

/** Edit the image of the given block */
export const editSpecBlockImage = factoryService(
  ({ blockImageID, imageID, specID, userID }) =>
    patchJsonRequest(
      `${API_BASE_URL}/users/${userID}/project_specs/${specID}/edit_product_image`,
      { block: blockImageID, image: imageID },
    ),
);

/** Update the given block's text */
export const updateSpecBlockText = factoryService(
  ({ specID, textID, textValue, userID }) =>
    patchJsonRequest(
      `${API_BASE_URL}/users/${userID}/project_specs/${specID}/edit_text`,
      { block: textID, updated_text: textValue },
    ),
);

/** Download current specification */
export const downloadSpec = factoryService(({ specID, userID }) =>
  getJsonRequest(
    `${API_BASE_URL}/users/${userID}/project_specs/${specID}/download_word`,
  ),
);

/** getMySpecifications */
export const getMySpecs = factoryService((params) =>
  getJsonRequest(
    `${API_BASE_URL}/project_specs/my_specifications${formatParams(params)}`,
  ),
);

/** get room types by params */
export const getRoomTypes = factoryService(({ params }) =>
  getJsonRequest(
    `${API_BASE_URL}/configs/room_types${formatParams(
      cleanObjectsAndArrays(params),
    )}`,
  ),
);

export const downloadBudged = factoryService(({ specID, userID }) =>
  getBlobRequest(
    `${API_BASE_URL}/users/${userID}/project_specs/${specID}/download_budget`,
  ),
);

/** update project configuration */
export const updateProjectConfig = factoryService(
  ({ specID, project_config, userID }) =>
    postJsonRequest(
      `${API_BASE_URL}/users/${userID}/projects/${specID}/project_configs`,
      { project_config },
    ),
);

export const updateProduct = factoryService((body) =>
  patchJsonRequest(`${API_BASE_URL}/products/${body.id}`, body.data),
);

export const sendQuote = factoryService((body) =>
  postJsonRequest(`${API_BASE_URL}/products/${body.id}/quote`, body.data),
);

export const getNotificationsList = factoryService((id) =>
  getJsonRequest(
    `${API_BASE_URL}/users/${id}/notifications?permissions=true&limit=10`,
  ),
);

export const updateNotificationsWatch = factoryService((body) =>
  patchJsonRequest(
    `${API_BASE_URL}/users/${body.idUser}/notifications/mark_as_watched?limit=10`,
    { notifications: body.notifications },
  ),
);

export const acceptNotification = factoryService(
  (body) =>
    patchJsonRequest(
      `${API_BASE_URL}/projects/${body.projectId}/invitations/${body.notifiId}/accept`,
    ),
  true,
);

export const rejectNotification = factoryService(
  (body) =>
    patchJsonRequest(
      `${API_BASE_URL}/projects/${body.projectId}/invitations/${body.notifiId}/refuse`,
    ),
  true,
);

export const undoRejectNotification = factoryService(
  (body) =>
    patchJsonRequest(
      `${API_BASE_URL}/projects/${body.projectId}/invitations/${body.notifiId}/refused_undo`,
    ),
  true,
);

export const getChangeHistory = factoryService(({ specID, userID, params }) =>
  getJsonRequest(
    `${API_BASE_URL}/users/${userID}/project_specs/${specID}/changes${formatParams(
      params,
    )}`,
  ),
);

export const getChangesAuthor = factoryService(({ specID, userID, params }) =>
  getJsonRequest(
    `${API_BASE_URL}/users/${userID}/project_specs/${specID}/changes/authors${formatParams(
      params,
    )}`,
  ),
);

/**
 * Get the list changes.
 */
export const saveSpecChanges = factoryService(({ specID, userID, changes_accepted, changes_rejected, approve_request_id }) =>
  postJsonRequest(
    `${API_BASE_URL}/users/${userID}/project_specs/${specID}/blocks/save_changes`,
    { changes_accepted, changes_rejected, approve_request_id },
  ),
);

/** Send block changes */
export const submitChanges = factoryService(
  ({ changes, specID, userID, comment }) =>
    patchJsonRequest(
      `${API_BASE_URL}/users/${userID}/project_specs/${specID}/blocks/submit_changes`,
      { changes, comment },
    ),
);

/** Remove block change */
export const undoRemove = factoryService(({ changeID, specID, userID }) =>
  patchJsonRequest(
    `${API_BASE_URL}/users/${userID}/project_specs/${specID}/changes/${changeID}/undo_change`,
    { change: changeID },
  ),
);

/** Undo send block change */
export const undoSend = factoryService(({ changeID, specID, userID }) =>
  patchJsonRequest(
    `${API_BASE_URL}/users/${userID}/project_specs/${specID}/changes/${changeID}/unsent_change`,
    { change: changeID },
  ),
);

/** Get updated */
export const getUpdated = factoryService(({ specID, userID, date }) =>
  getJsonRequest(
    `${API_BASE_URL}/users/${userID}/project_specs/${specID}/updated${formatParams(
      { updated_at: date },
    )}`,
  ),
);

/**
 * get project structure
 */
export const getProjectStructure = factoryService(({ specID }) =>
  getJsonRequest(
    `${API_BASE_URL}/configs/project_structure?project_spec_id=${specID}`,
  ),
);

/**
 * Get Approve request
 */
export const getApproveRequest = factoryService(({ userId, projectId }) =>
  getJsonRequest(
    `${API_BASE_URL}/users/${userId}/project_specs/${projectId}/approve_requests`,
  ),
);

/**
 * Get Approve request blocks
 */
export const getApproveRequestBlocks = factoryService(
  ({ userId, projectId, approveId }) =>
    getJsonRequest(
      `${API_BASE_URL}/users/${userId}/project_specs/${projectId}/approve_requests/${approveId}/blocks`,
    ),
);
