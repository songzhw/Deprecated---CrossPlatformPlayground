import React, { Component } from 'react'
import {
  View,
  Text,
  Keyboard,
  Animated,
  Platform,
  StyleSheet,
} from 'react-native'

import styles from './styles'

const ANIMATION_DURATION = 300

class Logo extends Component {
  constructor(props) {
    super(props)
    this.state = {
      containerSize: new Animated.Value(styles.$maxContainerSize),
      imageSize: new Animated.Value(styles.$maxImageSize),
    }
  }

  render() {
    const { containerSize, imageSize } = this.state

    const imageStyle = [
      styles.containerImage,
      { width: containerSize, height: containerSize },
    ]
    const topImgStyle = [styles.logo, { width: imageSize }]

    return (
      <View style={styles.container}>
        <Animated.View style={imageStyle}>
          <Animated.Image
            resizeMode="contain"
            style={[StyleSheet.absoluteFill, imageStyle]}
            source={require('./images/background.png')}
          />
          <Animated.Image
            resizeMode="contain"
            style={topImgStyle}
            source={require('./images/logo.png')}
          />
        </Animated.View>
        <Text style={styles.text}>Currency Converter</Text>
      </View>
    )
  }
}

export default Logo
