//
// Download Notes Button
//
import React from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
} from 'react-native';

import { Typo } from './Typography';
import { getColor } from './helpers';
import Icon from './Icon';
// import { downloadNotes } from '../actions';

const DownloadNotesButton = ({ onBtnPress, isLoggedIn }) => {
  if (!isLoggedIn) {
    return <Text />;
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onBtnPress}>
        <Icon name="restore" size={56} color={getColor('paperGreen')} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 15,
    left: 15,
    backgroundColor: 'white',
    borderRadius: 50,
  },
});

export default DownloadNotesButton;