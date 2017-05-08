//
// Add New Note Button
//
import React, { PropTypes } from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

import { Typo } from './Typography';
import { getColor } from './helpers';
import Icon from './Icon';

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 15,
    right: 15,
    backgroundColor: 'white',
    borderRadius: 50,
  },
});

const AddNoteButton = ({ onBtnPress }) => (
  <View style={styles.container}>
    <TouchableOpacity onPress={() => onBtnPress()}>
      <Icon name="add-circle" size={56} color={getColor('paperBlue')} />
    </TouchableOpacity>
  </View>
);

AddNoteButton.PropTypes = {
  onBtnPress: PropTypes.func.isRequired,
};

export default AddNoteButton;
