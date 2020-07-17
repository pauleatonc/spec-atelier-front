import { API_BASE_URL } from '../config/constants/environment';
import { getJsonRequest, postJsonRequest } from '../modules/requests';
import { factoryService } from '../modules/services'

export const addSpecBlock = factoryService(({ itemID, productID, sectionID, specID, userID }) => 
  postJsonRequest(
    `${API_BASE_URL}/users/${userID}/project_specs/${specID}/create_product`,
    {
      item: itemID,
      product: productID,
      section: sectionID,
    },
  ),
);

/**
 * Add an associated text's by the given block.
 */
export const addSpecBlockText = factoryService(({ blockID, specID, text, userID }) =>
  postJsonRequest(`${API_BASE_URL}/users/${userID}/project_specs/${specID}/create_text`, { text, block: blockID }),
);

/**
 * Get the specification blocks.
 */
export const getSpecBlocks = factoryService(({ specID, userID }) =>
  getJsonRequest(`${API_BASE_URL}/users/${userID}/project_specs/${specID}`),
);
