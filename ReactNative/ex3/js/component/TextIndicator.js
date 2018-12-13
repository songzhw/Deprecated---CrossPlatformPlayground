import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

class TextIndicator extends React.Component {

  render() {
    let { titles } = this.props
    var children = []
    titles.forEach( item => children.push(<Text> {item} </Text>))
    return (
      <View>
        {children}
      </View>
    )
  }
}

const styles = StyleSheet.create({})

export default TextIndicator