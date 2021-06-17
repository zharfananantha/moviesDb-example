/**
 * Default input component.
 *
 * @author Hubert Ganda <hubertganda@gmail.com>
 */

import React, {useState} from 'react';
import {Dimensions, Text, TextInput, View} from 'react-native';

const {width} = Dimensions.get('window');

const styles = {
  container: {
    width: width * 0.5,
    height: width * 0.125,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: width * 0.02,
    borderWidth: width * 0.003,
    borderColor: '#B11F24',
  },
  label: {
    position: 'absolute',
    left: width * 0.02,
    top: width * -0.025,
    fontSize: width * 0.035,
    backgroundColor: '#fff',
    paddingLeft: width * 0.01,
    paddingRight: width * 0.01,
  },
  input: {
    flex: 1,
    paddingBottom: width * 0.02,
    paddingTop: width * 0.02,
    paddingLeft: width * 0.02,
    paddingRight: width * 0.02,
    textAlign: 'left',
    fontSize: width * 0.05,
  },
  focusContainer: {
    borderColor: '#33F901',
  },
};

const Input = ({inputStyle, label, placeholder, value, onChangeText, password, icon}) => {
  const [focusContainerStyle, setFocusContainerStyle] = useState(null);

  function showIcon() {
    if (icon) {
      return icon;
    }
  }

  return (
    <View style={{...styles.container, ...inputStyle, ...focusContainerStyle}}>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={password}
        onBlur={() => setFocusContainerStyle(null)}
        onFocus={() => setFocusContainerStyle(styles.focusContainer)}
      />
      <Text style={styles.label}>{label}</Text>
      {showIcon()}
    </View>
  );
};

export {Input};
