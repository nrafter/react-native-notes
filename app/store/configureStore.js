import { applyMiddleware, createStore } from 'redux';
import { createLogger } from 'redux-logger';
import { persistStore, autoRehydrate } from 'redux-persist';
import { AsyncStorage } from 'react-native';
import reducers from '../reducers';

const isDebuggingInChrome = __DEV__ && !!window.navigator.userAgent;

const logger = createLogger({
  predicate: (getState, action) => isDebuggingInChrome,
  collapsed: true,
  duration: true,
});

const createNotesStore = applyMiddleware(logger)(createStore);

function configureStore() {
  // TODO(frantic): reconsider usage of redux-persist, maybe add cache breaker
  const store = autoRehydrate()(createNotesStore)(reducers);
  persistStore(store, { storage: AsyncStorage });
  if (isDebuggingInChrome) {
    window.store = store;
  }
  return store;
}

export default configureStore;
