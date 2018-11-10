import React from 'react';
import {Provider} from 'react-redux'
import store from './app/redux/store'
import Router from './app/core/route'

export default () => (
  <Provider store={store}>
    <Router/>
  </Provider>
)
