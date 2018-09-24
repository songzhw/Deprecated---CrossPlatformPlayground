import React, { Component } from 'react'
import { Image, StyleSheet, Text, View, TextInput, Button, Alert, ScrollView, FlatList, SectionList, ActivityIndicator, Platform } from 'react-native'
import { createStackNavigator } from 'react-navigation'


// Only one default export allowed per module. 
class HomeScreen extends Component {
  static navigationOptions = {
    title: 'Home'
  }

  render() {
    let pic = { uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg' }

    let details = { id: 23, name: "cellphone" }

    return (
      <ScrollView >
        <Text style={{ color: 'red', fontSize: 33 }}>Hello World </Text>
        <Pizza style={{ width: 200, height: 120 }} />
        <Image source={pic} style={{ width: 386, height: 220 }} />
        <Greeting name="React Native" id="23" />
        <Blink myText="I am React Native" />
        <Button title="click me" onPress={() => Alert.alert('Clicked!')} />
        <MovieInfo />
        <Button title="=> details screen"
          onPress={() => this.props.navigation.navigate('Details', details)} />
        <FlatList data={[{ key: 'Apple' }, { key: 'Banana' }, { key: 'Cat' }]}
          renderItem={({ item }) => <Text style={{ fontSize: 30 }}>{item.key}</Text>} />
        <ContactInfo />
      </ScrollView>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    ...Platform.select({
      ios: {
        backgroundColor: '#fff',
      },
      android: {
        backgroundColor: '#ccc',
      }
    }),

    alignItems: 'center',
    justifyContent: 'center',
  },
  sectionHeader: {
    backgroundColor: 'rgba(247,247,247,1.0)',
    fontWeight: 'bold',
    fontSize: 30
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
          renderItem={({ item }) => <Text style={{ fontSize: 26 }}> {item} </Text>}
          renderSectionHeader={({ section }) => <Text style={styles.sectionHeader}> {section.title} </Text>}
          keyExtractor={(item, index) => index}
        />
      </View>
    )
  }
}

class MovieInfo extends Component {
  constructor(props) {
    super(props)
    this.state = { isLoading: true }
  }

  componentDidMount() {
    return fetch("https://facebook.github.io/react-native/movies.json")
      .then(resp => resp.json())  //写成了resp.json, 结果总是没有任何数据出来
      .then(respJson => {
        this.setState({
          isLoading: false,
          payload: respJson.movies
        })
      })
      .catch(err => console.error("szw error = " + err))
  }

  render() {
    if (this.state.isLoading) {
      return (
        <View>
          <ActivityIndicator />
        </View>
      )
    }

    return (
      <View >
        <FlatList
          data={this.state.payload}
          renderItem={({ item }) => <Text> {item.title} (from {item.releaseYear})</Text>}
          keyExtractor={({ id }, index) => id}
        />
      </View>
    )
  }
}

class DetailScreen extends Component {
  static navigationOptions = {
    title: 'Details'
  }

  render() {
    const { navigation } = this.props
    const id = navigation.getParam("id", "NO-ID")
    const name = navigation.getParam("name", "NULL Name")

    return (
      <View style={{ flex: 1 }}>
        <Text> Detail page</Text>
        <Text> id: {id}, name : {name}</Text>
        <Button title="go back" onPress={() => this.props.navigation.goBack()} />
        <Button title="go to detail again"
          onPress={() => {
            this.props.navigation.push('Details', {
              id: Math.floor(Math.random() * 100)
            })
          }} />
      </View>
    )
  }
}

// React-Naviagation得入到homeScreen的定义之下才行
// 另外, 这库除了导航, 还能帮我们创建一个toolbar, 免得内容与status bar重叠了
const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    Details: DetailScreen
  }, {
    initialRouteName: 'Home',
    navigationOptions: {
      headerStyle: { backgroundColor: '#f4511e' },
      headerTintColor: '#fff'
    }
  })

export default class App extends Component {
  render() {
    return <RootStack />
  }
}


// skip this line if using Create-React-Native-App
// AppRegistry.registerComponent('RN101', ()=>Bananas)