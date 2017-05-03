import React from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';

import AppWithNavigationState from './src/navigators/AppNavigator';

import configureStore from './src/store/configureStore';

const store = configureStore(() => { console.log('persisted'); });

const Notes = () => (
  <Provider store={store}>
    <AppWithNavigationState />
  </Provider>
);

AppRegistry.registerComponent('Notes', () => Notes);

export default Notes;
