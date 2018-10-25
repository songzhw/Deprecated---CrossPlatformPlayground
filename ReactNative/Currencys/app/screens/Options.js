import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { StatusBar, ScrollView, Platform } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { ListItem, Separator } from '../components/List'

const ICON_PREFIX = Platform.OS === 'ios' ? 'ios' : 'md'
const ICON_COLOR = '#868686'
const ICON_SIZE = 23


class Options extends Component {
  // 不加这个propTypes, 就会报错: "undefined : 'this.props.navigation' "
  static propTypes = {
    navigation: PropTypes.object,
  }
  
  // handlePressTheme() { //写成这样, 就识别不了"this.props.navigation"了
  handlePressTheme = () => {
    this.props.navigation.navigate('Themes')
  }
  
  handlePressFixer() {
    console.log('click fixer')
  }
  
  render() {
    return (
      <ScrollView>
        <StatusBar translucent={false} barStyle="default"/>
        <ListItem
          text="Themes"
          onPress={this.handlePressTheme}
          customIcon={
            <Ionicons name={`${ICON_PREFIX}-arrow-forward`} size={ICON_SIZE} color={ICON_COLOR}/>
          }
        />
        <Separator/>
        <ListItem
          text="Fixer"
          onPress={this.handlePressFixer}
          customIcon={
            <Ionicons name={`${ICON_PREFIX}-link`} size={ICON_SIZE} color={ICON_COLOR}/>
          }
        />
      </ScrollView>
    )
  }
  
  
}

export default Options
