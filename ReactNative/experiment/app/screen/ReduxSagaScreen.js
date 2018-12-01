import React, {Component} from 'react';
import {StyleSheet, Text, View, FlatList, Button} from 'react-native';
import {connect} from 'react-redux'
import {FETCH_CURRENCY, fetchCurrencyEvent} from "../redux/action_currency";

// 1. Home页, 只有一个ListView
class App extends Component {

  constructor(props) {
    super(props)
    this.state = {list: []}
  }

  componentDidMount() {
    // const {dispatch} = this.props
    // dispatch(fetchCurrencyEvent("CNY"))
  }



  render() {
    let {list} = this.state

    return <View style={styles.container}>
      <Text>Top...</Text>
      <Text>{this.props.text2}</Text>
      <Button onPress={this.props.clicks} title="button2"/>
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

// 第一参mapStateToProps, 是一个函数. 它在执行后应该返回一个对象, 里面的每一个k-v对都是一个映射.
const mapStateToProps = (state) => {
  //=> state: {"base":"USD","quote":"CAD","conversion":{},"error":null,"payload":{"newText":"now done"}}
  // console.log(`szw map1 : ${JSON.stringify(state)}`)
  let myText = "default Value"
  console.log(`szw state = ${JSON.stringify(state)}`)
  if (state === undefined || Object.keys(state).length === 0) {
    // console.log(`szw mapStateToProps() : state is null`)
  } else {
    //TODO revert it back
    // myText = state.payload.newText
    myText = JSON.stringify(state)
  }
  return {
    list: [],
    text2: myText
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    clicks: () => {
      dispatch({type: FETCH_CURRENCY, payload: { thisCurrency: 'USD'}
      });
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App)