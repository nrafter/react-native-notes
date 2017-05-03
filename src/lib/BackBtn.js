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

const BackBtn = (props) => {
  function handlePress() {
    props.onBtnPress();
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handlePress}>
        <Icon name="close" size={36} color={getColor('#ffffff')} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    padding: 5,
    bottom: 15,
    left: 15,
    backgroundColor: getColor('paperPink'),
    borderRadius: 50,
  },
});

export default BackBtn;
