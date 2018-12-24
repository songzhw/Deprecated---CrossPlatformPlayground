import React, { Component } from 'react'
import { View, StyleSheet, Text } from 'react-native'
import {connect} from 'react-redux'
import {fetchChallengeOnePage} from "../redux/reduxChanllengeOne";

class ChallengeOneScreen extends Component{

  componentDidMount() {
    this.props.dispatch(fetchChallengeOnePage(1))
  }

  render(){
    return (
      <View style={styles.root}>
        <Text>ChallengeOneScreen Screen</Text>
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
  console.log(`szw challenge01 : state = ${JSON.stringify(state)}`)
  return {

  }
}

export default connect(mapStateToProps)(ChallengeOneScreen)