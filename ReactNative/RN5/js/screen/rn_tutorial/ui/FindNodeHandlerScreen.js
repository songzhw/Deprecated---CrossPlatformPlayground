import React, { Component } from 'react'
import { View, StyleSheet, Text, Button, findNodeHandle, UIManager } from 'react-native'

/*
UIManager.measure接受两个参数，
  第一个参数是通过findNodeHandle获取的组件节点，
  第二个参数是获取成功的回调，回调有6个参数：
    x，y表示组件的相对位置，
    width，height表示组件的宽度和高度，
    pageX，pageY表示组件相对于屏幕的绝对位置。
 */
class FindNodeHandlerScreen extends Component{
  render(){
    return (
      <View ref={r => (this.rootView = r)} style={styles.root} >
        <Text ref={r => (this.textView = r)}>FindNodeHandlerScreen Screen</Text>
        <Button title="get size" onPress={this.pressButton}/>
      </View>
    )
  }

  pressButton = ()=>{
    this.getSize(this.rootView)
      .then( ({x, y, width, height, pageX, pageY}) => {
        console.log(`szw rootView : x = ${x}, y= ${y}, width= ${width}, height= ${height}, pageX= ${pageX}, pageY= ${pageY}}`)
    })

    this.getSize(this.textView)
      .then( ({x, y, width, height, pageX, pageY}) => {
        console.log(`szw textView : x = ${x}, y= ${y}, width= ${width}, height= ${height}, pageX= ${pageX}, pageY= ${pageY}}`)
      })

  }

  getSize = (ref) => {
    const view = findNodeHandle(ref)
    return new Promise( resolve => {
      UIManager.measure(view, (x, y, width, height, pageX, pageY) => {
        resolve({x, y, width, height, pageX, pageY})
      })
    })
  }
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
})

export default FindNodeHandlerScreen
/*
不知道为什么, rootview全是undefined:

szw rootView : x = undefined, y= undefined, width= undefined, height= undefined, pageX= undefined, pageY= undefined}

szw textView : x = 0, y= 0, width= 411.4285583496094, height= 19.428571701049805, pageX= 0, pageY= 56}
 */