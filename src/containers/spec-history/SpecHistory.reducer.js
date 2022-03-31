import {
  GET_CHANGE_HISTORY_SUCCESS,
  GET_CHANGES_AUTHOR,
  CHANGE_OPTION_CHANGES_MANAGEMENT,
  SET_AUTHOR,
} from './SpecHistory.actions';
import { SPEC_HISTORY_TABLE } from '../../config/constants/button-variants';

const specHistoryState = {
  loading: true,
  changes: [],
  page: 0,
  total: 0,
  error: false,
  authors: [],
  option_changes_management: SPEC_HISTORY_TABLE,
  author: { id: 'allAuthors', name: 'Todos los autores' },
  params: {
    keyword: '',
  },
};

/** The spec document' reducer */
const specHistoryReducer = (state = specHistoryState, { payload, type }) => {
  switch (type) {
    case GET_CHANGE_HISTORY_SUCCESS:
      return {
        ...state,
        changes: payload.changes.list,
        total: payload.changes.total,
        page: payload.changes.page,
        loading: false,
      };
    case GET_CHANGES_AUTHOR:
      return {
        ...state,
        params: payload.params,
        authors: payload.authors,
        loading: false,
      };
    case CHANGE_OPTION_CHANGES_MANAGEMENT:
      return {
        ...state,
        option_changes_management: payload.option_changes_management,
        loading: false,
      };
    case SET_AUTHOR:
      return {
        ...state,
        author: payload.author,
      };
    default: {
      return state;
    }
  }
};

export default specHistoryReducer;
