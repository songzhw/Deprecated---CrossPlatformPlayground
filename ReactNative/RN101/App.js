import React, {Component} from 'react';
import { AppRegistry, Image, StyleSheet, Text, View } from 'react-native';

class Greeting extends Component {
  render() {
    return (
      <Text> Hello : {this.props.name} </Text>
    )
  }
}

export default class App extends Component {
  render() {
    let pic = { uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg' }

    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <Text>Hello World: </Text>
        <Image source={pic} style={{ width: 386, height: 220 }} />
        <Greeting name="React Native" />
        <Greeting name="Java"/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});



// skip this line if using Create-React-Native-App
// AppRegistry.registerComponent('RN101', ()=>Bananas)