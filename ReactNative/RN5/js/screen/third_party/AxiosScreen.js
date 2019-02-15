import React, { Component } from 'react'
import { View, StyleSheet, Text } from 'react-native'

class AxiosScreen extends Component{
  render(){
    return (
      <View style={styles.root}>
        <Text>AxiosScreen Screen</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
})

export default AxiosScreen