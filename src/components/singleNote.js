import React, { Component } from 'react';
import {
  Text,
  View,
  TextInput,
  BackAndroid,
  StatusBar
} from 'react-native';
import { connect } from 'react-redux';
import { NavigationActions } from 'react-navigation';

import Toolbar from '../lib/Toolbar';
import TitleText from '../lib/TitleText';
import TickBtn from '../lib/TickBtn';
import BackBtn from '../lib/BackBtn';
import { styles } from './styles';
import { getColor } from '../lib/helpers';
import { Typo } from '../lib/Typography';
import { updateNote } from '../actions';

class SingleNote extends Component {
  constructor(props) {
    super(props);

    this._handleBackButton = this._handleBackButton.bind(this);

    this.state = {
      changed: false,
      id: this.props.navigation.state.params.noteId,
      title: this.props.navigation.state.params.title,
      desc: this.props.navigation.state.params.description,
    }
  }

  static navigationOptions = {
    headerTitle: <TitleText title="Edit Note" />,
    headerStyle: {
      backgroundColor: getColor('paperTeal'),
    }
  };

  componentDidMount() {
    BackAndroid.addEventListener('backPressedSingleNote', this._handleBackButton)
  }

  componentWillUnmount() {
    BackAndroid.removeEventListener('backPressedSingleNote', this._handleBackButton)
  }

  _handleBackButton() {
    if (this.state.changed && this.state.title != '') {
      this.updateNote()
    } else {
      this.goBack()
    }
    return true
  }

  render() {
    return(
      <View style={ styles.addNotesContainer }>
        <StatusBar
          backgroundColor={getColor('paperTeal700')}
          barStyle="light-content"
          animated={true}
        />
        {/*<Toolbar title="Edit Note" color={getColor('paperTeal')}/>*/}

        <View style={styles.textInputContainer}>
          <TextInput
            style={styles.inputTitleStyle}
            placeholder='Note Title...'
            placeholderTextColor='#aaa'
            returnKeyType='next'
            underlineColorAndroid="transparent"
            selectionColor={getColor('paperTeal')}
            onChangeText={(text) => this.setState({ title: text, changed: true })}
            value={this.state.title}
          />

          <TextInput
            style={styles.inputDescriptionStyle}
            multiline={true}
            placeholder='Note Description...'
            placeholderTextColor='#aaa'
            returnKeyType='done'
            underlineColorAndroid="transparent"
            selectionColor={getColor('paperTeal')}
            onChangeText={(text) => this.setState({desc: text, changed: true})}
            value={this.state.desc}
          />
        </View>

        <View style={styles.inputScreenBtnContainer}>
          <TickBtn onBtnPress={this.updateNote.bind(this)} />
          <BackBtn onBtnPress={this.goBack.bind(this)} />
        </View>

      </View>
    )
  }

  goBack(event) {
    this.props.navigator.pop()
  }

  updateNote() {
    if (this.state.changed) {
      this.props.updateNote({
        id: this.state.id,
        title: this.state.title,
        description: this.state.desc
      })
    }

    this.goBack()
  }
}

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
