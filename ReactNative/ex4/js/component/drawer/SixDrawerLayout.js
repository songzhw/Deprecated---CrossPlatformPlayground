import React from 'react'
import { View, StyleSheet, Text } from 'react-native'

class SixDrawerLayout extends React.Component{
  state = {}

  render() {
    return (
      <View style={styles.root}>
        {this.props.children}
        <View style={styles.drawerRoot}>
          {this.props.renderDrawer()}
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  drawerRoot: {
    flex: 1,
    backgroundColor: '#0000007e',
    position: 'absolute',
    top: 0,
    bottom: 0,
  }
})

export default SixDrawerLayout