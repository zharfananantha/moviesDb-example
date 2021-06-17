/**
 * Item component for list.
 *
 * @author Hubert Ganda <hubertganda@gmail.com>
 */

import React from 'react';
import {Dimensions, Text, TouchableOpacity, View} from 'react-native';
import {PlaceholderImage} from './PlaceholderImage';

const {width} = Dimensions.get('window');

const styles = {
  container: {
    flexDirection: 'row',
    paddingLeft: width * 0.02,
    paddingRight: width * 0.02,
    marginBottom: width * 0.02,
  },
  image: {
    width: width * 0.4,
    height: width * 0.25,
    resizeMode: 'cover',
    marginRight: width * 0.02,
  },
  title: {
    fontSize: width * 0.05,
  },
  developer: {
    fontSize: width * 0.03,
  },
};

const ListItem = ({item, onPress}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <PlaceholderImage style={styles.image} src={item.image} />
      <View>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.developer}>{item.developer}</Text>
      </View>
    </TouchableOpacity>
  );
};

export {ListItem};
