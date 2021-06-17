/**
 * Default button component.
 *
 * @author Hubert Ganda <hubertganda@gmail.com>
 */

import React from 'react';
import {Dimensions, Text, TouchableOpacity} from 'react-native';

const {width} = Dimensions.get('window');

const styles = {
  button: {
    width: width * 0.5,
    height: width * 0.125,
    backgroundColor: '#B11F24',
    marginBottom: width * 0.02,
    borderRadius: width * 0.01,
    justifyContent: 'center',
  },
  text: {
    color: '#fff',
    textAlign: 'center',
    fontSize: width * 0.05,
  },
};

const Button = ({buttonStyle, disabled, onPress, children}) => {
  return (
    <TouchableOpacity
      disabled={disabled}
      style={{...styles.button, ...buttonStyle}}
      onPress={onPress}>
      <Text style={styles.text}>{children}</Text>
    </TouchableOpacity>
  );
};

export {Button};
