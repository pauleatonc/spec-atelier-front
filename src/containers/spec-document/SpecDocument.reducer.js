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
	UPDATE_PRODUCT_ERROR,
} from './SpecDocument.actions';

const specDocumentState = {
	blocks: [],
	loading: false,
	project: {},
};

/**
 * The spec document' reducer.
 */
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
		case UPDATE_PRODUCT:
		case UPDATE_PRODUCT_SUCCESS:
		case UPDATE_PRODUCT_ERROR: {
			return { ...state };
		}
		default: {
			return state;
		}
	}
};

export default specDocumentReducer;
