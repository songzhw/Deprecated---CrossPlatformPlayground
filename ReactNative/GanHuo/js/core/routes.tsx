import {createStackNavigator, Header, NavigationScreenProp} from 'react-navigation'
import HomeScreen from "../screen/HomeScreen";
import {Image, StatusBar, StyleSheet} from "react-native";
import React from "react";

const styles = StyleSheet.create({
  //because I find the size of "headerLeft" is a litle more than header bar's height
  imgBack: {
    width: Header.HEIGHT,
    height: Header.HEIGHT,
  },
})

const HomeStack = createStackNavigator(
  {
    HomeScreen,
  },
  {
    headerMode: 'screen',
    navigationOptions: {
      headerStyle: {backgroundColor: '#1b5e20'},
      headerTitleStyle: {color: 'white'},
      headerLeft: (<Image source={require('../../assets/icon_menu.png')} resizeMode='center' style={styles.imgBack}/>)
    },
  }
)



export default HomeStack