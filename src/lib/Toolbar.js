//
// Toolbar Component
//
import React, { PropTypes } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

import { Typo } from './Typography';
import { getColor } from './helpers';

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

const Toolbar = ({ color, title }) => (
  <View style={[styles.toolbar, { backgroundColor: getColor(color) }]}>
    <Text style={[styles.title, Typo.toolbarTitle]}>
      {title.toUpperCase()}
    </Text>
  </View>
);

Toolbar.propTypes = {
  color: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Toolbar;
