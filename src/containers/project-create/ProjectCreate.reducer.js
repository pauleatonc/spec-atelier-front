import {
  SET_PROJECT,
  CHANGE_VIEW,
  TEMP_NEW_PROJECT,
  CREATE_PROJECT,
  CREATE_PROJECT_ERROR,
} from './ProjectCreate.actions';


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
    delivery_date: new Date(),
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
        message: 'Se ha creado el Proyecto con éxito'
      };
    case CREATE_PROJECT_ERROR:
      return {
        ...state,
        loading: false,
        error: payload.error,
        message: 'Error al crear el proyecto',
      };
    default: {
      return state;
    }
  }
};

export default newProjectReducer;
