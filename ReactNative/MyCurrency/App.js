import React from 'react';
import {StyleSheet, Text, View, FlatList} from 'react-native';

// 1. Home页, 只有一个ListView
class App extends React.Component {


  componentDidMount() {

  }

  render() {
    let currencies = {"base":"CAD","date":"2018-09-06","rates":{"AUD":1.0539,"BGN":1.2751,"BRL":3.1241,"CHF":0.7351,"CNY":5.18,"CZK":16.766,"DKK":4.8616,"EUR":0.65198,"GBP":0.58563,"HKD":5.9541,"HRK":4.8469,"HUF":212.86,"IDR":11295,"ILS":2.7191,"INR":54.582,"ISK":83.322,"JPY":84.463,"KRW":850.67,"MXN":14.582,"MYR":3.1373,"NOK":6.3737,"NZD":1.1496,"PHP":40.808,"PLN":2.8154,"RON":3.0242,"RUB":51.881,"SEK":6.9049,"SGD":1.0432,"THB":24.86,"TRY":4.9734,"USD":0.75851,"ZAR":11.62}}

    return <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <FlatList
        data={Object.keys(currencies.rates)}
        keyExtractor={item => item}
        renderItem={
          ({item}) => <Text style={{fontSize: 32}}> {item} </Text>
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

export default App
