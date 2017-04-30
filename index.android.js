import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  StatusBar,
} from 'react-native';
import { Provider } from 'react-redux';

import { default as VectorIcon } from 'react-native-vector-icons/MaterialIcons';

import configureStore from './app/store/configureStore';

const store = configureStore();

const About = () => (
  <Text>
    About
  </Text>
);

const Home = () => (
  <Text>
    Home
  </Text>
);

const Notes = () => (
  <Text>
    Text
  </Text>
);

AppRegistry.registerComponent('Notes', () => Notes);
