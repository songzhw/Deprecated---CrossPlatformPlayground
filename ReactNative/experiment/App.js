import React from 'react';
import {Provider} from 'react-redux'
import store from './app/redux/store'
import Home from './app/screen/HomeScreen'

export default () => (
  <Provider store={store}>
    <Home/>
  </Provider>
)


