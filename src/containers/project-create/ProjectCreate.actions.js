import { batch } from 'react-redux';
import onActionCreator from '../../config/store/helpers';
import { createNewProject, getProject as getServiceProject } from '../../services/projects.service';
import { onShowAlertSuccess } from '../alert/Alert.actions';
import { addProjectToList } from '../projects-list/ProjectsList.actions';

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
    const response = await createNewProject({ userId: user.id, project: newProject });
    if (response?.status >= 400) return dispatch(onActionCreator(CREATE_PROJECT_ERROR, { loading: false }));
    const message = `Creaste el proyecto ${response?.project?.name}`;
    return batch(() => {
      dispatch(onShowAlertSuccess({ message }));
      dispatch(addProjectToList(response.project));
      dispatch(onActionCreator(CREATE_PROJECT, { project: response.project, loading: false }));
    });
  } catch (error) {
    const message = 'Error al crear el proyecto';
    dispatch(onShowAlertSuccess({ message }));
    return dispatch(onActionCreator(CREATE_PROJECT_ERROR, { loading: false, error }));
  }
};

export const GET_PROJECT_LOADING = 'GET_PROJECT_LOADING';
export const GET_PROJECT_SUCESS = 'GET_PROJECT_SUCESS';
export const GET_PROJECT_ERROR = 'GET_PROJECT_ERROR';

export const getProject = ({ id }) => async (dispatch, getState) => {
  try {
    dispatch(onActionCreator(GET_PROJECT_LOADING, { loading: true }));
    const { user } = getState().auth;
    const { 
      project_types = [],
      work_types = [],
    } = getState().app;
    console.log('asdsadasd', project_types);
    const { project } = await getServiceProject({ userId: user.id, id });
    const values = {
      ...project,
      project_type: project_types.find(pt => pt.value === project.project_type) || {},
      work_type: work_types.find(wt => wt.value === project.work_type) || {},
    }
    dispatch(onActionCreator(GET_PROJECT_SUCESS, { project: values }));
  } catch (error) {
    const message = 'Proyecto no encontrado';
    dispatch(onShowAlertSuccess({ message }));
    dispatch(onActionCreator(GET_PROJECT_ERROR, { loading: false, error }));
  }
};
