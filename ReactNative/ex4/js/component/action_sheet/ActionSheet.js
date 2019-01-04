import React from 'react'
import { View, StyleSheet, Dimensions } from 'react-native'

const {width: screenWidth, height: screenHeight} = Dimensions.get('window')

class ActionSheet extends React.Component{
  state = {
    isShowing: false
  }

  render() {
    console.log(`render() ${this.state.isShowing} : ${screenWidth} - ${screenHeight}`)
    if(!this.state.isShowing){
      return (<View/>)
    }

    return (
      <View style={styles.root}/>
    )
  }

  show(){
    if(this.state.isShowing){
      return
    }
    this.setState({...this.state, isShowing: true}, this._showInternal)
  }

  _showInternal() {
    console.log(`szw _showInternal()`)
  }
}

const styles = StyleSheet.create({
  root:{
    // 不加absolute的position, 那结果就不会ActionSheet全屏出现了, 而是依赖flexbox (如垂直的llay)
    position: 'absolute',
    width: screenWidth,
    height: screenHeight,
    backgroundColor: '#33691E'
  }
})

export default ActionSheet