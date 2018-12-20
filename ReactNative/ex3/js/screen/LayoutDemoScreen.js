import React, { Component } from 'react'
import { View, StyleSheet, Text } from 'react-native'
import {connect} from 'react-redux'
import ReadedComponent from "../component/ReadedComponent";

class LayoutDemoScreen extends Component{
  render(){
    return (
      <View style={styles.root}>
        <ReadedComponent/>
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

export default connect(mapStateToProps)(LayoutDemoScreen)
