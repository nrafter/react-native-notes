//
// Add New Note Button
//
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

import { Typo } from './Typography';
import { getColor } from './helpers';
import Icon from './Icon';

const TickBtn = (props) => {
  function handlePress() {
    props.onBtnPress();
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handlePress}>
        <Icon name="done" size={36} color={getColor('#ffffff')} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    padding: 5,
    bottom: 15,
    right: 15,
    backgroundColor: getColor('paperTeal'),
    borderRadius: 50,
  },
});

export default TickBtn;
