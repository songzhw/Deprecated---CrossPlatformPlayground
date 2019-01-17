import React, {PureComponent} from 'react'
import {View, Text, Button} from 'react-native'
import {StyleSheet} from 'fela-tools'
import {FelaRenderer} from 'react-fela'

const rules = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#ccc',
  },
  size: props => ({
    fontSize: props.num
  })
})

class FelaDemo extends PureComponent {
  state = {
    id: 100,
    num: 18
  }

  render() {
    return (
      <FelaRenderer>
        {renderer =>
          <View style={renderer.renderRule(rules.root)}>
            <Text style={renderer.renderRule(rules.size)}> {this.state.num} </Text>
            <Button title="+ 1" onPress={this.onPlusOne}/>
          </View>
        }
      </FelaRenderer>
    )
  }

  onPlusOne = () => {
    this.setState({num: this.state.num + 3})
  }
}

export default FelaDemo


// const mapStateToProps = (state) => {
//   return {}
// }
//
// export default connect(mapStateToProps)(FelaDemo)