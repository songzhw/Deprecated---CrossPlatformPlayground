import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { StatusBar, FlatList, Text, View } from 'react-native'
import currencies from '../data/currencies'
import { ListItem, Separator } from '../components/List'
import { connect } from 'react-redux'
import {
  changeBaseCurrency, changeQuoteCurrency,
} from '../actions/currencies'

const DEFAULT_CURRENCY = 'CAD'

class CurrencyList extends Component {
  static propTypes = {
    navigation: PropTypes.object,
    dispatch: PropTypes.func,
  }
  
  handlePress = (currency) => {
    const { navigation, dispatch } = this.props
    const { type } = navigation.state.params
    if (type === 'base') {
      dispatch(changeBaseCurrency(currency))
    } else {
      dispatch(changeQuoteCurrency(currency))
    }
    
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
              onPress={() => this.handlePress(item)}
            />
          )}
          keyExtractor={item => item}
          ItemSeparatorComponent={Separator}
        />
      </View>
    )
  }
  
  componentWillMount() {
    console.log('CurrencyList componentWillMount')
  }
  
  componentDidMount() {
    console.log('CurrencyList componentDidMount')
  }
  
  componentWillUnmount() {
    console.log('CurrencyList componentWillUnmount')
  }
  
}

export default connect()(CurrencyList)
