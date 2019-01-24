import React, {PureComponent} from 'react'
import {View, Text, Button} from 'react-native'
import {connect as connectFela, createComponent as createFelaComponent} from 'react-fela'
import {connect as connectRedux} from "react-redux";

const rules = ({theme}) => ({
  color: theme.basicText.color,
  fontWeight: theme.basicText.fontWeight
})

class FelaDemo7 extends PureComponent {
  state = {
    num: 18
  }

  render() {
    console.log(`szw demo7 : ${JSON.stringify(this.props)}`)
    let Tmp = createFelaComponent(rules, Text)
    return (
      <View style={{flex: 1}}>
        <Tmp>{this.state.num}</Tmp>
        <Button title="+ 6" onPress={this.onPlusOne}/>
      </View>
    )
  }

  onPlusOne = () => {
    this.setState({num: this.state.num + 6})
  }

}

const mapStateToProps = (state) => {
  return {}
}

export default connectRedux(mapStateToProps)(FelaDemo7)
