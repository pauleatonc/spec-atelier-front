import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import {
	presenterReducer,
	loginReducer,
	registrationReducer,
	recoverPasswordReducer,
	newPasswordReducer,
} from './reducers';

const rootReducer = combineReducers({
	presenter: presenterReducer,
	login: loginReducer,
	registration: registrationReducer,
	recoverPassword: recoverPasswordReducer,
	newPassword: newPasswordReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));
export default store;
