//
// Toolbar Component
//
import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

import { Typo } from './Typography';
import { getColor } from './helpers';

const NotesViewCard = (props) => {
  const {
    title,
    description,
    id,
    keys,
  } = props;

  const background = (keys % 2 == 0) ? { backgroundColor: '#ffffff' } : { backgroundColor: '#f2f2f2' };

  function handleLongPress() {
    props.onLongPressBtn(props.id);
  }

  function handleGoto() {
    props.onPressBtn(props.id, props.title, props.description);
  }

  return (
    <TouchableOpacity onPress={handleGoto} onLongPress={handleLongPress}>
      <View style={[styles.cardContainer, background]}>
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
};

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

export default NotesViewCard;
