import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { APP_ENV } from '../constants/environment';
import rootReducer from './reducers';

/**
 * Gets a new instance of a redux' store.
 */
const getStore = () => {
  const middleware = APP_ENV === 'production'
    ? applyMiddleware(thunk)
    : composeWithDevTools(applyMiddleware(thunk));
  
  return createStore(rootReducer, {}, middleware);
};

export default getStore();
