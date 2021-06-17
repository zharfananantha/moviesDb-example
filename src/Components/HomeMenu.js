/**
 * Menu list component.
 *
 * @author Hubert Ganda <hubertganda@gmail.com>
 */

import React from 'react';
import {Dimensions, View} from 'react-native';
import {Button} from 'react-native-elements';

const {width} = Dimensions.get('window');

const styles = {
  btnGroup: {
    flex: 1,
    marginTop: width * 0.1,
  },
  btnGroupHorizontal: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginBottom: width * 0.04,
  },
  btn: {
    backgroundColor: '#B11F24',
    width: width * 0.4,
  },
  btnContainer: {
    marginLeft: width * 0.06666,
  },
};

export default ({navigateProfile, navigateForm, navigateNfc, navigateProduct, navigateMap}) => {
  return (
    <View style={styles.btnGroup}>
      <View style={styles.btnGroupHorizontal}>
        <Button
          buttonStyle={styles.btn}
          containerStyle={styles.btnContainer}
          title="Profile"
          type="solid"
          raised
          onPress={() => navigateProfile()}
        />
        <Button
          buttonStyle={styles.btn}
          containerStyle={styles.btnContainer}
          title="Form"
          type="solid"
          raised
          onPress={() => navigateForm()}
        />
      </View>

      <View style={styles.btnGroupHorizontal}>
        <Button
          buttonStyle={styles.btn}
          containerStyle={styles.btnContainer}
          title="Nfc"
          type="solid"
          raised
          onPress={() => navigateNfc()}
        />
        <Button
          buttonStyle={styles.btn}
          containerStyle={styles.btnContainer}
          title="Product"
          type="solid"
          raised
          onPress={() => navigateProduct()}
        />
      </View>

      <View style={styles.btnGroupHorizontal}>
        <Button
          buttonStyle={styles.btn}
          containerStyle={styles.btnContainer}
          title="Map"
          type="solid"
          raised
          onPress={() => navigateMap()}
        />
      </View>
    </View>
  );
};
