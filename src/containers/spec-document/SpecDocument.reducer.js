import {
  getFormatedTableData,
  getTotalExpandManual,
  getSections,
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
  SAVE_SPEC_CHANGES,
  SAVE_SPEC_CHANGES_SUCCESS,
  SAVE_SPEC_CHANGES_ERROR,
  SEND_CHANGED_BLOCKS_SUCCESS,
  EDIT_SPEC_BLOCK_IMAGE_SUCCESS,
  SEND_CHANGE_BLOCK_SUCCESS,
  UNDO_SEND_BLOCK_SUCCESS,
  SAVE_PROJECT_STRUCTURE,
  GET_UPDATE_SUCCESS,
  SET_UPDATE_FALSE,
  STOP_UPDATE,
  UNDO_STOP_UPDATE,
  GET_APPROVE_REQUEST_LOADING,
  GET_APPROVE_REQUEST_SUCCESS,
  GET_APPROVE_REQUEST_ERROR,
  GET_APPROVE_REQUEST_BLOCKS_LOADING,
  GET_APPROVE_REQUEST_BLOCKS_SUCCESS,
  GET_APPROVE_REQUEST_BLOCKS_ERROR,
} from './SpecDocument.actions';

const specDocumentState = {
  blocks: [],
  loading: false,
  project: {},
  quoteTable: [],
  totalExpandManual: 0,
  sections: [],
  changesCount: 0,
  changesLoading: false,
  changesError: null,
  changes: [],
  projectStructure: [],
  update: false,
  updateSuccess: false,
  actionGet: true,
  approveRequest: [],
  approveRequestLoading: false,
  approveRequestError: null,
  approveRequestBlocks: [],
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
        project: { ...state.project, ...payload.project },
        quoteTable: getFormatedTableData(payload.blocks),
        totalExpandManual: getTotalExpandManual(payload.blocks),
        sections: getSections(payload.blocks),
        changes: payload.changes,
        updateSuccess: payload.updateSuccess,
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
      };
    }
    case SORT_SPEC_BLOCKS_SUCCESS: {
      return {
        ...state,
        blocks: payload.blocks,
      };
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
    case SAVE_SPEC_CHANGES: {
      return {
        ...state,
        changesLoading: true,
      };
    }
    case SAVE_SPEC_CHANGES_SUCCESS: {
      return {
        ...state,
        changesLoading: false,
        changesError: null,
        approveRequestBlocks: payload.blocks,
        changesCount: payload.count
      };
    }
    case SAVE_SPEC_CHANGES_ERROR: {
      return {
        ...state,
        changesLoading: false,
        changesError: payload.error,
      };
    }
    case SEND_CHANGED_BLOCKS_SUCCESS: {
      return {
        ...state,
        changes: [],
        blocks: payload.blocks,
      };
    }
    case SEND_CHANGE_BLOCK_SUCCESS:
    case UNDO_SEND_BLOCK_SUCCESS: {
      return {
        ...state,
        blocks: payload.blocks,
        changes: payload.changes,
      };
    }
    case GET_UPDATE_SUCCESS: {
      return {
        ...state,
        update: payload,
      };
    }
    case SET_UPDATE_FALSE: {
      return { ...state, update: false };
    }
    case STOP_UPDATE:
      return { ...state, actionGet: false };
    case UNDO_STOP_UPDATE:
      return { ...state, actionGet: true };
    case SAVE_PROJECT_STRUCTURE: {
      return {
        ...state,
        projectStructure: payload.sections,
      };
    }
    case GET_APPROVE_REQUEST_SUCCESS:
      return {
        ...state,
        approveRequest: payload.approve_requests,
      };
    case GET_APPROVE_REQUEST_LOADING:
    case GET_APPROVE_REQUEST_BLOCKS_LOADING:
      return {
        ...state,
        approveRequestLoading: true,
      };
    case GET_APPROVE_REQUEST_ERROR:
    case GET_APPROVE_REQUEST_BLOCKS_ERROR:
      return {
        ...state,
        approveRequestLoading: false,
        approveRequestError: payload.error,
      };
    case GET_APPROVE_REQUEST_BLOCKS_SUCCESS:
      return {
        ...state,
        changesCount: payload.approve_request.count,
        approveRequestBlocks: payload.blocks,
        approveRequestLoading: false,
      };

    default: {
      return state;
    }
  }
};

export default specDocumentReducer;
