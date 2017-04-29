import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import { Provider } from 'react-redux';

import { syncHistoryWithStore, routerReducer } from 'react-router-redux';

// import {  Redirect } from 'react-router';

import {
  nativeHistory,
  NativeRouter,
  Route,
  Link,
  AndroidBackButton,
  withRouter,
  Router,
} from 'react-router-native';

import { createStore, applyMiddleware } from 'redux';

import reducers from './app/reducers';

import configureStore from './app/store/configureStore';

// import AllNotes from './app/components/allNotes';
import newNote from './app/components/newNote';

import Toolbar from './app/lib/Toolbar';
import AddNoteButton from './app/lib/AddNoteButton';
import { getColor } from './app/lib/helpers';
import { default as VectorIcon } from 'react-native-vector-icons/MaterialIcons';

// const store = configureStore(() => this.setState({isLoading: false}));
const store = configureStore();

const AllNotes = withRouter((props) => {
  function addNewNote() {
    this.props.navigator.push({ component: NewNote, type: 'addingNote' });
  }

  function goToNote(noteId, title, description) {
    this.props.navigator.push({ component: SingleNote, type: 'editingNote', passProps: { noteId, title, description } });
  }

  function longPressNote(noteId) {
    Alert.alert(
      'Delete Note',
      'Do you want to delete this note?',
      [
        { text: 'YES', onPress: () => this.deleteNote(noteId) },
        { text: 'No' },
      ],
    );
  }

  function deleteNote(noteId) {
    this.props.deleteNote(noteId);
  }

  function renderList() {
    if (this.props.notes.length <= 0) {
      return (
        <View style={styles.emptyListContainer}>
          <Text style={styles.emptyList}>Add some notes...</Text>
        </View>
      );
    }
    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    const dataSource = ds.cloneWithRows(this.props.notes) || [];

    return (
      <ListView
        dataSource={dataSource}
        renderRow={(note, sectionID, rowID) => (
          <NotesViewCard
            title={note.title}
            description={note.description}
            id={note.id}
            keys={rowID}
            onPressBtn={this.goToNote.bind(this)}
            onLongPressBtn={this.longPressNote.bind(this)}
          />
        )}
      />
    );
  }

  return (
    <View style={{ flex: 1 }}>
      <StatusBar
        backgroundColor={getColor('paperBlue700')}
        barStyle="light-content"
        animated
      />
      <Toolbar title="Asprov Notes" color={getColor('paperBlue')} />
      <View
        style={AllNotesStyles.container}
      >
        <TouchableOpacity
          onPress={() => {
            props.router.push('/topics');
          }}
        >
          <VectorIcon
            name={'add-circle'}
            size={56}
            color={getColor('paperBlue')}
            allowFontScaling
          />
        </TouchableOpacity>
      </View>
    </View>
  );
});

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
    <Router history={nativeHistory}>
      <AndroidBackButton>
        <View>
          <Route exact path="/" component={AllNotes} />
          <Route path="/about" component={About} />
          <Route path="/topics" component={Topics} />
        </View>
      </AndroidBackButton>
    </Router>
  </Provider>
);

const AllNotesStyles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: -600,
    left: 340,
    backgroundColor: 'white',
    borderRadius: 50,
  },
});

const styles = StyleSheet.create({
  // container: {
  //   marginTop: 25,
  //   padding: 10,
  // },
  // header: {
  //   fontSize: 20,
  // },
  // nav: {
  //   flexDirection: 'row',
  //   justifyContent: 'space-around',
  // },
  // navItem: {
  //   flex: 1,
  //   alignItems: 'center',
  //   padding: 10,
  // },
  // subNavItem: {
  //   padding: 5,
  // },
  // topic: {
  //   textAlign: 'center',
  //   fontSize: 15,
  // },
  allNotesContainer: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  // emptyListContainer: {
  //   flex: 1,
  //   alignItems: 'center',
  //   justifyContent: 'center',
  //   marginBottom: 56,
  // },
  // emptyList: {
  //   fontFamily: 'Lato-Bold',
  //   fontSize: 16,
  // },

  // addNotesContainer: {
  //   flex: 1,
  //   backgroundColor: '#ffffff',
  // },
  // textInputContainer: {
  //   flex: 1,
  // },
  // inputTitleStyle: {
  //   height: 60,
  //   paddingTop: 5,
  //   paddingLeft: 20,
  //   paddingRight: 20,
  //   paddingBottom: 0,
  //   fontFamily: 'Lato-Regular',
  //   fontSize: 20,
  // },
  // inputDescriptionStyle: {
  //   flex: 1,
  //   paddingLeft: 20,
  //   paddingRight: 20,
  //   marginBottom: 60,
  //   fontFamily: 'Lato-Regular',
  //   fontSize: 16,
  //   textAlignVertical: 'top',
  // },
});

AppRegistry.registerComponent('Notes', () => Notes);
