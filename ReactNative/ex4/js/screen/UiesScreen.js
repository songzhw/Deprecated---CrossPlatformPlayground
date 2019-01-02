import React, {Component} from 'react'
import {View, StyleSheet, Text, Button} from 'react-native'

class UiesScreen extends Component {
  index = 0

  render() {
    return (
      <View style={styles.root}>
        <Text>UiesScreen Screen</Text>
        <Button title="btn" onPress={this.clickBtn}/>
      </View>
    )
  }

  clickBtn = () => {
    index++
  }
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
})

export default UiesScreen