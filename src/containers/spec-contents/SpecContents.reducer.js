import { SHOW_SPEC_PRODUCTS_SUCCESS } from 'containers/spec-products/SpecProducts.actions';
import {
  HIDE_SPEC_CONTENTS_SUCCESS,
  SHOW_SPEC_CONTENTS_SUCCESS,
} from './SpecContents.actions';

const specContentsState = {
  show: false,
};

/** The spec contents' reducer */
const specContentsReducer = (state = specContentsState, { type }) => {
  switch (type) {
    case HIDE_SPEC_CONTENTS_SUCCESS:
    case SHOW_SPEC_PRODUCTS_SUCCESS: {
      return { ...state, show: false };
    }
    case SHOW_SPEC_CONTENTS_SUCCESS: {
      return { ...state, show: true };
    }
    default: {
      return state;
    }
  }
};

export default specContentsReducer;
