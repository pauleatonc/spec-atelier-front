import { HIDE_SPEC_IMAGES_MODAL_SUCCESS, SHOW_SPEC_IMAGES_MODAL_SUCCESS } from './SpecImagesModal.actions';

const specImagesModalState = {
  selectedBlockID: '',
  show: false,
};

/**
 * The spec images modal's reducer.
 */
const specImagesModalReducer = (state = specImagesModalState, { payload, type }) => {
  switch (type) {
    // eslint-disable-next-line no-lone-blocks
    case HIDE_SPEC_IMAGES_MODAL_SUCCESS: {
      return specImagesModalState;
    };
    case SHOW_SPEC_IMAGES_MODAL_SUCCESS: {
      return { ...state, selectedBlockID: payload.blockID, show: true };
    }
    default: {
      return state;
    }
  }
};

export default specImagesModalReducer;
