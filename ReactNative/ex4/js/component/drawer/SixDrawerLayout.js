import React from 'react'
import {View, StyleSheet, TouchableWithoutFeedback, Animated, PanResponder} from 'react-native'

class SixDrawerLayout extends React.Component {
  MIN_SWIPE_DISTANCE = 5

  state = {
    isOpen: false,
    valueForAnim: new Animated.Value(0)
  }

  componentWillMount() {
    const {valueForAnim} = this.state
    valueForAnim.addListener(({value}) => {
      const isDrawerOpen = value > 0
      if (isDrawerOpen !== this.state.isOpen) {
        this.setState({...this.state, isOpen: isDrawerOpen})
      }
    })

    this.panResponder = PanResponder.create({
      //用户开始触摸屏幕的时候，是否愿意成为响应者；默认返回false，无法响应，当返回true的时候则可以进行之后的事件传递
      onStartShouldSetPanResponder: (evt, gestureState) => true,
      //在每一个触摸点开始移动的时候，再询问一次是否响应触摸交互；
      onMoveShouldSetPanResponder: this.onShouldSetPanResponder,


      //开始手势操作，也可以说按下去。给用户一些视觉反馈，让他们知道发生了什么事情！（如：可以修改颜色）
      onPanResponderGrant: this.onPanResponderGrant,

      //最近一次的移动距离.如:(获取x轴y轴方向的移动距离 gestureState.dx,gestureState.dy)
      onPanResponderMove: this.onPanResponderMove,

      //用户放开了所有的触摸点，且此时视图已经成为了响应者。
      onPanResponderRelease: this.onPanResponderRelease,


      //另一个组件已经成为了新的响应者，所以当前手势将被取消。
      onPanResponderTerminate: () => {
      },
      onPanResponderTerminationRequest: () => false,
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
      <View style={styles.root} {...this.panResponder.panHandlers}>
        {/*content*/}
        <View style={styles.contentRoot}>
          {this.props.children}
        </View>

        {/*drawer*/}
        <TouchableWithoutFeedback pointerEvents={clickableStatus} onPress={this.toggle}>
          <Animated.View pointerEvents={clickableStatus}
                         style={[styles.drawerShadow, animatedOpacity]}/>
        </TouchableWithoutFeedback>

        <View style={styles.drawerRoot}>
          <Animated.View style={[styles.drawerContainer,
            {width: this.props.drawerWidth},
            animatedTranslate]}>
            {this.props.renderDrawer()}
          </Animated.View>
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

  // = = = = = = = = = = = = PanResponder = = = = = = = = = = = = =
  // moveX相当于安卓中的ev.getX(), 当前位置
  //TODO this method does not get called ?!
  onShouldSetPanResponder = (ev, {moveX, dx, dy}) => {
    console.log(`szw onShouldSetPan(${Math.round(moveX)}, ${dx}, ${dy})`)
    if (Math.abs(dx) < this.MIN_SWIPE_DISTANCE) {
      return false
    }
    return true
  }

  onPanResponderGrant = () => {
    console.log(`szw onPanGrant`)
  }

  onPanResponderMove = (ev, {moveX}) => {
    let ratio = this.getRatio(moveX)
    this.state.valueForAnim.setValue(ratio)
    console.log(`szw onMove(${Math.round(moveX)}) ; ratio = ${ratio}`)

  }

  onPanResponderRelease = ({moveX, vx}) => {
    console.log(`szw onRelease(${moveX}, vx = ${vx})`)

  }

  getRatio(x){
    return x / this.props.drawerWidth
  }

  // = = = = = = = = = = = = PanResponder = = = = = = = = = = = = =

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
    left: 0,
    backgroundColor: '#000'
  }
})

export default SixDrawerLayout

// [TODO]
// 3. PanResponse