import React from 'react'
import { View, StyleSheet } from 'react-native'

class TextIndicator extends React.Component{

  render() {
    let {titles} = this.props
    return (
      <View>
        {
          titles.forEach( title => <Text> {title} </Text>)
        }
      </View>
    )
  }
}

const styles = StyleSheet.create({})

export default TextIndicator