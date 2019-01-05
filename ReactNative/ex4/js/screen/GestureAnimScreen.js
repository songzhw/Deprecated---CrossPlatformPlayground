import React, {Component} from 'react'
import {View, StyleSheet, Text} from 'react-native'
import {connect} from 'react-redux'

const CIRCLE_SIZE = 76

class GestureAnimScreen extends Component {
  state = {bg: 'blue'}

  render() {
    return (
      <View
        style={[styles.circle, {backgroundColor: this.state.bg}]}/>
    )
  }
}

const styles = StyleSheet.create({
  circle: {
    width: CIRCLE_SIZE,
    height: CIRCLE_SIZE,
    borderRadius: CIRCLE_SIZE / 2,
    backgroundColor: 'green',
    position: 'absolute'
  },
})


export default GestureAnimScreen