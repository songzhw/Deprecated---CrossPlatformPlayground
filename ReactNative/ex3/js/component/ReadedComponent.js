import React from 'react'
import {View, StyleSheet} from 'react-native'

class ReadedComponent extends React.Component {
  state = {}

  render() {
    return (
      <View style={styles.root}>
        <View style={styles.topBg}/>
        <View style={styles.cover}/>
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
    width: 100,
    height: 100,
    position: 'absolute',
    backgroundColor: '#00f',
    alignSelf: 'center',
    top: 75
  }
})

export default ReadedComponent