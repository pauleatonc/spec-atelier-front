import onActionCreator from 'config/store/helpers';
import { getChangeHistory } from 'services/specs.service';

export const GET_CHANGE_HISTORY_SUCCESS = 'GET_CHANGE_HISTORY_SUCCESS';

export const onGetChangeHistory = (specID) => async (dispatch, getState) => {
  try {
    const { auth } = getState();
    const { blocks = [], project = {} } =
      (await getChangeHistory({ specID, userID: auth.user?.id })) || {};

    return dispatch(
      onActionCreator(GET_CHANGE_HISTORY_SUCCESS, { blocks, project }),
    );
  } catch (error) {
    return console.log(error);
  }
};
