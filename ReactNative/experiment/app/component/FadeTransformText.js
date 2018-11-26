import React, {Component} from 'react'
import {Animated, Text} from 'react-native'

class FadeTransformText extends Component {

  render(){
    const {style, delayTime, text} = this.prop
    return (
      <Text></Text>
    )
  }

}

/*
不好剥离啊.
一是这个fade要利用LoginScreen中的 this.state.animValue
二是LoginScreen中除了这个FadeTransformText,
还有ImageView也要做类似动作, 这样就会有重复代码
 */