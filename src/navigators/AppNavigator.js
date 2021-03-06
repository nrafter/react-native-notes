import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { addNavigationHelpers, StackNavigator } from 'react-navigation';

import NewNote from '../components/newNote';
import AllNotes from '../components/allNotes';
import SingleNote from '../components/singleNote';
import Login from '../components/Login';

export const AppNavigator = StackNavigator({
  NewNote: { screen: NewNote },
  AllNotes: { screen: AllNotes },
  SingleNote: { screen: SingleNote },
  Login: { screen: Login },
});

const AppWithNavigationState = ({ dispatch, nav }) => (
  <AppNavigator navigation={addNavigationHelpers({ dispatch, state: nav })} />
);

AppWithNavigationState.propTypes = {
  dispatch: PropTypes.func.isRequired,
  nav: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  nav: state.nav,
});

export default connect(mapStateToProps)(AppWithNavigationState);
