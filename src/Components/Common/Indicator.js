/**
 * Pagination indicator for banner.
 *
 * @author Hubert Ganda <hubertganda@gmail.com>
 */

import React from 'react';
import {Dimensions, View} from 'react-native';

const {width} = Dimensions.get('window');

// color:
// igloRed = #B11F24
// gold = #FFD700
const styles = {
  indicator: {
    width: width * 0.08,
    height: width * 0.02,
    borderWidth: 1,
    borderColor: '#B11F24',
    borderRadius: width * 0.01,
    marginRight: width * 0.01,
  },
};

const Indicator = ({index, active}) => {
  const activeStyle = index === active ? {backgroundColor: '#B11F24'} : {backgroundColor: '#fff'};

  return <View style={{...styles.indicator, ...activeStyle}} />;
};

export {Indicator};
