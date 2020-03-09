import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import {
	presenterReducer,
	loginReducer,
	recoverPasswordReducer,
	newPasswordReducer,
  projectsReducer,
  projectSpecificationReducer,
} from './reducers';

const rootReducer = combineReducers({
	presenter: presenterReducer,
	login: loginReducer,
	recoverPassword: recoverPasswordReducer,
	newPassword: newPasswordReducer,
  projects: projectsReducer,
  projectSpecification: projectSpecificationReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));
export default store;
