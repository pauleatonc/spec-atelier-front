import { combineReducers, createStore } from 'redux';
import { loginReducer } from './_reducers';

const rootReducer = combineReducers({
	login: loginReducer,
});

const store = createStore(rootReducer);
export default store;
