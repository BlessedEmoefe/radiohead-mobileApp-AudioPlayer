/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
// AppRegistry.registerComponent(...);
// import TrackPlayer from 'react-native-track-player';

// TrackPlayer.registerPlaybackService(() => require('./src/infrastructure/services/service'));

AppRegistry.registerComponent(appName, () => App);
