/**
 * Item component for banner.
 *
 * @author Hubert Ganda <hubertganda@gmail.com>
 */

import React from 'react';
import {Dimensions} from 'react-native';
import {PlaceholderImage} from './PlaceholderImage';

const {width} = Dimensions.get('window');

const styles = {
  image: {
    width: width,
    height: width * 0.6,
    resizeMode: 'cover',
  },
};

const BannerItem = ({src}) => {
  return <PlaceholderImage style={styles.image} src={src} />;
};

export {BannerItem};
