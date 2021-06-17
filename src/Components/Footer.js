/**
 * Footer component template.
 *
 * @author Hubert Ganda <hubertganda@gmail.com>
 */

import React from 'react';
import {Dimensions, Image, Text, View} from 'react-native';

const {width} = Dimensions.get('window');
const logoReact = require('../Assets/Images/react.png');

const styles = {
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#B11F24',
    fontSize: width * 0.03,
    textAlign: 'center',
  },
  image: {
    width: width * 0.02,
    height: width * 0.02,
    marginLeft: width * 0.005,
  },
};

export default () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Powered by React Native</Text>
      <Image style={styles.image} source={logoReact} />
    </View>
  );
};
