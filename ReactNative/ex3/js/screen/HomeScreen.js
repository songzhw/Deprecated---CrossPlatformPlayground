import React, {Component} from 'react'
import {View, ScrollView, Button, StyleSheet} from 'react-native'

class HomeScreen extends Component {

  render() {
    return (
      <ScrollView style={styles.root}>
        <HomeButton title="Login" onPress={this.go2Login}/>
        <HomeButton title="Schedule" onPress={this.go2Schedule}/>
        <HomeButton title="First Page" onPress={this.go2FirstPage}/>
        <HomeButton title="Challenge One" onPress={this.go2Challenge1}/>
      </ScrollView>
    )
  }

  go2Login = () => {
    this.props.navigation.navigate('LoginScreen')
  }

  go2Schedule = () => {
    this.props.navigation.navigate('ScheduleScreen')
  }

  go2FirstPage = () => {
    this.props.navigation.navigate('FirstScreen')
  }

  go2Challenge1 = () => {
    this.props.navigation.navigate('ChallengeOneScreen')
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

class HomeButton extends Component {
  render() {
    return (
      <View style={styles.aButton}>
        <Button title={this.props.title} onPress={this.props.onPress}/>
      </View>
    )
  }
}

export default HomeScreen