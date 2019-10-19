import { combineReducers, createStore } from 'redux';
import {
	loginReducer,
	registrationReducer,
	recoverPasswordReducer,
} from './reducers';

const rootReducer = combineReducers({
	login: loginReducer,
	registration: registrationReducer,
	recoverPassword: recoverPasswordReducer,
});

const store = createStore(rootReducer);
export default store;
