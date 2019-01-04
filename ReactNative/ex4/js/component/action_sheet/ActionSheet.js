import React from 'react'
import {
  View, StyleSheet, Dimensions, TouchableWithoutFeedback, Platform, BackHandler,
  Animated
} from 'react-native'

const {width: screenWidth, height: screenHeight} = Dimensions.get('window')
const contentHeight = 260

class ActionSheet extends React.Component {
  state = {
    isShowing: false,
    y: new Animated.Value(contentHeight)
  }

  componentWillMount() {
    if (Platform.OS === 'android') {
      BackHandler.addEventListener('hardwareBackPress', this.onPressBack)
    }
  }

  componentWillUnmount() {
    if (Platform.OS === 'android') {
      BackHandler.removeEventListener('hardwareBackPress', this.onPressBack)
    }
  }

  onPressBack = () => {
    if (this.state.isShowing) {
      this.dismiss()
      return true  // 我消费了这个事件, 系统就不用管了
    } else {
      return false // 我不处理. 系统来管吧
    }
  }


  render() {
    console.log(`render() ${this.state.isShowing} : ${screenWidth} - ${screenHeight}`)
    if (!this.state.isShowing) {
      return (<View/>)
    }

    return (
      <TouchableWithoutFeedback onPress={() => this.dismiss()}>
        <View style={styles.root}>
          <Animated.View style={[styles.content, {transform: [{translateY: this.state.y}]}]}>
          {this.renderContent()}
          </Animated.View>
        </View>
      </TouchableWithoutFeedback>
    )
  }

  renderContent = () => {
    return (
      <View style={{backgroundColor: '#33691E', height: contentHeight}}>
      </View>
    )
  }
  //<View style={[styles.content, {backgroundColor: '#33691E', transform: [{translateY: 110}]}]}>

  show() {
    if (this.state.isShowing) {
      return
    }
    this.setState({...this.state, isShowing: true}, this._showInternal)
  }

  _showInternal() {
    console.log(`szw _showInternal()`)
    Animated.timing(
      this.state.y,
      {toValue: 0}
    ).start()
  }

  dismiss() {
    this.setState({...this.state, isShowing: false, y: new Animated.Value(contentHeight)})
  }


}

const styles = StyleSheet.create({
  root: {
    // 不加absolute的position, 那结果就不会ActionSheet全屏出现了, 而是依赖flexbox (如垂直的llay)
    position: 'absolute',
    width: screenWidth,
    height: screenHeight,
    backgroundColor: 'black',
    opacity: 0.6  //1是全黑了
  },
  content: {
    width: screenWidth - 20,
    height: contentHeight,
  }
})

export default ActionSheet