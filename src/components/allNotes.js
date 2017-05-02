import React from 'react';
import {
  Text,
  View,
  StatusBar,
  Alert,
  ListView,
} from 'react-native';
import { connect } from 'react-redux';
import { NavigationActions } from 'react-navigation';

import NewNote from './newNote';
import SingleNote from './singleNote';
import Toolbar from '../lib/Toolbar';
import NotesViewCard from '../lib/NotesViewCard';
import AddNoteButton from '../lib/AddNoteButton';
import { deleteNote } from '../actions';
import { styles } from './styles';
import { getColor } from '../lib/helpers';
import { Typo } from '../lib/Typography';

const AllNotes = (props) => {
  function addNewNote() {
    props.navigator.push('NewNote');
  }

  function goToNote(noteId, title, description) {
    props.navigator.push('SingleNote', { noteId, title, description });
  }

  function deleteNote(noteId) {
    props.deleteNote(noteId);
  }

  function longPressNote(noteId) {
    Alert.alert(
      'Delete Note',
      'Do you want to delete this note?',
      [
        { text: 'YES', onPress: () => deleteNote(noteId) },
        { text: 'No' },
      ],
    );
  }

  function renderList() {
    // if (props.notes === undefined) return;
    if (props.notes.length <= 0) {
      return (
        <View style={styles.emptyListContainer}>
          <Text style={styles.emptyList}>Add some notes...</Text>
        </View>
      );
    }
    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    const dataSource = ds.cloneWithRows(props.notes) || [];

    return (
      <ListView
        dataSource={dataSource}
        renderRow={(note, sectionID, rowID) => (
          <NotesViewCard
            title={note.title}
            description={note.description}
            id={note.id}
            keys={rowID}
            onPressBtn={goToNote}
            onLongPressBtn={longPressNote}
          />
            )}
      />
    );
  }

  return (
    <View style={styles.allNotesContainer}>
      <StatusBar
        backgroundColor={getColor('paperBlue700')}
        barStyle="light-content"
        animated
      />
      { renderList() }

      <AddNoteButton onBtnPress={addNewNote} />
    </View>
  );
};

AllNotes.navigationOptions = {
  header: <Toolbar title="Asprov Notes" color={getColor('paperBlue')} />,
};

const mapStateToProps = state => ({
  notes: state.notes,
});

const mapDispatchToProps = dispatch => ({
  navigator: {
    push: (routeName, params) => { dispatch(NavigationActions.navigate({ routeName, params })); },
  },
  deleteNote: note => dispatch(deleteNote(note)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AllNotes);
