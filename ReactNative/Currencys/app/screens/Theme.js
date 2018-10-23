import React, { Component } from 'react'
import { StatusBar, ScrollView } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { ListItem, Separator } from '../components/List'
import ExtStyles from 'react-native-extended-stylesheet'

const styles = ExtStyles.create({
  $blue: '$primaryBlue',
  $orange: '$primaryOrange',
  $green: '$primaryGreen',
  $purple: '$primaryPurple',
})

class Theme extends Component {
  handlePressTheme = () => {
    console.log('click theme')
  }

  render() {
    return (
      <ScrollView>
        <StatusBar translucent={false} barStyle="default"/>
        <ListItem
          text="Blue"
          selected
          checkmark={false}
          onPress={this.handlePressTheme(styles.$blue)}
          bg={styles.$blue}
        />
        <Separator/>
        <ListItem
          text="Orange"
          selected
          checkmark={true}
          onPress={this.handlePressFixer}
          bg={styles.$orange}
        />
        <Separator/>
        <ListItem
          text="Purple"
          selected
          checkmark={false}
          onPress={this.handlePressFixer}
          bg={styles.$purple}
        />
      </ScrollView>
    )
  }

}

export default Theme