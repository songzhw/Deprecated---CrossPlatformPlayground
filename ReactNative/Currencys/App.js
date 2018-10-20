import App from './app/index'

import React from 'react'
import { View, ScrollView, Text, StatusBar } from 'react-native'
const height = StatusBar.currentHeight
const Demo = () => (
  <ScrollView style={{ flex: 1 }}>
    <View style={{ alignSelf: 'baseline' }}>
      <Text style={{ backgroundColor: '#f00', marginTop: height }}>
        What a lovely day!
      </Text>
    </View>
    <Text style={{ height: 1000 }}> New things</Text>
  </ScrollView>
)

export default Demo
