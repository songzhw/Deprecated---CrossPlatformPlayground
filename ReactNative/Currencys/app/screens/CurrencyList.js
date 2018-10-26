import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { StatusBar, FlatList, Text, View } from 'react-native'
import currencies from '../data/currencies'
import { ListItem, Separator } from '../components/List'
import {withNavigationFocus} from 'react-navigation'

const DEFAULT_CURRENCY = 'CAD'

class CurrencyList extends Component {
  static propTypes = {
    navigation: PropTypes.object,
  }

  handlePress = () => {
    const {navigation} = this.props
    navigation.goBack(null)
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <StatusBar translucent={false} barStyle="light-content"/>
        {/* renderItem中的完整参数是: {item, index. separator}. 只用其一, 所以要加个{} */}
        <FlatList
          data={currencies}
          renderItem={({ item }) => (
            <ListItem
              text={item}
              selected={item == DEFAULT_CURRENCY}
              onPress={this.handlePress}
            />
          )}
          keyExtractor={item => item}
          ItemSeparatorComponent={Separator}
        />
      </View>
    )
  }
  
  componentWillMount() {
    console.log("CurrencyList componentWillMount")
  }
  componentDidMount() {
    console.log("CurrencyList componentDidMount")
  }
  componentWillUnmount() {
    console.log("CurrencyList componentWillUnmount")
  }

}

export default withNavigationFocus(CurrencyList)
