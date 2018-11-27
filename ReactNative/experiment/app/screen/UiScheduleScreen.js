import React, { Component } from 'react'
import { View, StyleSheet, Text } from 'react-native'
import {connect} from 'react-redux'

class UiScheduleScreen extends Component{
  render(){
    return (
      <View>
        <Text>Schedule Screen</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({})

export default connect()(UiScheduleScreen)