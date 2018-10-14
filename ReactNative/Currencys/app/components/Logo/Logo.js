import React from 'react'
import { View, Text, ImageBackground, Image } from 'react-native'

import styles from './styles'

let cached = Image.prefetch('https://facebook.github.io/react/logo-og.png')
cached.then(
  () => {
    console.log('Load successfully')
  },
  (error) => {
    console.log('load error'+error)
  }
)

const Logo = () => (
  <View style={styles.container}>
    <Image
      source={{ uri: 'https://facebook.github.io/react/logo-og.png' }}
      style={{ width: 200, height: 200 }}
      onLoadStart={() => console.log('start')}
      onLoad={() => console.log('load')}
      onLoadEnd={() => console.log('end')}
    />
    <Text style={styles.text}> Currency Converter</Text>
  </View>
)

export default Logo
