import React, {Component} from 'react';
import {ScrollView, Text, Button, StyleSheet} from 'react-native'

class HomeScreen extends Component {

  componentDidMount() {
    let value = this.getCurrencyRateToRMB('USD')
    console.log(`RMB = ${JSON.stringify(value)}`)
  }

  getCurrencyRateToRMB = (base) => {
    let url = `http://fixer.handlebarlabs.com/latest?base=${base}`
    return fetch(url)
      .then(resp => resp.json())
      .then(resp => {
        console.log(`in resp = ${JSON.stringify(resp)}`)
        return resp
      })
  }


  render() {
    return (
      <ScrollView style={{flex: 1}}>
        <Button style={styles.aButton} title="Redux-saga" onPress={this.go2ReduxSaga}/>
        <Button style={styles.aButton} title="App-State" onPress={this.go2AppState}/>
        <Button style={styles.aButton} title="Async-Storage" onPress={this.go2AsyncStorage}/>
      </ScrollView>
    )
  }

  go2ReduxSaga = () => {
    this.props.navigation.navigate('Redux_Saga')
  }

  go2AppState = () => {
    this.props.navigation.navigate('App_State')
  }

  go2AsyncStorage = () => {
    this.props.navigation.navigate('AsyncStorageScreen')
  }

}

const styles = StyleSheet.create({
  aButton: {
    marginTop: 20,
    fontSize: 30,
    color: 'red',
  },
})

export default HomeScreen