import React, { Component } from 'react'
import { View, StyleSheet, Text } from 'react-native'
import {connect} from 'react-redux'

class ReduxProblemScreen extends Component{
  render(){
    return (
      <View style={styles.root}>
        <Text>ReduxProblemScreen Screen</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
})

const mapStateToProps = (state) => {
  return {

  }
}

export default connect(mapStateToProps)(ReduxProblemScreen)