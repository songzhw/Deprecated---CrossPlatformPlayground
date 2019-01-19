import React, { Component } from 'react'
import { View, StyleSheet, Text } from 'react-native'
import {connect} from 'react-redux'

class RecommedScreen extends Component{
  render(){
    return (
      <View style={styles.root}>
        <Text>RecommedHome Screen</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
})

const mapStateToProps = (state: any) => {
  return {

  }
}

export default RecommedScreen
// export default connect(mapStateToProps)(RecommedScreen)