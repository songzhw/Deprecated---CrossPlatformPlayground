import React from 'react'
import { View, StyleSheet, Text } from 'react-native'

class SixDrawerLayout extends React.Component{
  state = {}

  render() {
    return (
      <View style={styles.root}>
        <Text style={{ backgroundColor: 'red', fontSize: 40, width: 200, position: 'absolute', top: 0}}> Six Drawer Layout</Text>
        <Text style={{ backgroundColor: 'green', fontSize: 40, width: 150, position: 'absolute', top: 0}}> Second Line</Text>
        <Text style={{ backgroundColor: 'blue', fontSize: 40, width: 300, position: 'absolute', top: 0}}> Third Line</Text>
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