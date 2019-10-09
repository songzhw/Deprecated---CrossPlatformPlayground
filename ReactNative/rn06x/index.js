import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import {App} from './src/App';
import { Temp } from "./src/Temp";

AppRegistry.registerComponent(appName, () => Temp);
