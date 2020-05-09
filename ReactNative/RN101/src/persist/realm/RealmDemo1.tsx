import React from "react";
import {StyleSheet, Text, TextInput, View} from "react-native";
import Realm from "realm";
import {CarSchema, OwnerSchema} from "./RealmScheme";
import {Button} from "../../ui/button/Button";

interface IState {
  realm: Realm | null
}

export class RealmDemo1 extends React.Component {
  state: IState = {realm: null};
  carName = ""
  carMiles = 0
  carId = 0

  componentDidMount() {
    Realm.open({schema: [CarSchema, OwnerSchema]})
      .then(realm => {
        // console.log(`realm = `, Realm.defaultPath)
        this.setState({realm});
      });
  }

  componentWillUnmount() {
    if (!this.state.realm!!.isClosed) {
      this.state.realm!!.close();
    }
  }

  createCar = () => {
    if (this.state.realm) {
      const realm = this.state.realm
      // 要加write(), 不然会出错, 说:"can't modify manged objects outside a write transaction". 因为write是一个事务
      realm.write(() => realm.create("Car", {
        id: this.carId,
        name: this.carName,
        miles: this.carMiles
      }, Realm.UpdateMode.Never))
    }
    /*
    想create, 发现了已经存在了这个对象, 怎么办, 这就要看UpdateMode参数了
     * NEVER: 只扔出个exception (Error: "Attempting to create an object of type 'Car' with an existing primary key value '1')
     * ALL: 第二参提供的property会全被更新. 其它的参数不变
     * MODIFIED: 只有变化了的property会被更新. 用于提升性能. 但多用户操作同一DB时, merge的结果可能会有影响
     */
  }

  getCars = () => {
    console.log(`szw cars = `, this.state.realm!!.objects("Car"))
  }

  filter1 = () => {
  }

  filter2 = () => {
  }

  render() {
    const info = this.state.realm ? "Realm Database:" : "Loading...";
    return (
      <View style={styles.root}>

        <Text style={{fontSize: 30, height: 40}}>{info}</Text>
        <Text style={{fontSize: 22, height: 30}}>Car</Text>

        <View style={styles.carContainer}>
          <TextInput style={styles.inputs} onChangeText={text => this.carId = parseInt(text)} placeholder="ID"/>
          <TextInput style={styles.inputs} onChangeText={text => this.carName = text} placeholder="name"/>
          <TextInput style={styles.inputs} onChangeText={text => this.carMiles = parseInt(text)} placeholder="miles"/>
          <Button style={styles.inputs} text="Create Car" onPress={this.createCar}/>
          <Button style={styles.inputs} text="get cars" onPress={this.getCars}/>
        </View>

        <View style={styles.carContainer}>
          <Button style={styles.inputs} text="filter1" onPress={this.filter1}/>
          <Button style={styles.inputs} text="filter2" onPress={this.filter2}/>
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'red'
  },
  carContainer: {
    flexDirection: 'row',
    justifyContent: "space-around",
    height: 60
  },
  inputs: {
    width: 80,
    height: 50,
    backgroundColor: "#e3f2fd"
  }
});

/*
1. this.state.realm.objects('Car')的值是: {"0": {"miles": 0, "name": "HQ"}}

2.
 */
