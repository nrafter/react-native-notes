import React from 'react';
import {
  View,
  TextInput,
  StatusBar,
} from 'react-native';
import { connect } from 'react-redux';
import { NavigationActions } from 'react-navigation';

import Toolbar from '../lib/Toolbar';
import TickBtn from '../lib/TickBtn';
import BackBtn from '../lib/BackBtn';
import { styles } from './styles';
import { getColor } from '../lib/helpers';
import { Typo } from '../lib/Typography';
import { updateNote } from '../actions';

const SingleNote = (props) => {
  const state = {
    changed: false,
    id: props.navigation.state.params.noteId,
    title: props.navigation.state.params.title,
    desc: props.navigation.state.params.description,
  };

  function goBack(event) {
    props.navigator.pop();
  }

  function updateNote() {
    if (state.changed) {
      props.updateNote({
        id: state.id,
        title: state.title,
        description: state.desc,
      });
    }

    goBack();
  }

  return (
    <View style={styles.addNotesContainer}>
      <StatusBar
        backgroundColor={getColor('paperTeal700')}
        barStyle="light-content"
        animated
      />

      <View style={styles.textInputContainer}>
        <TextInput
          style={styles.inputTitleStyle}
          placeholder="Note Title..."
          placeholderTextColor="#aaa"
          returnKeyType="next"
          underlineColorAndroid="transparent"
          selectionColor={getColor('paperTeal')}
          onChangeText={(text) => { state.desc = text; state.changed = true; }}
          value={state.title}
        />

        <TextInput
          style={styles.inputDescriptionStyle}
          multiline
          placeholder="Note Description..."
          placeholderTextColor="#aaa"
          returnKeyType="done"
          underlineColorAndroid="transparent"
          selectionColor={getColor('paperTeal')}
          onChangeText={(text) => { state.desc = text; state.changed = true; }}
          value={state.desc}
        />
      </View>

      <View style={styles.inputScreenBtnContainer}>
        <TickBtn onBtnPress={updateNote} />
        <BackBtn onBtnPress={goBack} />
      </View>

    </View>
  );
};

SingleNote.navigationOptions = {
  header: <Toolbar title="Edit Note" color={getColor('paperTeal')} />,
};

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => ({
  navigator: {
    push: (routeName, params) => { dispatch(NavigationActions.navigate({ routeName, params })); },
    pop: () => { dispatch(NavigationActions.back()); },
  },
  updateNote: note => dispatch(updateNote(note)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SingleNote);
