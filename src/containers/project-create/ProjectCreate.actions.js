import onActionCreator, { cleanObject } from '../../config/store/helpers';
import { createNewProject } from '../../services/projects.service';

export const SET_PROJECT = 'SET_PROJECT';
export const CHANGE_VIEW = 'CHANGE_VIEW';
export const CREATE_NEW_PROJECT = 'CREATE_NEW_PROJECT';
export const GET_DEFAULT_DATA = 'CREATE_DEFAULT_DATA';
export const GET_DEFAULT_DATA_ERROR = 'CREATE_DEFAULT_DATA_ERROR';

export const setNewProjectData = project => dispatch => dispatch(onActionCreator(SET_PROJECT, { project }));

export const changeView = (view, project) => dispatch => dispatch(onActionCreator(CHANGE_VIEW, { view, project }));

export const createProject = newProject => async (dispatch, getState) => {
  try {
    const { user } = getState().auth;
    console.log(user, newProject);
    const { project, response } = await createNewProject(user.id, { project: cleanObject(newProject) });
    return dispatch(onActionCreator(CREATE_NEW_PROJECT, { project, loading: false }));
    console.log('eeror', response);
  } catch (error) {
    console.log('eeror', error);
    return dispatch(onActionCreator(CREATE_NEW_PROJECT, { loading: false, error: true }));
  }
};
