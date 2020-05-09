import React from "react";
import {View, StyleSheet, Text, ViewProps, TextInput, TouchableOpacity} from "react-native";
import Realm from "realm";
import {CarSchema, OwnerSchema} from "./RealmScheme";
import {Button} from "../../ui/button/Button";

interface IProps extends ViewProps {
}

interface IState {
  realm: Realm | null
}

export class RealDemo1 extends React.Component<IProps, IState> {
  state: IState = {realm: null};
  carName = ""
  carMiles = 0

  componentDidMount() {
    Realm.open({schema: [CarSchema, OwnerSchema]})
      .then(realm => {
        // console.log(`realm = `, Realm.defaultPath)
        this.setState({realm});
      });
  }

  componentWillUnmount() {
    if (this.state.realm) {
      const realm = this.state.realm
      if (!realm.isClosed) {
        realm.close();
      }
    }
  }

  createCar = ()=>{
    if(this.state.realm) {
      const realm = this.state.realm
      // 要加write(), 不然会出错, 说:"can't modify manged objects outside a write transaction". 因为write是一个事务
      realm.write(() => realm.create("Car", {name: this.carName, miles: this.carMiles}))
    }
  }

  getCars = ()=>{
    console.log(`szw cars = `, this.state.realm!!.objects("Car"))
  }

  render() {
    const info = this.state.realm ? "Realm Database:" : "Loading...";
    return (
      <View>
        <Text style={{fontSize: 30}}>{info}</Text>
        <View style={styles.carContainer}>
          <TextInput style={styles.inputs} onChangeText={text=>this.carName = text} placeholder="car name"/>
          <TextInput style={styles.inputs} onChangeText={text=>this.carName = text} placeholder="car miles"/>
          <Button style={styles.inputs} text="Crate Car" onPress={this.createCar}/>
          <Button style={styles.inputs} text="get cars" onPress={this.getCars}/>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  carContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: "space-around",
  },
  inputs: {
    width: 100,
    height: 50,
    backgroundColor: "#e3f2fd"
  }
});

/*
1. this.state.realm.objects('Car')的值是: {"0": {"miles": 0, "name": "HQ"}}

2.
 */
