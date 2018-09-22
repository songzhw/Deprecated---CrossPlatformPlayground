import React, {Component} from 'react';
import { AppRegistry, Image, StyleSheet, Text, View } from 'react-native';

export default class App extends Component {
  render() {
    let pic = { uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg' }

    return (
      <View style={styles.container}>
        <Text>Hello World </Text>
        <Image source={pic} style={{ width: 386, height: 220 }} />
        <Greeting name="React Native" id="23"/>
        <Greeting name="Java" id="100"/>
        <Blink myText="I am React Native"/>
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

class Greeting extends Component {
  render() {
    return (
      <Text> Hello : {this.props.name}  - {this.props.id} </Text>
    )
  }
}

// may use Redux or Mobx to modify the state rather than calling "setState()" directly
class Blink extends Component {
  constructor(props){
    super(props)
    this.state = {isShowingText : true}

    setInterval( () => {
      this.setState( oldState => {
        return {isShowingText: !oldState.isShowingText}
      })
    }, 1200)
  }

  render(){
    let display = this.state.isShowingText ? this.props.myText : ' '
    return (
      <Text> {display} </Text>
    )
  }
}

// skip this line if using Create-React-Native-App
// AppRegistry.registerComponent('RN101', ()=>Bananas)