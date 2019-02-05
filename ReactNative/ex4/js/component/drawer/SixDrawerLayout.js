import React from 'react'
import {View, StyleSheet, TouchableWithoutFeedback} from 'react-native'

class SixDrawerLayout extends React.Component {
  isOpen = true  //TODO change the value to false later !
  state = {
    transform: 0
  }

  render() {
    return (
      <TouchableWithoutFeedback onPress={this.onPressEmptyBackground}>
        <View style={styles.root}>
          {this.props.children}
          <View style={[styles.drawerRoot, {width: this.props.drawerWidth, transform: [{translateX: this.state.transform}]}]}>
            {this.props.renderDrawer()}
          </View>
        </View>
      </TouchableWithoutFeedback>
    )
  }

  onPressEmptyBackground = () => {
    this.closeDrawer()
  }

  toggle = () => {
    if (this.isOpen) {
      this.closeDrawer()
    } else {
      this.openDrawer()
    }
  }

  closeDrawer = () => {
    if (this.isOpen) {
      this.setState({...this.state, transform: -1 * this.props.drawerWidth})
    }
  }

  openDrawer = () => {
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