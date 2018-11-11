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
    let value = await AsyncStorage.getItem(SAVED_EMAIL_KEY)
    this.setState({email: value})
  }

  render() {
    return (
      <View>
        <TextInput value={this.state.email}
                   onChangeText={email => this.setState({email: email})}
        />
        <Button title="log in" onPress={this.onSave}/>
      </View>
    )
  }

  onSave = async () => {
    let email = this.state.email
    let value = `(saved) ${email}`
    try {
      await AsyncStorage.setItem(SAVED_EMAIL_KEY, value)
    } catch (err){
      console.error(`AsyncStorage error on saving: ${err.message}`)
    }
  }

}

export default AsyncStorageScreen