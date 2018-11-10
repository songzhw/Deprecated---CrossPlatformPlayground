import React, {Component} from 'react';
import {Provider} from 'react-redux'
import store from './app/redux/store'
import Home from './app/screen/HomeScreen'

// export default () => (
//   <Provider store={store}>
//     <Home/>
//   </Provider>
// )

import {Text, View, AppState} from 'react-native'

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      appState: AppState.currentState,
      previousAppStates: []
    }
  }

  componentDidMount() {
    console.log(`componentDidMount()`)
    AppState.addEventListener('change', this.onAppStateChange)
  }

  componentWillUnmount() {
    console.log(`componentWillUnmount()`)
    AppState.removeEventListener('change', this.onAppStateChange)
  }


  onAppStateChange = (thisAppState) => {
    var tmp = this.state.previousAppStates.slice() // just a copy
    tmp.push(this.state.appState)
    console.log(`onChange() thisState =  ${thisAppState}`)
    // console.log(`onChange() array1 = ${this.state.previousAppStates}`)
    // console.log(`onChange() array2 = ${tmp}`)
    console.log(`=======================================`)
    this.setState({thisAppState, tmp})
  }

  render() {
    return (
      <View>
        <Text>One</Text>
        <Text>{JSON.stringify(this.state.previousAppStates)}</Text>
      </View>
    )
  }

}