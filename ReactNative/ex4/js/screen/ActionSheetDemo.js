import React, {Component} from 'react'
import {View, StyleSheet, Button, TextInput} from 'react-native'
import {connect} from 'react-redux'

class ActionSheetDemo extends Component {
  render() {
    return (
      <View style={styles.root}>
        <TextInput style={styles.input} placeholder="edit text / text input"/>
        <Button title="action sheet" onPress={this.press}/>
      </View>
    )
  }

  press = () => {

  }
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  input: {
    backgroundColor: 'white',
    marginBottom: 20,
    fontSize: 20,
    padding: 10
  }
})


export default ActionSheetDemo