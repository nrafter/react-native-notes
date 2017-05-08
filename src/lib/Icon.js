//
// Icon Component
//
import React, { PropTypes } from 'react';
import { View } from 'react-native';
import VectorIcon from 'react-native-vector-icons/MaterialIcons';

import { getColor } from './helpers';

// example ->
// <Icon name="google" size={24} color={COLOR[`${primary}500`].color} />

const Icon = ({ name, style, size, color, allowFontScaling }) => (
  <VectorIcon
    name={name}
    size={size}
    color={getColor(color)}
    style={style}
    allowFontScaling={allowFontScaling}
  />
);

Icon.defaultProps = {
  size: 30,
  color: '#757575',
  allowFontScaling: true,
};

Icon.propTypes = {
  name: PropTypes.string.isRequired,
  style: View.propTypes.style,
  size: PropTypes.number,
  color: PropTypes.string,
  allowFontScaling: PropTypes.bool,
};

export default Icon;
