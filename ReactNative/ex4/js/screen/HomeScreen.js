import React, {Component} from 'react'
import {View, ScrollView, Button, StyleSheet} from 'react-native'

class HomeScreen extends Component {

  render() {
    return (
      <ScrollView style={styles.root}>
        <HomeButton title="Login" onPress={this.go2Login}/>
        <HomeButton title="Schedule" onPress={this.go2Schedule}/>
        <HomeButton title="First Page" onPress={this.go2FirstPage}/>
        <HomeButton title="Refresh + Load More" onPress={this.go2LoadingList}/>
        <HomeButton title="setState() pitfall" onPress={this.go2pitfall1}/>
        <HomeButton title="Challenge One" onPress={this.go2Challenge1}/>
        <HomeButton title="Action Sheet" onPress={this.go2ActionSheet}/>
        <HomeButton title="Gesture + Animation" onPress={this.go2GestureAnim}/>
        <HomeButton title="Custom Navigation" onPress={this.go2CustomNav}/>
      </ScrollView>
    )
  }

  go2CustomNav = () => {
    this.props.navigation.navigate('DynamicTitleScreen', {name: 'home3'})
  }

  go2ActionSheet = () => {
    this.props.navigation.navigate('ActionSheetDemo')
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

  go2LoadingList = () => {
    this.props.navigation.navigate('LoadingListScreen')
  }

  go2pitfall1 = () => {
    this.props.navigation.navigate('SetStatePitfallScreen')
  }

  go2Challenge1 = () => {
    this.props.navigation.navigate('ChallengeOneScreen')
  }

  go2GestureAnim = () => {
    this.props.navigation.navigate('GestureAnimScreen')
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