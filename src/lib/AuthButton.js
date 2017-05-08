import React, { PropTypes } from 'react';
import {
  TouchableOpacity,
} from 'react-native';
import { connect } from 'react-redux';
import { NavigationActions } from 'react-navigation';
import VectorIcon from 'react-native-vector-icons/MaterialIcons';

const AuthButton = ({ logout, login, isLoggedIn }) => (
  <TouchableOpacity onPress={isLoggedIn ? logout : login} >
    <VectorIcon
      name={'account-box'}
      size={56}
      allowFontScaling
    />
  </TouchableOpacity>
);

AuthButton.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
  logout: PropTypes.func.isRequired,
  login: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  isLoggedIn: state.auth.isLoggedIn,
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch({ type: 'Logout' }),
  login: () => dispatch(NavigationActions.navigate({ routeName: 'Login' })),
});

export default connect(mapStateToProps, mapDispatchToProps)(AuthButton);
