import React, {Component} from 'react'
import {View, StyleSheet, Text, Button, ScrollView} from 'react-native'
import {ScreenProps} from "../core/Routes";

interface HomeScreenProps extends ScreenProps{
}

class HomeScreen extends Component<HomeScreenProps> {
  render() {
    return (
      <ScrollView style={styles.root}>
        <HomeButton title="Ui For Test" onPress={this.go2Uies}/>
        <HomeButton title="First Page" onPress={this.go2First}/>
      </ScrollView>
    )
  }

  go2Uies = () => {
    this.props.navigation.navigate('UiesScreen')
  }

  go2First = ()=> {
    this.props.navigation.navigate('FirstScreen')
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

// = = = = = = = = = = = = = = = = = = = = = = = =

interface HomeButtonProps {
  title: string;
  onPress: () => void;
}

class HomeButton extends Component<HomeButtonProps> {
  render() {
    return (
      <View style={styles.aButton}>
        <Button title={this.props.title} onPress={this.props.onPress}/>
      </View>
    )
  }
}

export default HomeScreen