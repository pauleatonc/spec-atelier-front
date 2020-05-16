import {
  GET_DEFAULT_DATA,
} from './app.actions';


const initialProject = {
  cities: [],
  project_types: [], 
  room_types: [],
  work_types: [],
};

/**
 * App data reducer.
 */
const appReducer = (state = initialProject, { payload, type }) => {
  switch (type) {
    case GET_DEFAULT_DATA:
      return {
        cities: payload.cities,
        project_types: payload.project_types,
        room_types: payload.room_types,
        work_types: payload.work_types,
      };
    default: {
      return state;
    }
  }
};

export default appReducer;
