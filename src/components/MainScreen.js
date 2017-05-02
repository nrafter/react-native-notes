import React from 'react';
import { StyleSheet, View } from 'react-native';

import LoginStatusMessage from './LoginStatusMessage';
import AuthButton from './AuthButton';
import AddNoteButton from './AddNoteButton';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
});

const MainScreen = () => (
  <View style={styles.container}>
    <LoginStatusMessage />
    <AuthButton />
    <AddNoteButton onBtnPress={() => { console.log('skeletron'); }} />
  </View>
);

MainScreen.navigationOptions = {
  title: 'Asprov Notes',
  headerStyle: {
    backgroundColor: '#1976d2',
  },
};

export default MainScreen;
