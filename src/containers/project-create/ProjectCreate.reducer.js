import {
  SET_PROJECT,
  CHANGE_VIEW,
  CREATE_NEW_PROJECT,
} from './ProjectCreate.actions';


const initialProject = {
  newProject: { 
    name: 'dsfsfsf',
    city: {
      id: 'asdadsadasdadasd',
      name: '',
    },
    project_type: {
      id: 1,
      name: '',
    },
    work_type: {
      id: 1,
      name: '',
    },
    visibility: 0,
    description: 'sdsddas',
    size: 12,
    delivery_date: new Date().toLocaleDateString(),
  },
  view: 'details',
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
    case CREATE_NEW_PROJECT:
      return {
        ...state,
        newProjec: payload.project,
      };
    default: {
      return state;
    }
  }
};

export default newProjectReducer;
