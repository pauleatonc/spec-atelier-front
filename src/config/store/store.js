import { createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { APP_ENV } from '../constants/environment';
import rootReducer from './reducers';
import { cancellableService } from '../../modules/cancellation';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['auth'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const middleware = APP_ENV === 'production'
    ? applyMiddleware(thunk.withExtraArgument({ cancellableService }))
    : composeWithDevTools(applyMiddleware(thunk.withExtraArgument({ cancellableService })));
   
/**
 * Gets a new instance of a redux' store.
 */
const store = createStore(persistedReducer, middleware);

/**
 * Persist reducer "auth" to keep de user data
 */
const persistor = persistStore(store);

export { store, persistor };
