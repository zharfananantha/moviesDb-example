/**
 * Header component template.
 *
 * @author Hubert Ganda <hubertganda@gmail.com>
 */

import React from 'react';
import {Dimensions, Text, View} from 'react-native';
import {StackActions, NavigationActions} from 'react-navigation';
import {Icon} from './Common';

const {width} = Dimensions.get('window');
const iconMenu = require('../Assets/Icons/icon_menu.png');
const iconLogout = require('../Assets/Icons/icon_logout.png');

const navigateMain = StackActions.reset({
  index: 0,
  actions: [NavigationActions.navigate({routeName: 'Login'})],
});

const styles = {
  header: {
    flex: 1,
    height: width * 0.125,
    flexDirection: 'row',
    alignItems: 'center',
    // justifyContent: 'space-between',
    backgroundColor: '#B11F24',
  },
  pageTitle: {
    color: '#fff',
    fontSize: width * 0.08,
    marginLeft: width * 0.02,
  },
  menuLeft: {
    marginLeft: width * 0.02,
    marginRight: width * 0.04,
  },
  menuRight: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginLeft: width * 0.02,
    marginRight: width * 0.02,
  },
  menuText: {
    padding: width * 0.01,
    borderWidth: 3,
    borderRadius: 2,
    borderColor: '#fff',
    marginRight: width * 0.02,
  },
  logout: {
    width: width * 0.1,
    height: width * 0.1,
    tintColor: '#fff',
  },
  text: {
    color: '#fff',
  },
};

export default ({title, navigation}) => {
  function renderMenu() {
    if (navigation.state.routeName === 'Home') {
      return (
        <View style={styles.menuLeft}>
          <Icon size={styles.logout} src={iconMenu} onPress={() => navigation.openDrawer()} />
        </View>
      );
    }

    return null;
  }

  return (
    <View style={styles.header}>
      {renderMenu()}
      <Text style={styles.pageTitle}>{title}</Text>
      {/* <View style={styles.menuRight}>
        <Icon
          size={styles.logout}
          src={iconLogout}
          onPress={() => navigation.dispatch(navigateMain)}
        />
      </View> */}
    </View>
  );
};
