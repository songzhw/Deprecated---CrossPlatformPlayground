import React, {Component} from 'react'
import {View, Text} from 'react-native'
import {connect} from 'react-redux'
import {StyleSheet} from 'fela-tools'

const rules = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: 'red',
    padding: 20
  }
})

class FelaDemo extends Component {
  render() {
    let tmp = this.props.renderer
    console.log(`${JSON.stringify(tmp)}`)
    return (
      <View style={rules.root}>
        <Text>FelaDemo Screen</Text>
      </View>
    )
  }
}

export default FelaDemo

// const mapStateToProps = (state) => {
//   return {}
// }
//
// export default connect(mapStateToProps)(FelaDemo)