import React from "react";
import {View, StyleSheet, Text, ViewProps} from "react-native";
import Realm from "realm";
import {Button} from "../../ui/button/Button";
import {Car, Owner} from "./RealmScheme";

interface IState {
  realm: Realm | null
}

export class RealmDemo2 extends React.Component {
  state: IState = {realm: null};

  componentDidMount() {
    Realm.open({schema: [Car, Owner]})
      .then(realm => {
        this.setState({realm});
      });
  }

  componentWillUnmount() {
    this.state.realm!!.close();
  }

  createPeople1 = () => {
    const realm = this.state.realm!!
    realm.write(() => {
      const owner = realm.create("Owner", {id: 101, name: 'appleton'}, Realm.UpdateMode.Never) as any
      const cars = owner.cars;
      console.log(`szw cars = `, cars)
      cars.push({id: 6, name: "xxx", miles: 2311})
    })
  }

  getCars = () => {
    console.log(`szw cars = `, this.state.realm!!.objects("Car"))
  }

  createPeople2 = () => {
    const realm = this.state.realm!!
    realm.write(() => {
      const carList = this.state.realm!!.objects("Car")

      const owner = realm.create("Owner", {id: 102, name: 'hacker'}, Realm.UpdateMode.Never) as any
      const cars = owner.cars;
      cars.push(carList[0])
      cars.push({id: 7, name: 'yyy', miles: 14})
      console.log(`szw owner = `, owner)
    })
  }

  getOwner = () => {
    const owners = this.state.realm!!.objects("Owner") as any
    console.log(`szw owner = `, owners)
    const cars = owners[1].cars;
    console.log(`szw cars = `, cars)
  }

  render() {
    return (
      <View>
        <Button style={styles.btn} onPress={this.getCars} text="get cars"/>
        <Button style={styles.btn} onPress={this.createPeople1} text="create people 1"/>
        <Button style={styles.btn} onPress={this.createPeople2} text="create people 2"/>
        <Button style={styles.btn} onPress={this.getOwner} text="get owner"/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  btn: {
    width: 110,
    margin: 5
  }
});

