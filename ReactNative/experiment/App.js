import React, {Component} from 'react';
import {Provider} from 'react-redux'
import store from './app/redux/store'
import ReduxSagaScreen from './app/screen/ReduxSagaScreen'

export default () => (
  <Provider store={store}>
    <ReduxSagaScreen/>
  </Provider>
)
