//
// Add New Note Button
//
import React, { PropTypes } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

import { Typo } from './Typography';
import { getColor } from './helpers';
import Icon from './Icon';

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

const TickBtn = ({ onBtnPress }) => (
  <View style={styles.container}>
    <TouchableOpacity onPress={() => onBtnPress()}>
      <Icon name="done" size={36} color={getColor('#ffffff')} />
    </TouchableOpacity>
  </View>
);

TickBtn.propTypes = {
  onBtnPress: PropTypes.func.isRequired,
};

export default TickBtn;
