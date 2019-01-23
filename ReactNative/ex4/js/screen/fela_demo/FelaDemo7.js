import React, {PureComponent} from 'react'
import {View, Text, Button} from 'react-native'
import {connect as connectFela,} from 'react-fela'
import {connect as connectRedux} from "react-redux";

const rules = ({propFontSize}) => ({
  root: {
    backgroundColor: '#43a047',
  },
  size: {
    color: 'blue',
    fontSize: propFontSize
  }
})

class Tmp2 extends PureComponent {
  render(){
    console.log(`szw fela7 props = ${JSON.stringify(this.props)}`)
    let {txt, styles} = this.props
    return (
      <View style={styles.root}>
        <Text style={styles.size}> {txt} </Text>
      </View>
    )
  }
}

const ConnectedTmp = connectFela(rules)(Tmp2)


class FelaDemo7 extends PureComponent {
  state = {
    num: 18
  }

  render() {
    console.log(`szw demo7 : ${JSON.stringify(this.props)}`)
    return (
      <View style={{flex: 1}}>
        <ConnectedTmp propFontSize={this.state.num} txt={this.state.num}/>
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
