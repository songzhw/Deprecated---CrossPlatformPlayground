import React, { Component } from 'react'
import { StatusBar, FlatList, Text, View } from 'react-native'
import currencies from '../data/currencies'
import {ListItem, Separator} from '../components/List'

class CurrencyList extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <StatusBar translucent={false} barStyle="default" />
        {/* renderItem中的完整参数是: {item, index. separator}. 只用其一, 所以要加个{} */}
        <FlatList
          data={currencies}
          renderItem={({ item }) => <Text> {item}</Text>}
          keyExtractor={item => item}
          ItemSeparatorComponent={Separator}
        />
      </View>
    )
  }

  handlePress = () => {
    console.log('press one row')
  }
}

export default CurrencyList
