import React, { Component } from 'react'
import { View, StyleSheet, Text } from 'react-native'
import {connect} from 'react-redux'

class SettingsScreen extends Component{
  render(){
    return (
      <View style={styles.root}>
        <Text>SettingsScreen Screen</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
})

export default SettingsScreen
// const mapStateToProps = (state) => {
//   return {
//
//   }
// }
//
// export default connect(mapStateToProps)(SettingsScreen)