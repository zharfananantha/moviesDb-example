/**
 * Forgot Password component template.
 *
 * @author Hubert Ganda <hubertganda@gmail.com>
 */

import React, {useState, useEffect} from 'react';
import {BackHandler, Dimensions, Text, View} from 'react-native';
import {Button, Input} from 'react-native-elements';
import {Heading} from '../Common';

const {width} = Dimensions.get('window');

const styles = {
  container: {
    paddingLeft: width * 0.1,
    paddingRight: width * 0.1,
    marginTop: width * 0.1,
  },
  titleGroup: {
    alignItems: 'center',
  },
  input: {
    marginTop: width * 0.1,
    marginBottom: width * 0.1,
  },
  button: {
    backgroundColor: '#B11F24',
    marginBottom: width * 0.04,
  },
};

export default ({navigateLogin}) => {
  const [email, setEmail] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    const onAndroidBackButtonPress = () => {
      navigateLogin();
      return true;
    };

    BackHandler.addEventListener('hardwareBackPress', onAndroidBackButtonPress);

    return () => {
      BackHandler.removeEventListener('hardwareBackPress', onAndroidBackButtonPress);
    };
  }, [navigateLogin]);

  function validateEmail() {
    if (email === '') {
      setErrorMessage('Please enter your email.');
    } else {
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.titleGroup}>
        <Heading h4>Forgot Password</Heading>
        <Text>Enter your email below to reset your password</Text>
      </View>

      <Input
        placeholder="Email"
        containerStyle={styles.input}
        value={email}
        onChangeText={text => setEmail(text)}
        errorMessage={errorMessage}
      />

      <Button onPress={() => validateEmail()} buttonStyle={styles.button} title="Submit" />
    </View>
  );
};
