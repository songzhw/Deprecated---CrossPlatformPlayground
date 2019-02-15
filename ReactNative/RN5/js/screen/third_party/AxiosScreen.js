import React, { Component } from 'react'
import { View, StyleSheet, Text } from 'react-native'
import {axios} from '../../core/HttpEngine'

class AxiosScreen extends Component{

  componentWillMount() {
    axios.get("5c03483b3000002b00bb9408")
      .then((resp) => console.log(`\nszw work = ${JSON.stringify(resp.data)}`))
      .then( () => console.log(`szw work done`))
  }

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