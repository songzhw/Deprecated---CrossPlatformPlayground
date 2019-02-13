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

export default class App extends Component {
  render() {
    return (
      <ReduxProvider store={store}>
        <Routes/>
      </ReduxProvider>
    );
  }
}
