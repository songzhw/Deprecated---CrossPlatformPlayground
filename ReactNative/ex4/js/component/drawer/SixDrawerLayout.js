import React from 'react'
import { View, StyleSheet, Text } from 'react-native'

class SixDrawerLayout extends React.Component{
  state = {}

  render() {
    return (
      <View style={styles.root}>
        <Text style={{zIndex: 1, backgroundColor: 'red', fontSize: 40}}> Six Drawer Layout</Text>
        <Text style={{zIndex: 30,  backgroundColor: 'green', fontSize: 40, width: 150, position: 'absolute'}}> Second Line</Text>
        <Text style={{zIndex: 10,  backgroundColor: 'blue', fontSize: 40, width: 200, position: 'absolute'}}> Third Line</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: 'transparent'
  },
  contentRoot: {
    flex: 1,
  }
})

export default SixDrawerLayout