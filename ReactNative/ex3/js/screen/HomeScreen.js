import React, {Component} from 'react';
import {ScrollView, Button, StyleSheet} from 'react-native'

class HomeScreen extends Component {

  render() {
    return (
      <ScrollView style={{flex: 1}}>
        <Button style={styles.aButton} title="Login" onPress={this.go2Login}/>
          <Button style={styles.aButton} title="Schedule" onPress={this.go2Schedule}/>
      </ScrollView>
    )
  }

  go2Login = () => {
    this.props.navigation.navigate('LoginScreen')
  }

    go2Schedule = () => {
        this.props.navigation.navigate('ScheduleScreen')
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