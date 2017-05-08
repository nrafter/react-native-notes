//
// Toolbar Component
//
// import PropTypes from 'prop-types';
import React, { PropTypes } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

import { Typo } from './Typography';

const styles = StyleSheet.create({
  cardContainer: {
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 15,
    paddingBottom: 15,
  },
  cardTitleContainer: {
    justifyContent: 'center',
  },
  cardTitle: {
    marginBottom: 10,
  },
  cardDescriptionContainer: {

  },
  cardDescription: {

  },
});

const NotesViewCard = ({ title, description, id, keys, onLongPressBtn, onPressBtn }) => (
  <TouchableOpacity
    onPress={() => onPressBtn(id, title, description)}
    onLongPress={() => onLongPressBtn(id)}
  >
    <View
      style={[styles.cardContainer, (keys % 2 === 0) ? { backgroundColor: '#ffffff' } : { backgroundColor: '#f2f2f2' }]}
    >
      <View style={styles.cardTitleContainer}>
        <Text style={[styles.cardTitle, Typo.cardTitle]}>
          {title.toUpperCase()}
        </Text>
      </View>
      <View style={styles.cardDescriptionContainer}>
        <Text style={[styles.cardDescription, Typo.cardDescription]}>
          {(description.length > 150)
            ? `${description.slice(0, 150)}...`
            : description}
        </Text>
      </View>
    </View>
  </TouchableOpacity>
);

NotesViewCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  keys: PropTypes.string.isRequired,
  onLongPressBtn: PropTypes.func.isRequired,
  onPressBtn: PropTypes.func.isRequired,
};

export default NotesViewCard;
