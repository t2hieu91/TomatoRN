/**
 * @format
 */

import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import Root from './app/index';
import App from './App';

// AppRegistry.registerComponent(appName, () => App);
AppRegistry.registerComponent(appName, () => Root);
