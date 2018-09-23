import React, { Component } from 'react';
import { Image, StyleSheet, Text, View, TextInput, Button, Alert, ScrollView, FlatList, SectionList } from 'react-native';

export default class App extends Component {
  render() {
    let pic = { uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg' }

    return (
      <ScrollView >
        <Text style={{ color: 'red', fontSize: 23 }}>Hello World </Text>
        <Pizza style={{ width: 200, height: 120 }} />
        <Image source={pic} style={{ width: 386, height: 220 }} />
        <Greeting name="React Native" id="23" />
        <Blink myText="I am React Native" />
        <Button title="click me" onPress={() => Alert.alert('Clicked!')} />
        <FlatList data={[{ key: 'Apple' }, { key: 'Banana' }, { key: 'Cat' }]}
          renderItem={({ item }) => <Text>{item.key}</Text>} />
        <ContactInfo />
      </ScrollView>
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
  sectionHeader: {
    backgroundColor: 'rgba(247,247,247,1.0)',
    fontWeight: 'bold'
  }
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
  constructor(props) {
    super(props)
    this.state = { isShowingText: true }

    setInterval(() => {
      this.setState(oldState => {
        return { isShowingText: !oldState.isShowingText }
      })
    }, 1200)
  }

  render() {
    let display = this.state.isShowingText ? this.props.myText : ' '
    return (
      <Text> {display} </Text>
    )
  }
}

class Pizza extends Component {
  constructor(props) {
    super(props)
    this.state = { text: '' }
  }

  render() {
    return (
      <View>
        <TextInput placeholder="pizaa" onChangeText={(text) => this.setState({ text })} />
        <Text>
          {this.state.text
            .split(' ')
            .map((word) => word && '🍕')
            .join('-')
          }
        </Text>
      </View>
    )
  }
}

class ContactInfo extends Component {
  render() {
    return (
      <View style={styles.container}>
        <SectionList
          sections={[
            { title: "A", data: ['Apple', "Alien"] },
            { title: "B", data: ['Bing', "Bang", "bat", "batman"] }
          ]}
          renderItem={({ item }) => <Text> {item} </Text>}
          renderSectionHeader={({ section }) => <Text style={styles.sectionHeader}> {section.title} </Text>}
          keyExtractor={(item, index) => index}
        />
      </View>
    )
  }
}


// skip this line if using Create-React-Native-App
// AppRegistry.registerComponent('RN101', ()=>Bananas)