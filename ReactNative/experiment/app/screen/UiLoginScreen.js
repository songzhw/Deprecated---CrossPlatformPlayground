import React, { Component } from 'react'
import { View, Image, Text, Animated, StyleSheet } from 'react-native'
import { connect } from 'react-redux'

class UiLoginScreen extends Component {
  state = {
    animValue: new Animated.Value(0),
  }

  componentDidMount() {
    // 有enter animation, 所以一进来就可以开始动画了
    Animated.timing(
      this.state.animValue,
      { toValue: 3000, duration: 3000 })
      .start()
  }

  // return a style object with opacity and transform
  fadeIn = (delay) => {
    const { animValue } = this.state

    // Math.min是说delay值为2700时, 应该不超过3000, 所以要改为3000
    let maxValue = Math.min(delay + 500, 3000)
    return {
      // 所以animValue的值在0到delay之时, opacity全为0, 即不显示出来
      opacity: animValue.interpolate({
        inputRange: [delay, maxValue],
        outputRange: [0, 1],
        extrapolate: 'clamp',
      }),
      // 仍是delay开始transform. [20,0]的outputRange就是从下方升上来
      // 但注意, 这里的transform不再是一个对象, 而是一组
      transform: [{
        translateY: animValue.interpolate({
          inputRange: [delay, maxValue],
          outputRange: [20, 0],
          extrapolate: 'clamp',
        }),
      }],
    }

  }

  render() {
    return (
      <View style={styles.root}>
        <Image style={styles.pattenDots} source={require('../../assets/pattern-dots.png')}/>
        <Image style={styles.illustrator} source={require('../../assets/illustration.png')}/>
        <Image source={require('../../assets/logo.png')}/>

        <Animated.View style={this.fadeIn(300)}>
          <Text style={styles.h1}>Facebook Developer Conference</Text>
        </Animated.View>

        <Animated.View style={this.fadeIn(800)}>
          <Text style={styles.h2}> April 18 + 19, San Jose</Text>
        </Animated.View>
      </View>
    )

  }
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
  },
  pattenDots: {
    height: 200,
  },
  illustrator: {
    height: 200,
    position: 'absolute',
    top: 0,
  },
  h1: {
    fontSize: 23,
    marginTop: 30,
  },
  h2: {
    fontSize: 20,
    marginTop: 30,
  },
})

export default connect()(UiLoginScreen)