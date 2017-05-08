//
// Download Notes Button
//
import React, { PropTypes } from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
} from 'react-native';

import { Typo } from './Typography';
import { getColor } from './helpers';
import Icon from './Icon';

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 15,
    left: 15,
    backgroundColor: 'white',
    borderRadius: 50,
  },
});

const DownloadNotesButton = ({ onBtnPress, isLoggedIn }) => ((isLoggedIn) ? (
  <View style={styles.container}>
    <TouchableOpacity onPress={onBtnPress}>
      <Icon name="restore" size={56} color={getColor('paperGreen')} />
    </TouchableOpacity>
  </View>
  ) : (
    <Text />
  )
);

DownloadNotesButton.propTypes = {
  onBtnPress: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired,
};

export default DownloadNotesButton;
