import onActionCreator from '../../config/store/helpers';
import { getProjects, deleteProject as deleteProjectService  } from '../../services/projects.service';
import { onShowAlertSuccess } from '../alert/Alert.actions';

export const GET_PROJECTS = 'GET_ALL_PROJECTS';
export const GET_MORE_PROJECTS = 'GET_MORE_PROJECTS';
export const GET_PROJECTS_ERROR = 'GET_PROJECTS_ERROR';
export const ADD_PROJECT_TO_LIST = 'ADD_PROJECT_TO_LIST';
export const DELETE_PROJECT = 'DELETE_PROJECT';
export const DELETE_PROJECT_ERROR = 'DELETE_PROJECT_ERROR';
export const CLEAR_PROJECTS = 'CLEAR_PROJECTS';

export const getMyProjects = params => async (dispatch, getState) => {
  try {
    const { user } = getState().auth;
    const { projects } = await getProjects({ userId: user.id, params });
    dispatch(onActionCreator(GET_PROJECTS, { projects, loading: false, params }));
  } catch (error) {
    dispatch(onActionCreator(GET_PROJECTS_ERROR, { loading: false, error: true, params }));
  }
};

export const getMoreProjects = params => async (dispatch, getState) => {
  try {
    const { user } = getState().auth;
    const { projects } = await getProjects({ userId: user.id, params });
    dispatch(onActionCreator(GET_MORE_PROJECTS, { projects, loading: false, params }));
  } catch (error) {
    dispatch(onActionCreator(GET_PROJECTS_ERROR, { loading: false, error: true, params }));
  }
};

export const deleteProject = ({ id }) => async (dispatch, getState) => {
  try {
    const { user } = getState().auth;
    deleteProjectService({ userId: user.id, projectId: id })
    dispatch(onActionCreator(DELETE_PROJECT, { projectId: id }));
  } catch (error) {
    dispatch(onShowAlertSuccess({ message: "Error al eliminar el proyecto"}))
    dispatch(onActionCreator(DELETE_PROJECT_ERROR, { loading: false, error: true }));
  }
};

export const addProjectToList = project => dispatch => dispatch(onActionCreator(ADD_PROJECT_TO_LIST,  { project }));

export const clearProjects = () => dispatch => dispatch(onActionCreator(CLEAR_PROJECTS));
