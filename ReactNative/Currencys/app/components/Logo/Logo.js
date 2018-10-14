import React from 'react'
import { View, Text, ImageBackground, Image } from 'react-native'

import styles from './styles'

const Logo = () => (
  <View style={styles.container}>
    <Image
      source={{ uri: 'https://facebook.github.io/react/logo-og.png' }}
      style={{ width: 200, height: 200 }}
      blurRadius={5}
    />
    <Text style={styles.text}> Currency Converter</Text>
  </View>
)

export default Logo
