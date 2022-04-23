import {
  ADD_SPEC_BLOCK_SUCCESS,
  ADD_SPEC_BLOCK_IMAGE_SUCCESS,
  ADD_SPEC_BLOCK_TEXT_SUCCESS,
  GET_SPEC_BLOCKS_SUCCESS,
  REMOVE_SPEC_BLOCK_SUCCESS,
  REMOVE_SPEC_BLOCK_IMAGE_SUCCESS,
  REMOVE_SPEC_BLOCK_TEXT_SUCCESS,
  SORT_SPEC_BLOCKS_SUCCESS,
  UPDATE_SPEC_BLOCK_TEXT_SUCCESS,
  UPDATE_PRODUCT,
  UPDATE_PRODUCT_SUCCESS,
} from './SpecDocument.actions';
import { getFormatedTableData, getTotalExpandManual } from './utils';

const specDocumentState = {
  blocks: [],
  loading: false,
  project: {},
  quoteTable: [],
  totalExpandManual: 0,
};

/** The spec document' reducer */
const specDocumentReducer = (state = specDocumentState, { payload, type }) => {
  switch (type) {
    case ADD_SPEC_BLOCK_SUCCESS:
    case ADD_SPEC_BLOCK_IMAGE_SUCCESS:
    case ADD_SPEC_BLOCK_TEXT_SUCCESS:
    case GET_SPEC_BLOCKS_SUCCESS:
      return {
        ...state,
        blocks: payload.blocks,
        project: { ...state.project, ...payload.project },
        quoteTable: getFormatedTableData(payload.blocks),
        totalExpandManual: getTotalExpandManual(payload.blocks),
      };
    case REMOVE_SPEC_BLOCK_SUCCESS:
    case REMOVE_SPEC_BLOCK_IMAGE_SUCCESS:
    case REMOVE_SPEC_BLOCK_TEXT_SUCCESS:
    case UPDATE_SPEC_BLOCK_TEXT_SUCCESS: {
      return { ...state, blocks: payload.blocks };
    }
    case SORT_SPEC_BLOCKS_SUCCESS: {
      return { ...state, blocks: payload.blocks };
    }
    case UPDATE_PRODUCT: {
      return { ...state };
    }
    case UPDATE_PRODUCT_SUCCESS: {
      const idsBlocks = state.blocks.map((block) => block.id);
      const filterBlock = state.blocks.filter(
        (block) =>
          block.type === 'Product' &&
          block.element.id === payload.product.id &&
          block.item === payload.item,
      );
      filterBlock[0].element = {
        ...filterBlock[0].element,
        [payload.tableInputType]: payload.product[payload.tableInputType],
      };
      const indexFilterBlock = idsBlocks.indexOf(filterBlock[0].id);
      const newBlocks = [
        ...state.blocks.filter((block) => block.id !== filterBlock[0].id),
      ];
      newBlocks.splice(indexFilterBlock, 0, filterBlock[0]);
      return {
        ...state,
        quoteTable: getFormatedTableData(newBlocks),
      };
    }
    default: {
      return state;
    }
  }
};

export default specDocumentReducer;
