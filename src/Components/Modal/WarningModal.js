/**
 * Warning modal design template.
 *
 * @author Hubert Ganda <hubertganda@gmail.com>
 */

import React from 'react';
import {Dimensions, Text, View} from 'react-native';
import {Button} from 'react-native-elements';

const {width} = Dimensions.get('window');

const styles = {
  container: {
    width: width * 0.6,
    height: width * 0.6,
    padding: width * 0.06,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#ebebeb',
  },
  text: {
    textAlign: 'center',
  },
  btn: {
    backgroundColor: '#B11F24',
    width: width * 0.4,
  },
};

export default ({message, closeModal}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{message}</Text>
      <Button
        buttonStyle={styles.btn}
        title="Close"
        type="solid"
        raised
        onPress={() => closeModal()}
      />
    </View>
  );
};
