import {createStackNavigator, Header, NavigationScreenProp} from 'react-navigation'
import HomeScreen from "../screen/HomeScreen";
import {Image, StatusBar, StyleSheet, TouchableOpacity} from "react-native";
import React from "react";
import SettingsScreen from "../screen/SettingsScreen";
import {commonStyles} from "./styles/CommonStyles";
import BeautyDetailScreen from "../screen/detail/BeautyDetailScreen";
import VideoScreen from "../screen/detail/VideoScreen";
import WebDetailScreen from "../screen/detail/WebDetailScreen";


const HomeStack = createStackNavigator(
  {
    HomeScreen,
    SettingsScreen,
    BeautyDetailScreen,
    VideoScreen,
    WebDetailScreen
  },
  {
    headerMode: 'screen',
    navigationOptions: ({navigation}) => ({
      headerStyle: {backgroundColor: '#1b5e20'},
      headerTitleStyle: {color: 'white'},
      headerLeft: (
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={require('../../assets/icon_back.png')} resizeMode='center' style={commonStyles.imgBack}/>
        </TouchableOpacity>
      ),
      headerRight: (
        <TouchableOpacity onPress={() => navigation.navigate('SettingsScreen')}>
          <Image source={require('../../assets/icon_settings.png')} resizeMode='center' style={commonStyles.imgBack}/>
        </TouchableOpacity>
      )
    }),
  }
)


export default HomeStack