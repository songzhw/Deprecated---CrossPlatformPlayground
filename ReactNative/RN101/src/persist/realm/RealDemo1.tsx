import React from "react";
import { View, StyleSheet, Text, ViewProps } from "react-native";
import Realm from "realm";
import { CarSchema, OwnerSchema } from "./RealmScheme";

interface IProps extends ViewProps {
}

export class RealDemo1 extends React.Component<IProps> {
  state = { realm: null };

  componentDidMount() {
    Realm.open({ schema: [CarSchema, OwnerSchema] })
      .then(realm => {
        // realm.write(() => realm.create("Car", { name: "HQ" }));
        console.log(`realm = `, Realm.defaultPath)
        this.setState({ realm });
      });
  }

  componentWillUnmount() {
    const { realm } = this.state;
    // @ts-ignore
    if (realm && !realm.isClosed) {
      // @ts-ignore
      realm.close();
    }
  }

  render() {
    // @ts-ignore
    const info = this.state.realm ? "Number of cars : " + this.state.realm.objects("Car").length : "Loading...";
    return (
      <View>
        <Text style={{ fontSize: 30 }}>{info}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({});

