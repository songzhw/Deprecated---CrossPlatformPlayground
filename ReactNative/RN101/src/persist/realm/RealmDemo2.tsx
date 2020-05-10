import React from "react";
import {View, StyleSheet, Text, ViewProps} from "react-native";
import Realm from "realm";
import {CarSchema, OwnerSchema} from "./RealmScheme";
import {Button} from "../../ui/button/Button";

interface IState {
  realm: Realm | null
}

export class RealmDemo2 extends React.Component {
  state: IState = {realm: null};

  componentDidMount() {
    Realm.open({schema: [CarSchema, OwnerSchema]})
      .then(realm => {
        this.setState({realm});
      });
  }

  componentWillUnmount() {
    this.state.realm!!.close();
  }

  createPeople = () => {
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

  render() {
    return (
      <View>
        <Button style={styles.btn} onPress={this.getCars} text="get cars"/>
        <Button style={styles.btn} onPress={this.createPeople} text="create people"/>
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

