import onActionCreator from '../../config/store/helpers';
import { createNewProject } from '../../services/projects.service';

export const SET_PROJECT = 'SET_PROJECT';
export const CHANGE_VIEW = 'CHANGE_VIEW';
export const CREATE_NEW_PROJECT = 'SAVE_NEW_PROJECT';

export const setNewProjectData = project => dispatch => dispatch(onActionCreator(SET_PROJECT, { project }));

export const changeView = (view, project) => dispatch => dispatch(onActionCreator(CHANGE_VIEW, { view, project }));

export const createProject = newProject => async dispatch => {
  try {
    const { projects } = await createNewProject(newProject);
    dispatch(onActionCreator(CREATE_NEW_PROJECT, { projects, loading: false }));
  } catch (error) {
    dispatch(onActionCreator(CREATE_NEW_PROJECT, { loading: false, error: true }));
  }
};
