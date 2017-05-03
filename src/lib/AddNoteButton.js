//
// Add New Note Button
//
import React from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

import { Typo } from './Typography';
import { getColor } from './helpers';
import Icon from './Icon';

const AddNoteButton = (props) => {
  function handlePress() {
    props.onBtnPress();
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handlePress}>
        <Icon name="add-circle" size={56} color={getColor('paperBlue')} />
      </TouchableOpacity>
    </View>
  );
};

export const TestButton = (props) => {
  function handlePress() {
    props.onBtnPress();
  }

  return (
    <View>
      <TouchableOpacity onPress={handlePress}>
        <Icon name="add-circle" size={56} color={getColor('paperBlue')} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 15,
    right: 15,
    backgroundColor: 'white',
    borderRadius: 50,
  },
});

export default AddNoteButton;
