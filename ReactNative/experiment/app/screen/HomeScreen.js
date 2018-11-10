import React, {Component} from 'react';
import {View, Button} from 'react-native'
import saga from "../redux/saga/saga";

class HomeScreen extends Component {
  render(){
    return (
      <View>
        <Button title="Redux-saga" onPress={this.go2ReduxSaga}/>
      </View>
    )
  }

  go2ReduxSaga = ()=> {
    this.props.navigation.navigate('Redux_Saga')
  }
}

export default HomeScreen