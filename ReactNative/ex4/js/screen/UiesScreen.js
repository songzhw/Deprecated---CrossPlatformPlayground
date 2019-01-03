import React, {Component} from 'react'
import {View, StyleSheet, Text, Button, TouchableOpacity, Image} from 'react-native'

class UiesScreen extends Component {
  index = 0

  render() {
    return (
      <TouchableOpacity onPress={this.props.onPress}>
        <Text>{this.props.title}</Text>
        <Image source={this.props.img}/>
      </TouchableOpacity>
    )
  }
}

export default UiesScreen