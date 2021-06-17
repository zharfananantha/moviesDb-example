/**
 * Login component template.
 *
 * @author Hubert Ganda <hubertganda@gmail.com>
 */

import React, {useState} from 'react';
import {Dimensions, Image, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import axios from 'axios';
import {Button, Icon, Input, Loading} from '../Common';
import {useStateValue} from '../../State';
import {SET_USER} from '../../Reducers/Type';

const {width, height} = Dimensions.get('window');
const iconEye = require('../../Assets/Icons/icon_eye.png');
const logoIglo = require('../../Assets/Images/iglo.png');

const styles = {
  containerTop: {
    height: height * 0.5,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#B11F24',
  },
  containerBottom: {
    height: height * 0.46,
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    marginRight: width * 0.02,
  },
  iconActive: {
    tintColor: '#B11F24',
  },
  marginTop: {
    marginTop: width * 0.02,
  },
  error: {
    color: '#B11F24',
  },
  btnForgot: {
    padding: width * 0.01,
  },
  forgot: {
    color: '#B11F24',
  },
};

export default ({navigateHome, navigateForgotPassword}) => {
  const [{user}, dispatch] = useStateValue();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [hidePassword, setHidePassword] = useState(true);
  const [iconActive, setIconActive] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  function doLogin() {
    setLoading(true);
    setError('');

    axios
      .get('https://my-json-server.typicode.com/hubertganda/FakeAPI/login', {
        username: 'hubertganda',
        password: 'hubertganda',
      })
      .then(response => {
        setLoading(false);
        response.data.status === 'success' ? processLogin() : setError('Login Failed.');
      })
      .catch(err => {
        setLoading(false);
        setError('Encountered error while doing login. ' + err);
      });
  }

  function processLogin() {
    setLoading(true);
    axios
      .get('https://my-json-server.typicode.com/hubertganda/FakeAPI/me')
      .then(response => {
        setLoading(false);
        dispatch({type: SET_USER, payload: response.data});
        navigateHome();
      })
      .catch(err => {
        setLoading(false);
        setError('Encountered error while acquiring data. ' + err);
      });
  }

  function showLoading() {
    if (loading) {
      return <Loading />;
    }
  }

  function showError() {
    if (error !== '') {
      return <Text style={styles.error}>{error}</Text>;
    }
  }

  return (
    <ScrollView>
      <View style={styles.containerTop}>
        <Image source={logoIglo} />
      </View>

      <View style={styles.containerBottom}>
        <Input
          label="username"
          placeholder="Username"
          value={username}
          onChangeText={text => setUsername(text)}
        />

        <Input
          label="password"
          placeholder="Password"
          value={password}
          onChangeText={text => setPassword(text)}
          password={hidePassword}
          inputStyle={styles.marginTop}
          icon={
            <Icon
              size={styles.icon}
              src={iconEye}
              iconStyle={iconActive}
              onPress={() => {
                setHidePassword(!hidePassword);
                hidePassword ? setIconActive(styles.iconActive) : setIconActive(null);
              }}
            />
          }
        />

        {showError()}

        <Button buttonStyle={styles.marginTop} onPress={() => doLogin()}>
          SIGN IN
        </Button>

        <TouchableOpacity style={styles.btnForgot} onPress={() => navigateForgotPassword()}>
          <Text style={styles.forgot}>Forgot Password</Text>
        </TouchableOpacity>
      </View>

      {showLoading()}
    </ScrollView>
  );
};
