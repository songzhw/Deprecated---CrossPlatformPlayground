import React, { Component } from 'react'
import { View, StyleSheet, Text } from 'react-native'
import {connect} from 'react-redux'
import SixDrawerLayout from "../../component/drawer/SixDrawerLayout";

class MyDrawerDemoScreen extends Component{
  render(){
    return (
      <View style={styles.root}>
        <SixDrawerLayout/>
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

export default connect(mapStateToProps)(MyDrawerDemoScreen)