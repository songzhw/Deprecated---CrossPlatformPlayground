import React, {Component} from 'react'
import {View, TextInput, Button, StyleSheet, AsyncStorage} from 'react-native'

const SAVED_EMAIL_KEY = '@SAVED_EMAIL_KEY'

class AsyncStorageScreen extends Component {
  state = {
    email: ''
  }

  componentDidMount() {
    this.onInit()
      .done()
  }

  onInit = async () => {
    let value = await AsyncStorage.getItem()
    this.setState({email: value})
  }

  render() {
    return (
      <View>
        <TextInput value={this.state.email}
                   onChangeText={email => this.state({email: email})}
        />
        <Button title="log in" onPress={this.onSave}/>
      </View>
    )
  }

  onSave = async () => {
    let email = this.state.email
    console.log(`onSave(${email})`)
    await AsyncStorage.setItem(SAVED_EMAIL_KEY, email)
  }

}

export default AsyncStorageScreen