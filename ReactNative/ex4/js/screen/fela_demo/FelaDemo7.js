import React, {PureComponent} from 'react'
import {View, Text, Button} from 'react-native'
import {connect as connectFela, createComponent as createFelaComponent} from 'react-fela'
import {connect as connectRedux} from "react-redux";

class FelaDemo7 extends PureComponent {

  renderText(text) {
    return (
      <Text> {text} </Text>
    )
  }

  render() {
    // let MyText = this.renderText('003')
    return (
      <View>
        {this.renderText("001")}
        {this.renderText('bbb')}
        {/*<MyText/>*/}
      </View>
    )
  }
}

export default FelaDemo7