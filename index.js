/**
 * @format
 */

import {AppRegistry, YellowBox} from 'react-native';
import App from './src/App';
import {name as appName} from './app.json';

YellowBox.ignoreWarnings(['Warning:', 'Require cycle: node_modules/react-native-paper']);
AppRegistry.registerComponent(appName, () => App);
