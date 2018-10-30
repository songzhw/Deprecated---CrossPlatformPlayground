// import App from './app/index'

import React, { Component } from 'react'
import { View, Text, StatusBar, Button } from 'react-native'
import Child from './temp'

class Parent extends Component {
  constructor() {
    super()
    this.state = {
      name: 'child->parent',
    }
  }
  
  onChildClick(name) {
    this.setState({ name: name })
  }
  
  render() {
    return (
      <View style={{ flex: 1 }}>
        <StatusBar translucent={false} barStyle="default"/>
        <Child desp={this.state.name}
               changeChild={value => this.onChildClick(value)}
        />
      </View>
    )
  }
}


export default Parent

// export default App
