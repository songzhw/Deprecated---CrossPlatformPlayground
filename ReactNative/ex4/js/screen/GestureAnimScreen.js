import React, {Component} from 'react'
import {View, StyleSheet, Text, PanResponder} from 'react-native'
import {connect} from 'react-redux'

const CIRCLE_SIZE = 76

class GestureAnimScreen extends Component {
  state = {
    style: {backgroundColor: 'green', left: 0, top: 0}
  }
  downLeft = 0
  downTop = 0
  currLeft = 0
  currTop = 0

  render() {
    return (
      <View
        {...this.gesture.panHandlers}
        style={[styles.circle, this.state.style]}/>
    )
  }

  componentWillMount() {
    this.gesture = PanResponder.create({
      onStartShouldSetPanResponder: (evt, gestureState) => true,
      onMoveShouldSetPanResponder: (evt, gestureState) => true,

      onPanResponderGrant: (evt, gestureState) => {
        this.setState({style: {...this.state.style, backgroundColor: 'red'}})
      },
      onPanResponderRelease: (evt, gestureState) => {
        this.downLeft = this.currLeft
        this.downTop = this.currTop
        this.setState({style: {...this.state.style, backgroundColor: 'green'}})
      },

      onPanResponderMove: (evt, gestureState) => {
        this.currLeft = this.downLeft + gestureState.dx
        this.currTop = this.downTop + gestureState.dy
        this.setState({style: {backgroundColor: 'red', left: this.currLeft, top: this.currTop}})
      },

    })
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