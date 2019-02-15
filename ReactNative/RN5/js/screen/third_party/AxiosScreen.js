import React, { Component } from 'react'
import { View, StyleSheet, Text } from 'react-native'
import axios from 'axios'

class AxiosScreen extends Component{

  componentWillMount() {
    // resp is : { config, data, headers, request,  }. Real response json is in the "resp.data"
    axios.get("https://www.mocky.io/v2/5c03483b3000002b00bb9408")
      .then((resp) => console.log(resp))
      .catch(error => console.error(error))
      .then( () => console.log("it's done~"))
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