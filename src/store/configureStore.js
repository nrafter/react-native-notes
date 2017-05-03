import { createStore, applyMiddleware } from 'redux';
import { persistStore, autoRehydrate } from 'redux-persist';
import { createLogger } from 'redux-logger';
import { AsyncStorage } from 'react-native';

import reducers from '../reducers';

import storage from './storage';

const isDebuggingInChrome = __DEV__ && !!window.navigator.userAgent;

const logger = createLogger({
  predicate: (getState, action) => isDebuggingInChrome,
  collapsed: true,
  duration: true,
});

const createNotesStore = applyMiddleware(logger)(createStore);

function configureStore(onComplete) {
  // TODO(frantic): reconsider usage of redux-persist, maybe add cache breaker
  const store = autoRehydrate()(createNotesStore)(reducers);
  persistStore(store, { storage: AsyncStorage }, onComplete);
  if (isDebuggingInChrome) {
    window.store = store;
  }
  return store;
}

export default configureStore;
