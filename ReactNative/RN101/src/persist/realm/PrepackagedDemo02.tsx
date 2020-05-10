import React from "react";
import {View, StyleSheet, Text, ViewProps} from "react-native";
import {CarSchema} from "./RealmScheme";
import Realm from "realm";

interface IProps extends ViewProps {
}

// 放置这个pre-packaged.reaml的位置得是 Realm.defaultPath的目录
// 以ios为例, 它就应该是: /Users/songzhw/Library/Developer/CoreSimulator/Devices/..../Documents/
export class PrepackagedDemo02 extends React.Component<IProps> {
  state = {};

  componentDidMount() {
    Realm.open({
      path: "cars.realm",
      schema: [CarSchema]
    }).then(realm => {
      console.log(`realm = `, Realm.defaultPath)
      console.log(`realm version = `, Realm.schemaVersion(Realm.defaultPath))//=> 初始时, version = 0
      const cars = realm.objects("Car")
      console.log(`szw prepacakged = `, cars)
    })
  }

  render() {
    return (
      <View>

      </View>
    );
  }
}

const styles = StyleSheet.create({});

