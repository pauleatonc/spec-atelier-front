import { combineReducers, createStore } from 'redux';
import {
	loginReducer,
	registrationReducer,
	recoverPasswordReducer,
	newPasswordReducer,
} from './reducers';

const rootReducer = combineReducers({
	login: loginReducer,
	registration: registrationReducer,
	recoverPassword: recoverPasswordReducer,
	newPassword: newPasswordReducer,
});

const store = createStore(rootReducer);
export default store;
