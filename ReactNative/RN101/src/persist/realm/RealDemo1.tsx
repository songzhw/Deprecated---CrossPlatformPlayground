import React from "react";
import {View, StyleSheet, Text, ViewProps, TextInput, TouchableOpacity} from "react-native";
import Realm from "realm";
import {CarSchema, OwnerSchema} from "./RealmScheme";
import {Button} from "../../ui/button/Button";

interface IProps extends ViewProps {
}

interface IState {
  realm: Realm | undefined
}

export class RealDemo1 extends React.Component<IProps, IState> {
  state = {realm: undefined};
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
    if (this.state.realm !== null) {
      const realm = this.state.realm as any //可再优化. 这里实在是TS无法推断realm非空, 才不得已用any
      if (!realm.isClosed) {
        realm.close();
      }
    }
  }

  createCar = ()=>{
    this.state.realm?.create("Car", {name: this.carName, miles: this.carMiles})
  }

  render() {
    const info = this.state.realm ? "Realm Database:" : "Loading...";
    return (
      <View>
        <Text style={{fontSize: 30}}>{info}</Text>
        <View style={styles.carContainer}>
          <TextInput style={styles.inputs} onChangeText={text=>this.carName = text} defaultValue="car name"/>
          <TextInput style={styles.inputs} onChangeText={text=>this.carName = text} defaultValue="car miles"/>
          <Button style={styles.inputs} text="Crate Car" onPress={this.createCar}/>
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
    backgroundColor: "grey"
  }
});

/*
1. this.state.realm.objects('Car')的值是: {"0": {"miles": 0, "name": "HQ"}}

2.
 */
