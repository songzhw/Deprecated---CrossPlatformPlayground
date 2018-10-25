import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { StatusBar, ScrollView } from 'react-native'
import { ListItem, Separator } from '../components/List'
import ExtStyles from 'react-native-extended-stylesheet'

const styles = ExtStyles.create({
  $blue: '$primaryBlue',
  $orange: '$primaryOrange',
  $green: '$primaryGreen',
  $purple: '$primaryPurple',
})

class Themes extends Component {
  // 不加这个propTypes, 就会报错: "undefined : 'this.props.navigation' "
  static propTypes = {
    navigation: PropTypes.object,
  }
  
  handlePressTheme = (color) => {
    console.log("press theme - ", color)
    // this.props.navigation.goBack()
    const {navigation} = this.props
    navigation.goBack()
    
  }

  render() {
    return (
      <ScrollView>
        <StatusBar translucent={false} barStyle="default"/>
        <ListItem
          text="Blue"
          selected
          checkmark={false}
          onPress={ () => this.handlePressTheme(styles.$blue)}
          bg={styles.$blue}
        />
        <Separator/>
        <ListItem
          text="Orange"
          selected
          checkmark={true}
          onPress={this.handlePressTheme(styles.$orange)}
          bg={styles.$orange}
        />
        <Separator/>
        <ListItem
          text="Purple"
          selected
          checkmark={false}
          onPress={() => this.handlePressTheme(styles.$purple)}
          bg={styles.$purple}
        />
      </ScrollView>
    )
  }

}

export default Themes