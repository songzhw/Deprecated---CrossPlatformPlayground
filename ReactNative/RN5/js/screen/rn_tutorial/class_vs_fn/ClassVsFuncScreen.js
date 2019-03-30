import React, { Component } from 'react'
import { View, StyleSheet, Text } from 'react-native'
import {connect} from 'react-redux'
import HelloClass from "./HelloClass";

class ClassVsFuncScreen extends Component{
  render(){
    return (
      <View style={styles.root}>
        <Text>ClassVsFuncScreen Screen</Text>
        <HelloClass name="szw"/>
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

export default connect(mapStateToProps)(ClassVsFuncScreen)