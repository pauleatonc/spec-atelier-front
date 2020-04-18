import {
  GET_SECTIONS,
  GET_SECTIONS_ERROR,
  GET_SECTIONS_SUCCESS,
  HIDE_SECTIONS_LIST_SUCCESS,
  SHOW_SECTIONS_LIST_SUCCESS,
} from './SpecSectionsList.actions';

const specSectionsListState = {
  collection: [],
  loading: false,
  show: false,
};

/**
 * The sections' list reducer. 
 */
const specSectionsListReducer = (state = specSectionsListState, { payload, type }) => {
  switch (type) {
    case GET_SECTIONS: {
      return { ...state, loading: true };
    }
    case GET_SECTIONS_ERROR: {
      return { ...state, loading: false };
    }
    case GET_SECTIONS_SUCCESS: {
      return { ...state, loading: false, collection: payload.sections };
    }
    case HIDE_SECTIONS_LIST_SUCCESS: {
      return { ...state, show: false };
    }
    case SHOW_SECTIONS_LIST_SUCCESS: {
      return { ...state, show: true };
    }
    default: {
      return state;
    }
  }
};

export default specSectionsListReducer;