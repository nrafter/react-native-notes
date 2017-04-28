import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { Provider } from 'react-redux';

import { NativeRouter, Route, Link } from 'react-router-native';

import { createStore, applyMiddleware } from 'redux';

import reducers from './app/reducers';

import configureStore from './app/store/configureStore';

import AllNotes from './app/components/allNotes';

// const store = configureStore(() => this.setState({isLoading: false}));
const store = configureStore();

const Home = () => (
  <Text style={styles.header}>
    Home
  </Text>
);

const About = () => (
  <Text style={styles.header}>
    About
  </Text>
);

const Topic = ({ match }) => (
  <Text style={styles.topic}>
    {match.params.topicId}
  </Text>
);

const Topics = ({ match }) => (
  <View>
    <Text style={styles.header}>Topics</Text>
    <View>
      <Link
        to={`${match.url}/rendering`}
        style={styles.subNavItem}
        underlayColor="#f0f4f7"
      >
        <Text>Rendering with React</Text>
      </Link>
      <Link
        to={`${match.url}/components`}
        style={styles.subNavItem}
        underlayColor="#f0f4f7"
      >
        <Text>Components</Text>
      </Link>
      <Link
        to={`${match.url}/props-v-state`}
        style={styles.subNavItem}
        underlayColor="#f0f4f7"
      >
        <Text>Props v. State</Text>
      </Link>
    </View>

    <Route path={`${match.url}/:topicId`} component={Topic} />
    <Route
      exact path={match.url} render={() => (
        <Text style={styles.topic}>Please select a topic.</Text>
    )}
    />
  </View>
);

const Notes = () => (
  <Provider store={store}>
    <NativeRouter>
      <View style={styles.container}>
        <View style={styles.nav}>
          <Link
            to="/"
            underlayColor="#f0f4f7"
            style={styles.navItem}
          >
            <Text>Home</Text>
          </Link>
          <Link
            to="/about"
            underlayColor="#f0f4f7"
            style={styles.navItem}
          >
            <Text>About</Text>
          </Link>
          <Link
            to="/topics"
            underlayColor="#f0f4f7"
            style={styles.navItem}
          >
            <Text>Topics</Text>
          </Link>
        </View>

        <Route exact path="/" component={AllNotes} />
        <Route path="/about" component={About} />
        <Route path="/topics" component={Topics} />
      </View>
    </NativeRouter>
  </Provider>
);

const styles = StyleSheet.create({
  container: {
    marginTop: 25,
    padding: 10,
  },
  header: {
    fontSize: 20,
  },
  nav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  navItem: {
    flex: 1,
    alignItems: 'center',
    padding: 10,
  },
  subNavItem: {
    padding: 5,
  },
  topic: {
    textAlign: 'center',
    fontSize: 15,
  },
});

AppRegistry.registerComponent('Notes', () => Notes);
