import {createStackNavigator, Header, NavigationScreenProp} from 'react-navigation'
import HomeScreen from "../screen/HomeScreen";
import {Image, StatusBar, StyleSheet, TouchableOpacity} from "react-native";
import React from "react";
import SettingsScreen from "../screen/SettingsScreen";

const styles = StyleSheet.create({
  //because I find the size of "headerLeft" is a litle more than header bar's heightZ
  imgBack: {
    width: Header.HEIGHT,
    height: Header.HEIGHT,
  },
})

const HomeStack = createStackNavigator(
  {
    HomeScreen,
    SettingsScreen
  },
  {
    headerMode: 'screen',
    navigationOptions: ({navigation}) => ({
      headerStyle: {backgroundColor: '#1b5e20'},
      headerTitleStyle: {color: 'white'},
      headerLeft: (
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={require('../../assets/icon_back.png')} resizeMode='center' style={styles.imgBack}/>
        </TouchableOpacity>
      )
    }),
  }
)


export default HomeStack