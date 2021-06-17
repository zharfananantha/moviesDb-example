/**
 * Default icon component.
 *
 * @author Hubert Ganda <hubertganda@gmail.com>
 */

import React from 'react';
import {Dimensions, Image, TouchableOpacity} from 'react-native';

const {width} = Dimensions.get('window');

const styles = {
  container: {
    width: width * 0.06,
    height: width * 0.06,
  },
  image: {
    width: width * 0.06,
    height: width * 0.06,
    resizeMode: 'contain',
  },
};

const Icon = ({size, src, iconStyle, onPress}) => {
  return (
    <TouchableOpacity style={{...styles.container, ...size}} onPress={onPress}>
      <Image style={{...styles.image, ...size, ...iconStyle}} source={src} />
    </TouchableOpacity>
  );
};

export {Icon};
