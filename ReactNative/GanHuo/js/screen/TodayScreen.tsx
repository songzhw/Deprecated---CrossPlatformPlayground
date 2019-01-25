import React, { Component } from 'react'
import { View, StyleSheet, Text } from 'react-native'
import {connect} from 'react-redux'

class TodayScreen extends Component{
  render(){
    return (
      <View style={styles.root}>
        <Text>TodayScreen Screen</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
})

export default TodayScreen
// const mapStateToProps = (state: any) => {
//   return {
//
//   }
// }
//
// export default connect(mapStateToProps)(TodayScreen)