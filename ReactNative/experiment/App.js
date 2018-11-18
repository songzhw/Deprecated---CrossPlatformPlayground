import React from 'react';
import {Provider} from 'react-redux'
import store from './app/redux/store'
import {HighOrderNavigator} from './app/navigation'

export default () => (
  <Provider store={store}>
    <HighOrderNavigator/>
  </Provider>
)
