import React, { Component } from 'react'
import { View, StyleSheet, Text } from 'react-native'
import {connect} from 'react-redux'
import {IReduxState} from "../redux/store";

class PlayScreen extends Component{
  render(){
    return (
      <View style={styles.root}>
        <Text>PlayScreen Screen</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
})

const mapStateToProps = (state: IReduxState) => {
  return {

  }
}

export default connect(mapStateToProps)(PlayScreen)