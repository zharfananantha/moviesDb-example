/**
 * Default list component.
 *
 * @author Hubert Ganda <hubertganda@gmail.com>
 */

import React from 'react';
import {Dimensions, FlatList} from 'react-native';

const {width} = Dimensions.get('window');

const styles = {
  list: {
    paddingTop: width * 0.02,
  },
};

const List = ({data, keyExtractor, items, horizontal}) => {
  return (
    <FlatList
      contentContainerStyle={styles.list}
      data={data}
      keyExtractor={keyExtractor}
      renderItem={items}
      horizontal={horizontal}
    />
  );
};

export {List};
