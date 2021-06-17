/**
 * Navigation stacks declaration.
 *
 * @author Hubert Ganda <hubertganda@gmail.com>
 */

import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';
import Drawer from '../Components/Drawer';
import HomeScreen from '../Screens/HomeScreen';
import DetailScreen from '../Screens/DetailScreen';
import FavoriteScreen from '../Screens/FavoriteScreen';

const MainStack = createStackNavigator(
  {
    Home: HomeScreen,
    Detail: DetailScreen,
    Favorite: FavoriteScreen,
  },
  {
    defaultNavigationOptions: {
      headerTintColor: '#fff',
      headerStyle: {
        backgroundColor: '#B11F24',
      },
    },
  },
);

const SideMenuNavigator = createDrawerNavigator(
  {
    Main: MainStack,
  },
  {
    drawerBackgroundColor: '#B11F24',
    contentComponent: Drawer,
  },
);

const AppContainer = createAppContainer(
  createStackNavigator(
    {
      // Login: LoginScreen,
      SideMenuNavigator,
    },
    {
      initialRouteName: 'SideMenuNavigator',
      headerMode: 'none',
    },
  ),
);

export default AppContainer;
