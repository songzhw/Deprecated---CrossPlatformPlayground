import React from 'react'
import {View, StyleSheet, TouchableWithoutFeedback} from 'react-native'

class SixDrawerLayout extends React.Component {
  isOpen = true  //TODO change the value to false later !
  state = {
    transform: 0
  }

  render() {

    return (
      <View style={styles.root}>
        {this.props.children}

        <View style={styles.drawerRoot}>
          {/*<View style={[styles.drawerContainer,*/}
            {/*{width: this.props.drawerWidth}]}>*/}
            {/*{this.props.renderDrawer()}*/}
          {/*</View>*/}

          <TouchableWithoutFeedback onPress={this.closeDrawer}>
            <View style={[styles.drawerShadow, {left: this.props.drawerWidth}]}/>
          </TouchableWithoutFeedback>

        </View>
      </View>

    )
  }


  toggle = () => {
    if (this.isOpen) {
      this.closeDrawer()
    } else {
      this.openDrawer()
    }
  }

  closeDrawer = () => {
    console.log(`szw close drawer`)
    // if (this.isOpen) {
    //   this.setState({...this.state, transform: -1 * this.props.drawerWidth})
    // }
    // this.isOpen = !this.isOpen
  }

  openDrawer = () => {
  }

}

const styles = StyleSheet.create({
  root: {
    flex: 1,

  },
  drawerRoot: {
    // backgroundColor: '#0000007e',
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0
  },
  drawerContainer: {
    flex: 1
  },
  drawerShadow: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    backgroundColor: '#0000007e'
  }
})

export default SixDrawerLayout