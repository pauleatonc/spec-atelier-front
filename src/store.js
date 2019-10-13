import { combineReducers, createStore } from 'redux';
import { loginReducer, registrationReducer } from './reducers';

const rootReducer = combineReducers({
	login: loginReducer,
	registration: registrationReducer,
});

const store = createStore(rootReducer);
export default store;
