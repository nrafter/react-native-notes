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
import { addNote } from '../actions';

const NewNote = (props) => {
  const state = {
    title: '',
    desc: '',
  };

  function goBack(event) {
    props.navigator.pop();
  }

  function addNote() {
    // debugger;
    props.addNote({
      title: state.title,
      description: state.desc,
    });
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
          autoFocus
          placeholder="Note Title..."
          placeholderTextColor="#aaa"
          returnKeyType="next"
          underlineColorAndroid="transparent"
          selectionColor={getColor('paperTeal')}
          onChangeText={text => state.title = text}
        />

        <TextInput
          style={styles.inputDescriptionStyle}
          multiline
          placeholder="Note Description..."
          placeholderTextColor="#aaa"
          returnKeyType="done"
          underlineColorAndroid="transparent"
          selectionColor={getColor('paperTeal')}
          onChangeText={text => state.desc = text}
        />
      </View>

      <View style={styles.inputScreenBtnContainer}>
        <TickBtn onBtnPress={addNote} />
        <BackBtn onBtnPress={goBack} />
      </View>

    </View>
  );
};

NewNote.navigationOptions = {
  header: <Toolbar title="Add New Note" color={getColor('paperTeal')}/>,
};

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => ({
  navigator: {
    push: () => { dispatch(NavigationActions.navigate({ routeName: 'NewNote' })); },
    pop: () => { dispatch(NavigationActions.back()); },
  },
  addNote: note => dispatch(addNote(note)),
});

export default connect(mapStateToProps, mapDispatchToProps)(NewNote);
