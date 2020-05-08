import React from "react";
import {View, StyleSheet, Text, ViewProps, TextInput} from "react-native";
import Realm from "realm";
import {CarSchema, OwnerSchema} from "./RealmScheme";

interface IProps extends ViewProps {
}

interface IState {
  realm: Realm | null
}

export class RealDemo1 extends React.Component<IProps, IState> {
  state = {realm: null};
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

  render() {
    // @ts-ignore
    const info = this.state.realm ? "Realm Database:" : "Loading...";
    return (
      <View>
        <Text style={{fontSize: 30}}>{info}</Text>
        <View style={styles.carContainer}>
          <TextInput style={styles.inputs} onChangeText={text=>this.carName = text} defaultValue="car name"/>
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
    height: 100
  },
  inputs: {
    width: 100,
  }
});

/*
1. this.state.realm.objects('Car')的值是: {"0": {"miles": 0, "name": "HQ"}}

2.
 */
