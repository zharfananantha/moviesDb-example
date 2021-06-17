/**
 * Warning modal design template.
 *
 * @author Hubert Ganda <hubertganda@gmail.com>
 */

import React, {useState} from 'react';
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';

const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    width: width * 0.45,
    minHeight: width * 0.25,
    padding: width * 0.06,
    borderRadius: 10,
    backgroundColor: 'white',
  },
  textTitle: {
    fontSize: width * 0.045,
  },
  topContainer: {
    // backgroundColor: 'green',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  image: {
    width: 80,
    height: 80,
    resizeMode: 'cover',
    alignSelf: 'center',
    marginTop: 10,
  },
  activityIndicator: {
    alignItems: 'center',
    height: 80,
  },
});

export default () => {
  let [animating, setAnimating] = useState(true);
  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <Text style={styles.textTitle}>Loading...</Text>
      </View>
      <ActivityIndicator
        animating={animating}
        color="#ed473e"
        size="large"
        style={styles.activityIndicator}
      />
    </View>
  );
};
