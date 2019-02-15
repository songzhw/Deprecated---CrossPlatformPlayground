import React, { Component } from 'react'
import { View, StyleSheet, Text } from 'react-native'
import {connect} from 'react-redux'

class HomeScreen extends Component{
  render(){
    return (
      <View style={styles.root}>
        <Text>HomeScreen Screen</Text>
      </View>
    )
  }
}


class HomeButton extends Component {
  render() {
    return (
      <View style={styles.aButton}>
        <Button title={this.props.title} onPress={this.props.onPress}/>
      </View>
    )
  }
}


const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  aButton: {
    fontSize: 30,
    color: 'red',
    margin: 4
  },
})

const mapStateToProps = (state) => {
  return {

  }
}

// export default connect(mapStateToProps)(HomeScreen)
export default HomeScreen