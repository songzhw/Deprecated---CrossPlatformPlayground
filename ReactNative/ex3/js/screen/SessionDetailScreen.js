import React, { Component } from 'react'
import { View, StyleSheet, Text } from 'react-native'
import {connect} from 'react-redux'

class SessionDetailScreen extends Component{
  render(){
    return (
      <View>
        <Text>SessionDetailScreen Screen</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({})

const mapStateToProps = (state) => {
  return {

  }
}

export default connect(mapStateToProps)(SessionDetailScreen)