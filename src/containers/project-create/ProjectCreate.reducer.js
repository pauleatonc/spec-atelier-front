import {
  SET_PROJECT,
  CHANGE_VIEW,
  CREATE_NEW_PROJECT,
} from './ProjectCreate.actions';


const initialProject = {
  newProject: { name: '' },
  view: 'data',
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
