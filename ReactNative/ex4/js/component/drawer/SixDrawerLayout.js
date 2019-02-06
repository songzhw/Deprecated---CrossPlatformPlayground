import React from 'react'
import {View, StyleSheet, TouchableWithoutFeedback, Animated} from 'react-native'

class SixDrawerLayout extends React.Component {
  isOpen = true  //TODO change the value to false later !
  state = {
    valueForAnim: new Animated.Value(0)
  }

  render() {
    let {valueForAnim} = this.state
    let {drawerWidth} = this.props

    const opacity = valueForAnim.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 0.7],
      extrapolate: 'clamp'
    })
    const animatedOpacity = {opacity: opacity}

    const translate = valueForAnim.interpolate({
      inputRange: [0, 1],
      outputRange: [-drawerWidth, 0],
      extrapolate: 'clamp'
    })
    const animatedTranslate = {transform: [{translateX: translate}]}

    return (
      <View style={styles.root}>
        {this.props.children}

        <View style={styles.drawerRoot}>
          <Animated.View style={[styles.drawerContainer,
            {width: this.props.drawerWidth},
            animatedTranslate]}>
            {this.props.renderDrawer()}
          </Animated.View>

          <TouchableWithoutFeedback onPress={this.closeDrawer}>
            <Animated.View style={[styles.drawerShadow, {left: this.props.drawerWidth}, animatedOpacity]}/>
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

    Animated.timing(this.state.valueForAnim,
      {toValue: 1, duration: 500})
      .start()
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
    backgroundColor: '#000'
  }
})

export default SixDrawerLayout