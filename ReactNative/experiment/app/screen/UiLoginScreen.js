import React, { Component } from 'react'
import { View, Image, Text, Animated, StyleSheet } from 'react-native'
import { connect } from 'react-redux'

class UiLoginScreen extends Component {
  state = {
    animValue: new Animated.Value(0),
  }

  render() {
    return (
      <View style={styles.root}>
        <Image style={styles.pattenDots} source={require('../../assets/pattern-dots.png')}/>
        <Image style={styles.illustrator} source={require('../../assets/illustration.png')}/>
        <Image source={require('../../assets/logo.png')}/>

      </View>
    )

  }
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center'
  },
  pattenDots: {
    height: 200,
  },
  illustrator: {
    height: 200,
    position: 'absolute',
    top: 0
  },
})

export default connect()(UiLoginScreen)