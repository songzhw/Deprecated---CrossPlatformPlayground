import React from 'react'
import {View, StyleSheet, Dimensions, TouchableWithoutFeedback, Platform, BackHandler} from 'react-native'

const {width: screenWidth, height: screenHeight} = Dimensions.get('window')

class ActionSheet extends React.Component {
  state = {
    isShowing: false
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

  onPressBack = ()=>{
    if(this.state.isShowing){
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
          <View style={styles.content}>
          </View>
        </View>
      </TouchableWithoutFeedback>
    )
  }

  show() {
    if (this.state.isShowing) {
      return
    }
    this.setState({...this.state, isShowing: true}, this._showInternal)
  }

  _showInternal() {
    console.log(`szw _showInternal()`)
  }

  dismiss() {
    this.setState({...this.state, isShowing: false})
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
    backgroundColor: '#33691E',
    width: screenWidth,
    height: 260,
    position: 'absolute',
    bottom: 0
  }
})

export default ActionSheet