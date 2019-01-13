import React, {Component} from 'react'
import {View, Text} from 'react-native'
import {connect} from 'react-redux'
import {StyleSheet} from 'fela-tools'

const rules = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: 'red'
  }
})

class FelaDemo extends Component {
  render() {
    return (
      <View>
        <Text>FelaDemo Screen</Text>
      </View>
    )
  }
}


const mapStateToProps = (state) => {
  return {}
}

export default connect(mapStateToProps)(FelaDemo)