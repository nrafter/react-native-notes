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
    padding: 5,
    bottom: 15,
    left: 15,
    backgroundColor: getColor('paperPink'),
    borderRadius: 50,
  },
});

const BackBtn = ({ onBtnPress }) => (
  <View style={styles.container}>
    <TouchableOpacity onPress={() => onBtnPress()}>
      <Icon name="close" size={36} color={getColor('#ffffff')} />
    </TouchableOpacity>
  </View>
);

BackBtn.propTypes = {
  onBtnPress: PropTypes.func.isRequired,
};

export default BackBtn;
