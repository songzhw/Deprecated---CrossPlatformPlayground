import React from 'react'
import {View, StyleSheet, TouchableWithoutFeedback} from 'react-native'

class SixDrawerLayout extends React.Component {
  state = {}

  render() {
    return (
      <TouchableWithoutFeedback onPress={this.onPressEmptyBackground} style={styles.root}>
        {this.props.children}
        <View style={styles.drawerRoot}>
          {this.props.renderDrawer()}
        </View>
      </TouchableWithoutFeedback>
    )
  }

  onPressEmptyBackground = () => {
    console.log(`szw press bg`)
  }
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#0000007e',
  },
  drawerRoot: {
    position: 'absolute',
    top: 0,
    bottom: 0,
  }
})

export default SixDrawerLayout