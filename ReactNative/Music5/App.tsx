import React, {Component} from 'react';
import {Platform} from 'react-native';
import {Provider as ReduxProvider} from 'react-redux'
import store from './js/redux/store'
import Routes from './js/core/routes'

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

const data = require("./js/core/i18n/strings.json");


export default class App extends Component {
  render() {
    console.log(`szw i18n data = ${JSON.stringify(data)}`)
    return (
      <ReduxProvider store={store}>
        <Routes/>
      </ReduxProvider>
    );
  }
}
