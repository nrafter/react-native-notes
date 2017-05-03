//
// Toolbar Component
//
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

import { Typo } from './Typography';
import { getColor } from './helpers';

const Toolbar = (props) => {
  const {
    color,
    title,
  } = props;

  return (
    <View style={[styles.toolbar, { backgroundColor: getColor(color) }]}>
      <Text style={[styles.title, Typo.toolbarTitle]}>
        {title.toUpperCase()}
      </Text>
    </View>
  );
};

export const TitleText = (props) => {
  const {
    title,
  } = props;

  return (
    <Text style={[styles.title, Typo.toolbarTitle]}>
      {title.toUpperCase()}
    </Text>
  );
}

const styles = StyleSheet.create({
  toolbar: {
    height: 0,
    justifyContent: 'center',
  },
  title: {
    marginLeft: 16,
    color: 'white',
  },
});

export default Toolbar;
