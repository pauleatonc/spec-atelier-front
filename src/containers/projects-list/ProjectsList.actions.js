import onActionCreator from '../../config/store/helpers';
import { getProjects, acceptNotification, rejectNotification } from '../../services/projects.service';
import { onShowAlertSuccess } from '../alert/Alert.actions';

export const GET_PROJECTS = 'GET_ALL_PROJECTS';
export const GET_MORE_PROJECTS = 'GET_MORE_PROJECTS';
export const GET_PROJECTS_ERROR = 'GET_PROJECTS_ERROR';
export const ADD_PROJECT_TO_LIST = 'ADD_PROJECT_TO_LIST';
export const DELETE_PROJECT = 'DELETE_PROJECT';
export const DELETE_PROJECT_ERROR = 'DELETE_PROJECT_ERROR';
export const CLEAR_PROJECTS = 'CLEAR_PROJECTS';
export const ACCEPT_NOTIFICATION = 'ACCEPT_NOTIFICATION';
export const ACCEPT_NOTIFICATION_ERROR = 'ACCEPT_NOTIFICATION_ERROR';
export const REJECT_NOTIFICATION = 'REJECT_NOTIFICATION';
export const REJECT_NOTIFICATION_ERROR = 'REJECT_NOTIFICATION_ERROR';

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

export const deleteProject = ({ id }) => async (dispatch) => {
  try {
    dispatch(onActionCreator(DELETE_PROJECT, { projectId: id }));
  } catch (error) {
    dispatch(onShowAlertSuccess({ message: "Error al eliminar el proyecto" }))
    dispatch(onActionCreator(DELETE_PROJECT_ERROR, { loading: false, error: true }));
  }
};

export const addProjectToList = project => dispatch => dispatch(onActionCreator(ADD_PROJECT_TO_LIST, { project }));

export const clearProjects = () => dispatch => dispatch(onActionCreator(CLEAR_PROJECTS));

export const acceptNotificationsAC = (body) => async (dispatch) => {
  acceptNotification(body).then((response) => {
    const {resp, codeStatus} = response;
    if(codeStatus !== 401 && response.codeStatus !== 404 && response.codeStatus !== 500 && response.codeStatus !== 200){
			dispatch(
				onShowAlertSuccess({ message: 'La invitación no pudo ser modificada' }),
			);
		}
    if(codeStatus === 401){
			dispatch(
				onShowAlertSuccess({ message: 'Sesión no encontrada' }),
			);
		}
		if(codeStatus === 404){
			dispatch(
				onShowAlertSuccess({ message: 'Función no encontrada' }),
			);
		}
    if(codeStatus === 500){
			dispatch(
				onShowAlertSuccess({ message: 'Error interno' }),
			);
		}
		if(codeStatus === 200){
      resp.then((data) => {
        dispatch(
          onShowAlertSuccess({ message: data.message }),
        );
      })
      dispatch(onActionCreator(ACCEPT_NOTIFICATION, response));
		}
  }, (error) => {
    dispatch(
      onShowAlertSuccess({ message: 'Error al aceptar proyecto.' }),
    );
    dispatch(onActionCreator(ACCEPT_NOTIFICATION_ERROR, {
      error
    }))
  })
}

export const rejectNotificationsAC = (body) => async (dispatch) => {
  rejectNotification(body).then((response) => {
    const {resp, codeStatus} = response;
    if (codeStatus === 304) {
			dispatch(
				onShowAlertSuccess({ message: 'La invitación no pudo ser modificada' }),
			);
		}
    if(codeStatus === 401){
			dispatch(
				onShowAlertSuccess({ message: 'Sesión no encontrada' }),
			);
		}
		if(codeStatus === 404){
			dispatch(
				onShowAlertSuccess({ message: 'Función no encontrada' }),
			);
		}
    if(codeStatus === 500){
			dispatch(
				onShowAlertSuccess({ message: 'Error interno' }),
			);
		}
		if(codeStatus === 200){
      resp.then((data) => {
        dispatch(
          onShowAlertSuccess({ message: data.message }),
        );
      })
      dispatch(onActionCreator(REJECT_NOTIFICATION, response));
		}
  }, (error) => {
    dispatch(
      onShowAlertSuccess({ message: 'Error al rechazar proyecto.' }),
    );
    dispatch(onActionCreator(REJECT_NOTIFICATION_ERROR, {
      error
    }))
  })
}
