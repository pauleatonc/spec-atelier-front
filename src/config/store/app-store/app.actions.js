import { cleanObjectsAndArrays } from 'modules/services';
import { getDefaultData } from 'services/app.service';
import onActionCreator from '../helpers';

export const GET_DEFAULT_DATA = 'CREATE_DEFAULT_DATA';
export const GET_DEFAULT_DATA_ERROR = 'CREATE_DEFAULT_DATA_ERROR';

export const getAppData = (filters) => async (dispatch) => {
  try {
    const {
      cities,
      project_types,
      room_types,
      work_types,
    } = await getDefaultData(cleanObjectsAndArrays(filters));
    return dispatch(
      onActionCreator(GET_DEFAULT_DATA, {
        cities,
        project_types,
        room_types,
        work_types,
        loaded: true,
      }),
    );
  } catch (error) {
    return dispatch(
      onActionCreator(GET_DEFAULT_DATA_ERROR, {
        loading: false,
        error: true,
        loaded: false,
      }),
    );
  }
};
