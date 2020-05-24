import onActionCreator from '../../config/store/helpers';
import { getProjectsByUserID, getOrderedProjects } from '../../services/projects.service';

export const GET_ALL_PROJECTS = 'GET_ALL_PROJECTS';
export const GET_PROJECTS_ERROR = 'GET_PROJECTS_ERROR';
export const GET_ORDERED_PROJECTS = 'GET_ORDERED_PROJECTS';

export const getMyProjects = ({ id }) => async (dispatch) => {
  try {
    const { projects } = await getProjectsByUserID(id);
    dispatch(onActionCreator(GET_ALL_PROJECTS, { projects, loading: false }));
  } catch (error) {
    dispatch(onActionCreator(GET_PROJECTS_ERROR, { loading: false, error: true }));
  }
};

export const getOrderedProjectsAction = params => async (dispatch, getState) => {
  try {
    const { user } = getState().auth;
    const { projects } = await getOrderedProjects(user.id, params);
    dispatch(onActionCreator(GET_ORDERED_PROJECTS, { projects, loading: false }));
  } catch (error) {
    dispatch(onActionCreator(GET_PROJECTS_ERROR, { loading: false, error: true }));
  }
};
