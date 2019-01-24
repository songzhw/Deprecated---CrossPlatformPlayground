import React, {PureComponent} from 'react'
import {View, Text, Button} from 'react-native'
import {connect as connectFela, createComponent as createFelaComponent} from 'react-fela'
import {connect as connectRedux} from "react-redux";

class FelaDemo7 extends PureComponent {
  state = {
    num: 18
  }

  render() {
    console.log(`szw demo7 : ${JSON.stringify(this.props)}`)
    return (
      <View style={{flex: 1}}>
        <Text style={this.props.styles.txt}> {this.state.num}</Text>
        <Button title="+ 6" onPress={this.onPlusOne}/>
      </View>
    )
  }

  onPlusOne = () => {
    this.setState({num: this.state.num + 6})
  }

}

const mapTheme = ({theme}) => {
  return {
    txt: {
      color: theme.basicText.color,
      fontWeight: theme.basicText.fontWeight,
      fontSize: 18
    }
  }
}

const mapStateToProps = (state) => {
  return {}
}

export default connectRedux(mapStateToProps)(
  connectFela(mapTheme)(FelaDemo7)
)
