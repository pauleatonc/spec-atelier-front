import moment from 'moment';
import {
  SET_PROJECT,
  CHANGE_VIEW,
  TEMP_NEW_PROJECT,
  CREATE_PROJECT,
  CREATE_PROJECT_ERROR,
  CLEAN_STORE,
  GET_PROJECT_LOADING,
  GET_PROJECT_SUCESS,
  GET_PROJECT_ERROR,
} from './ProjectCreate.actions';


const delivery_date = new Date();
delivery_date.setFullYear(delivery_date.getFullYear() + 1);
const setDate = date => moment(date).format('MM/DD/YYYY')

const initialProject = {
  newProject: {
    name: '',
    city: {
      id: '',
      name: '',
    },
    project_type: {
      id: 0,
      name: '',
    },
    work_type: {
      id: 0,
      name: '',
    },
    visibility: 0,
    description: '',
    size: '',
    delivery_date,
  },
  loading: false,
  view: 'data',
  error: undefined,
  created: false,
  message: undefined,
};

/**
 * New project reducer.
 */
const newProjectReducer = (state = initialProject, { payload, type }) => {
  switch (type) {
    case SET_PROJECT:
      return {
        ...state,
        newProject: payload.project,
      };
    case CHANGE_VIEW:
      return {
        ...state,
        view: payload.view,
        newProject: payload.project,
      };
    case TEMP_NEW_PROJECT:
      return {
        ...state,
        newProjec: payload.project,
        loading: false,
      };
    case CREATE_PROJECT:
      return {
        ...state,
        created: true,
        loading: false,
      };
    case CREATE_PROJECT_ERROR:
      return {
        ...state,
        loading: false,
        error: payload.error,
      };
    case CLEAN_STORE:
      return { ...initialProject };
    case GET_PROJECT_LOADING:
      return { ...state, loading: true };
    case GET_PROJECT_SUCESS:
      return {
        ...state,
        loading: false,
        newProject: {
          ...payload.project,
          delivery_date: setDate(payload.project?.delivery_date),
        }
      };
    case GET_PROJECT_ERROR:
      return { ...state, loading: false, newProject: {}, error: payload.error }
    default: {
      return state;
    }
  }
};

export default newProjectReducer;
