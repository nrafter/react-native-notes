//
// Add New Note Button
//
import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { NavigationActions } from 'react-navigation';
import { connect } from 'react-redux';

import { Typo } from './Typography';
import { getColor } from './helpers';
import Icon from './Icon';

const AddNoteButton = ({ addNote }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={addNote}>
        <Icon name="add-circle" size={56} color={getColor('paperBlue')} />
      </TouchableOpacity>
    </View>
  )
}

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => ({
  addNote: () => dispatch(NavigationActions.navigate({ routeName: 'Profile' })),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddNoteButton);

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 15,
    right: 15,
    backgroundColor: 'white',
    borderRadius: 50,
  },
});
