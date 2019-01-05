import React, {Component} from 'react'
import {View, StyleSheet, Text, PanResponder} from 'react-native'
import {connect} from 'react-redux'

const CIRCLE_SIZE = 76

class GestureAnimScreen extends Component {
  state = {bg: 'green'}

  render() {
    return (
      <View
        {...this.gesture.panHandlers}
        style={[styles.circle, {backgroundColor: this.state.bg}]}/>
    )
  }

  componentWillMount() {
    this.gesture = PanResponder.create({
      onStartShouldSetPanResponder: (evt, gestureState) => true,
      onMoveShouldSetPanResponder: (evt, gestureState) => true,

      onPanResponderGrant: (evt, gestureState) => {
        this.setState({...this.state, bg: 'red'})
      },
      onPanResponderRelease: (evt, gestureState) => {
        this.setState({...this.state, bg: 'green'})
      },

      onPanResponderMove: (evt, gestureState) => {
        // The most recent move distance is gestureState.move{X,Y}

        // The accumulated gesture distance since becoming responder is
        // gestureState.d{x,y}
      },
      onPanResponderTerminationRequest: (evt, gestureState) => true,

      onPanResponderTerminate: (evt, gestureState) => {
        // Another component has become the responder, so this gesture
        // should be cancelled
      },
      onShouldBlockNativeResponder: (evt, gestureState) => {
        // Returns whether this component should block native components from becoming the JS
        // responder. Returns true by default. Is currently only supported on android.
        return true;
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