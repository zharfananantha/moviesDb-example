/**
 * Drawer component.
 * Configure design/layout for each apps sidemenu here.
 *
 * @author Hubert Ganda <hubertganda@gmail.com>
 */

import React from 'react';
import { Dimensions, ImageBackground, Text, TouchableOpacity, View } from 'react-native';
import ProfilePicture from '../Profile/ProfilePicture';

const { width, height } = Dimensions.get('window');

// insert background image for the sidemenu here.
const drawerBg = null;

const styles = {
  navMenu: {
    paddingTop: width * 0.025,
    paddingBottom: width * 0.025,
    marginTop: width * 0.01,
    marginBottom: width * 0.005,
    backgroundColor: '#d4282e',
    alignItems: 'center',
  },
  navFont: {
    color: '#ebebeb',
    fontSize: width * 0.06,
  },
};

export default class DrawerSample extends React.Component {

  onTapFavorite() {
    this.props.navigation.closeDrawer();
    this.props.navigation.navigate('Favorite');
  }

  onTapHome() {
    this.props.navigation.closeDrawer();
    this.props.navigation.navigate('Home');
  }

  render() {
    return (
      <View style={{marginTop: width * 0.5}}>
        <TouchableOpacity style={styles.navMenu} onPress={() => this.onTapHome()}>
          <Text style={styles.navFont}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navMenu} onPress={() => this.onTapFavorite()}>
          <Text style={styles.navFont}>Favorite</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
