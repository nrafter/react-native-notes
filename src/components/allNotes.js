import React, { PropTypes } from 'react';
import {
  Text,
  View,
  StatusBar,
  Alert,
  ListView,
} from 'react-native';
import { connect } from 'react-redux';
import { NavigationActions } from 'react-navigation';

import TitleText from '../lib/TitleText';
import NotesViewCard from '../lib/NotesViewCard';
import DownloadNotesButton from '../lib/DownloadNotesButton';
import AddNoteButton from '../lib/AddNoteButton';
import AuthButton from '../lib/AuthButton';
import { deleteNote, downloadNotes } from '../actions';
import { styles } from './styles';
import { getColor } from '../lib/helpers';
import { Typo } from '../lib/Typography';

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

function renderList(navigator, notes, request) {
  if (request.isLoaded) {
    const as = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    const ataSource = as.cloneWithRows(request.data.children) || [];

    return (
      <ListView
        dataSource={ataSource}
        pageSize={5}
        renderRow={(request, sectionID, rowID) => (
          <NotesViewCard
            title={request.data.permalink}
            description={request.data.title}
            id={request.data.id}
            keys={rowID}
            onPressBtn={() => navigator.push('SingleNote', {
              id: request.data.id,
              title: request.data.title,
              description: request.data.permalink,
            })}
            onLongPressBtn={longPressNote}
          />
        )
        }
      />
    );
  }
  // if (props.notes === undefined) return;
  if (notes.length <= 0) {
    return (
      <View style={styles.emptyListContainer}>
        <Text style={styles.emptyList}>Add some notes...</Text>
      </View>
    );
  }
  const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
  const dataSource = ds.cloneWithRows(notes) || [];

  return (
    <ListView
      dataSource={dataSource}
      renderRow={(note, sectionID, rowID) => (
        <NotesViewCard
          title={note.title}
          description={note.description}
          id={note.id}
          keys={rowID}
          onPressBtn={() => navigator.push('SingleNote', { noteId, title, description })}
          onLongPressBtn={longPressNote}
        />
      )}
    />
  );
}

const AllNotes = ({ navigator, notes, request, isLoggedIn, deleteNote, downloadNotes }) => (
  <View style={styles.allNotesContainer}>
    <StatusBar
      backgroundColor={getColor('paperBlue700')}
      barStyle="light-content"
      animated
    />
    { renderList(navigator, notes, request, isLoggedIn, deleteNote, downloadNotes) }

    <DownloadNotesButton onBtnPress={() => downloadNotes()} isLoggedIn={isLoggedIn} />
    <AddNoteButton onBtnPress={() => navigator.push('NewNote')} />
  </View>
);

AllNotes.navigationOptions = {
  headerTitle: <TitleText title="Asprov Notes" />,
  headerStyle: {
    backgroundColor: getColor('paperBlue'),
  },
  headerRight: <AuthButton />,
};

AllNotes.propTypes = {
  navigator: PropTypes.object.isRequired,
  notes: PropTypes.array.isRequired,
  request: PropTypes.object.isRequired,
  isLoggedIn: PropTypes.bool.isRequired,
  deleteNote: PropTypes.func.isRequired,
  downloadNotes: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  notes: state.notes,
  request: state.request,
  isLoggedIn: state.auth.isLoggedIn,
});

const mapDispatchToProps = dispatch => ({
  navigator: {
    push: (routeName, params) => {
      dispatch(NavigationActions.navigate({ routeName, params }));
    },
  },
  deleteNote: noteId => dispatch(deleteNote(noteId)),
  downloadNotes: () => dispatch(downloadNotes()),
});

export default connect(mapStateToProps, mapDispatchToProps)(AllNotes);
