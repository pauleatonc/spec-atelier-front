import {
  getFormatedTableData,
  getTotalExpandManual,
  getSections,
  getOwnerBlocks,
} from './utils';
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
  UPDATE_TEAM_DATA,
  SAVE_TEAM_MEMBERS,
  DELETE_MEMBER_TEAM,
  SEND_CHANGED_BLOCKS_SUCCESS,
  EDIT_SPEC_BLOCK_IMAGE_SUCCESS,
} from './SpecDocument.actions';

const specDocumentState = {
  blocks: [],
  ownerBlocks: [],
  loading: false,
  project: {},
  quoteTable: [],
  totalExpandManual: 0,
  sections: [],
  changes: [],
};

/** The spec document' reducer */
const specDocumentReducer = (state = specDocumentState, { payload, type }) => {
  switch (type) {
    case ADD_SPEC_BLOCK_SUCCESS:
    case ADD_SPEC_BLOCK_IMAGE_SUCCESS:
    case EDIT_SPEC_BLOCK_IMAGE_SUCCESS:
    case ADD_SPEC_BLOCK_TEXT_SUCCESS:
    case GET_SPEC_BLOCKS_SUCCESS:
      return {
        ...state,
        blocks: payload.blocks,
        ownerBlocks: getOwnerBlocks(payload.blocks),
        project: { ...state.project, ...payload.project },
        quoteTable: getFormatedTableData(payload.blocks),
        totalExpandManual: getTotalExpandManual(payload.blocks),
        sections: getSections(payload.blocks),
        changes: payload.changes,
      };
    case REMOVE_SPEC_BLOCK_SUCCESS:
    case REMOVE_SPEC_BLOCK_IMAGE_SUCCESS:
    case REMOVE_SPEC_BLOCK_TEXT_SUCCESS:
    case UPDATE_SPEC_BLOCK_TEXT_SUCCESS: {
      return {
        ...state,
        blocks: payload.blocks,
        sections: getSections(payload.blocks),
        changes: payload.changes,
        ownerBlocks: getOwnerBlocks(payload.blocks),
      };
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
    case UPDATE_TEAM_DATA: {
      return {
        ...state,
        project: {
          ...state.project,
          team: payload.updatedTeamData,
        },
      };
    }
    case SAVE_TEAM_MEMBERS: {
      return {
        ...state,
        project: {
          ...state.project,
          team: [...state?.project?.team, ...payload.invitations],
        },
      };
    }
    case DELETE_MEMBER_TEAM: {
      return {
        ...state,
        project: {
          ...state.project,
          team: state?.project?.team.filter(
            (member) => member.permission.id !== payload.permissionId,
          ),
        },
      };
    }
    case SEND_CHANGED_BLOCKS_SUCCESS: {
      return {
        ...state,
        changes: [],
        blocks: payload.blocks,
      };
    }
    default: {
      return state;
    }
  }
};

export default specDocumentReducer;
