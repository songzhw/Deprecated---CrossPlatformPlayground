import React, { Component } from 'react'
import { createStackNavigator } from 'react-navigation'
import HomeScreen from './HomeScreen'
import DetailScreen from './DetailsScreen'

// React-Naviagation得入到homeScreen的定义之下才行
// 另外, 这库除了导航, 还能帮我们创建一个toolbar, 免得内容与status bar重叠了
const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    Details: DetailScreen
  }, {
    initialRouteName: 'Home',
    navigationOptions: {
      headerStyle: { backgroundColor: '#f4511e' },
      headerTintColor: '#fff'
    }
  })

export default class App extends Component {
  render() {
    return <RootStack />
  }
}


// skip this line if using Create-React-Native-App
// AppRegistry.registerComponent('RN101', ()=>Bananas)