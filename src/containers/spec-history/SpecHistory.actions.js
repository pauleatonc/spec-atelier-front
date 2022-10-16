import onActionCreator from '../../config/store/helpers';
import {
  getChangeHistory,
  getChangesAuthor,
} from '../../services/specs.service';

export const GET_CHANGE_HISTORY_SUCCESS = 'GET_CHANGE_HISTORY_SUCCESS';
export const GET_CHANGES_AUTHOR = 'GET_CHANGES_AUTHOR';
export const CHANGE_OPTION_CHANGES_MANAGEMENT =
  'CHANGE_OPTION_CHANGES_MANAGEMENT';
export const SET_AUTHOR = 'SET_AUTHOR';

export const onGetChangeHistory = (specID, params) => (dispatch, getState) => {
  const { auth } = getState();
  getChangeHistory({ specID, params, userID: auth.user?.id })
    .then((response) => {
      dispatch(
        onActionCreator(GET_CHANGE_HISTORY_SUCCESS, {
          changes: response.changes,
          params,
        }),
      );
    })
    .catch((error) => console.error(error));
};

export const onGetChangesAuthor = (specID, params) => (dispatch, getState) => {
  const { auth } = getState();
  getChangesAuthor({ specID, params, userID: auth.user?.id })
    .then((response) => {
      dispatch(
        onActionCreator(GET_CHANGES_AUTHOR, {
          authors: response.authors,
          params,
        }),
      );
    })
    .catch((error) => console.error(error));
};

export const changeOptionHistory = (option_changes_management) => (
  dispatch,
) => {
  dispatch(
    onActionCreator(CHANGE_OPTION_CHANGES_MANAGEMENT, {
      option_changes_management,
    }),
  );
};

export const onSetAuthor = (author) => (dispatch) => {
  dispatch(onActionCreator(SET_AUTHOR, { author }));
};
