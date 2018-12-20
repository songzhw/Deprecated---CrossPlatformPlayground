import React from 'react'
import {View, StyleSheet, Image, Text} from 'react-native'

class ReadedComponent extends React.Component {
  state = {}

  render() {
    return (
      <View style={styles.root}>
        <View style={styles.topBg}/>
        <View style={styles.cover}/>
        <Text style={styles.text}>The Three-Body Problem</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  root: {
    width: 300,
    height: 260,
    backgroundColor: '#0f0'
  },
  topBg: {
    height: 155,
    backgroundColor: '#f00'
  },
  cover: {
    width: 105,
    height: 125,
    position: 'absolute',
    backgroundColor: '#00f',
    alignSelf: 'center',
    top: '21%'
  },
  text: {
    position: 'relative',
    alignSelf: 'center',
    top: 20
  }
})

export default ReadedComponent