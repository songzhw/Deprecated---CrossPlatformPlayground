import React from 'react'
import {View, StyleSheet, TouchableWithoutFeedback, Animated} from 'react-native'

class SixDrawerLayout extends React.Component {
  state = {
    isOpen : false,
    valueForAnim: new Animated.Value(0)
  }

  componentWillMount() {
    const {valueForAnim} = this.state
    valueForAnim.addListener(({value}) => {
      const isDrawerOpen = value > 0
      if(isDrawerOpen !== this.state.isOpen){
        this.setState({...this.state,  isOpen: isDrawerOpen})
      }
    })
  }


  render() {
    let {drawerWidth} = this.props
    const translate = this.getAnimStyle([-drawerWidth, 0])
    const animatedTranslate = {transform: [{translateX: translate}]}
    const opacity = this.getAnimStyle([0, 0.7])
    const animatedOpacity = {opacity: opacity}

    const clickableStatus = this.state.isOpen ? "auto" : "none"
    console.log(`szw render() : ${clickableStatus}`)

    return (
      <View style={styles.root}>
        {/*content*/}
        <View style={styles.contentRoot}>
          {this.props.children}
        </View>

        {/*drawer*/}
        <View style={styles.drawerRoot}>
          <Animated.View style={[styles.drawerContainer,
            {width: this.props.drawerWidth},
            animatedTranslate]}>
            {this.props.renderDrawer()}
          </Animated.View>

          <TouchableWithoutFeedback pointerEvents={clickableStatus} onPress={this.toggle} >
            <Animated.View pointerEvents={clickableStatus}
              style={[styles.drawerShadow, {left: this.props.drawerWidth}, animatedOpacity]}/>
          </TouchableWithoutFeedback>
        </View>

      </View>

    )
  }

  getAnimStyle = (outputRange) => {
    let {valueForAnim} = this.state
    const animStyle = valueForAnim.interpolate({
      inputRange: [0, 1],
      outputRange: outputRange,
      extrapolate: 'clamp'
    })
    return animStyle
  }


  toggle = () => {
    if (this.state.isOpen) {
      this.closeDrawer()
    } else {
      this.openDrawer()
    }
  }

  closeDrawer = () => {
    Animated.timing(this.state.valueForAnim,
      {toValue: 0, duration: 300})
      .start()
  }

  openDrawer = () => {
    console.log(`szw open drawer`)
    Animated.timing(this.state.valueForAnim,
      {toValue: 1, duration: 300})
      .start()
  }

}

const styles = StyleSheet.create({
  root: {
    flex: 1,

  },
  contentRoot: {
    flex: 1,
    zIndex: 0
  },
  drawerRoot: {
    // backgroundColor: '#0000007e',
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
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

// [TODO]
// 1. check only one Children : React.Children.only()
// 2. overlay extends to the whole screen
// 3. click event in the drawer
// 3. PanResponse