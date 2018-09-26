import React from 'react';
import { Image, Text, View, ScrollView, StyleSheet, AsyncStorage } from 'react-native';
import { ExpoLinksView } from '@expo/samples';
import Storage200 from '../utils/Storage'

export default class LinksScreen extends React.Component {

  constructor(props) {
    super(props)
    this.state = { isFirstTime: false }
  }

  componentDidMount() {
    Storage200.has("isFirstTime")
      .then(hasItem => {
        console.log(`has(key) = ${hasItem}`)
        if (!hasItem) {
          this.setState(prevState => ({ isFirstTime: true }))
          Storage200.set("isFirstTime", false)
        }
      })
  }

  static navigationOptions = {
    title: 'Links',
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        if(this.state.isFirstTime) {
          <View>
            <Text>You just installed this app. Congrutulations!</Text>
          </View>
        }

        <Image style={{ width: 80, height: 80 }}
          source={require('../assets/images/humberger.png')} />
        {/* Go ahead and delete ExpoLinksView and replace it with your
           * content, we just wanted to provide you with some helpful links */}
        <ExpoLinksView />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
