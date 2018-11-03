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
    fetch("http://fixer.handlebarlabs.com/latest?base=AUD")
      .then(resp => resp.json())
      .then(respBody => Object.keys(respBody.rates))
      .then(currencies => {
        this.setState(prevState => ({list: currencies}))
      })
  }

  clicks = () => {
    const {dispatch} = this.props
    dispatch(fetchCurrencyEvent("CNY"))
  }

  increseAsync = ()=>{
    const {dispatch} = this.props
    dispatch( {type: 'increase'})
  }

  render() {
    let {list} = this.state

    return <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <Button onPress={this.clicks} title="Go Fetch Data"/>
      <Button onPress={this.increseAsync} title="increase async"/>
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