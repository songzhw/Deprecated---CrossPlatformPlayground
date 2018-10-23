import React, { Component } from 'react'
import { StatusBar, ScrollView, Platform } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { ListItem, Separator } from '../components/List'

const ICON_PREFIX = Platform.OS === 'ios' ? 'ios' : 'md'
const ICON_COLOR = '#868686'
const ICON_SIZE = 23


class Options extends Component {
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

  handlePressTheme() {
    console.log('click theme')
  }

  handlePressFixer() {
    console.log('click fixer')
  }
}

export default Options