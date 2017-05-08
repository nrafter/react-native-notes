//
// Toolbar Component
//
import React, { PropTypes } from 'react';
import {
  Text,
  StyleSheet,
} from 'react-native';

import { Typo } from './Typography';

const styles = StyleSheet.create({
  title: {
    marginLeft: 16,
    color: 'white',
  },
});

export const TitleText = ({ title }) => (
  <Text style={[styles.title, Typo.toolbarTitle]}>
    {title.toUpperCase()}
  </Text>
);

TitleText.propTypes = {
  title: PropTypes.string.isRequired,
};

export default TitleText;
