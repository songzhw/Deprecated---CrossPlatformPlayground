import React from 'react';
import {StyleSheet, Text, View, FlatList, Button} from 'react-native';
import {connect} from 'react-redux'
import {fetchCurrencyEvent} from "../redux/action_currency";

// 1. Home页, 只有一个ListView
class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {list: []}
  }

  componentDidMount() {
    const {dispatch} = this.props
    dispatch(fetchCurrencyEvent("CNY"))
  }

  clicks = () => {
    console.log(`"click button`)
  }

  render() {
    let {list, newText} = this.state

    return <View style={styles.container}>
      <Text>Top...</Text>
      <Text>{newText}</Text>
      <Button onPress={this.clicks} title="button2"/>
      <FlatList
        data={list}
        keyExtractor={item => item}
        renderItem={
          ({item}) => <Text style={{fontSize: 22}}> {item} </Text>
        }
      />
    </View>;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
});

export default connect()(App)