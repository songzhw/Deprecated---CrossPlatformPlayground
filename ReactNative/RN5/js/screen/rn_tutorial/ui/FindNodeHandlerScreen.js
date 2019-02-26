import React, { Component } from 'react'
import { View, StyleSheet, Text } from 'react-native'
import {connect} from 'react-redux'

class FindNodeHandlerScreen extends Component{
  render(){
    return (
      <View style={styles.root}>
        <Text>FindNodeHandlerScreen Screen</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
})

export default FindNodeHandlerScreen