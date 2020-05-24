import onActionCreator, { cleanObject } from '../../config/store/helpers';
import { createNewProject } from '../../services/projects.service';

export const SET_PROJECT = 'SET_PROJECT';
export const CHANGE_VIEW = 'CHANGE_VIEW';
export const CREATE_PROJECT = 'CREATE_PROJECT';
export const CREATE_PROJECT_ERROR = 'CREATE_PROJECT_ERROR';
export const TEMP_NEW_PROJECT = 'TEMP_NEW_PROJECT';
export const GET_DEFAULT_DATA = 'CREATE_DEFAULT_DATA';
export const GET_DEFAULT_DATA_ERROR = 'CREATE_DEFAULT_DATA_ERROR';
export const CLEAN_STORE = 'CLEAN_STORE';

export const setNewProjectData = project => dispatch => dispatch(onActionCreator(SET_PROJECT, { project }));

export const changeView = (view, project) => dispatch => dispatch(onActionCreator(CHANGE_VIEW, { view, project }));

export const cleanStore = () => dispatch => dispatch(onActionCreator(CLEAN_STORE));

export const createProject = newProject => async (dispatch, getState) => {
  try {
    const { user } = getState().auth;
    const response = await createNewProject(user.id, { project: cleanObject(newProject) });
    if (response?.status >= 400) return dispatch(onActionCreator(CREATE_PROJECT_ERROR, { loading: false, error }));
    return dispatch(onActionCreator(CREATE_PROJECT, { project: response.project, loading: false }));
  } catch (error) {
    return dispatch(onActionCreator(CREATE_PROJECT_ERROR, { loading: false, error }));
  }
};
