import React, { Component } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { connect } from "react-redux";
import { singleton1 } from "./Singleton1";
import { SingletonManager1 } from "./SingletonManager1";

class Singleton1Screen extends Component {
  state = {
    singleton: {}
  };
  mgr = new SingletonManager1();

  render() {
    let text = JSON.stringify(this.state.singleton);
    return (
      <View style={styles.root}>
        <Text>Singleton1Screen Screen</Text>
        <Text>{text}</Text>
        <Button title="print singleton(init id = 100)" onPress={() => this.setState({ singleton: singleton1 })}/>
        <Button title="manger change singleton (id = 200)" onPress={() => this.mgr.modifySingleton()}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    flex: 1
  }
});

const mapStateToProps = (state) => {
  return {};
};

export default connect(mapStateToProps)(Singleton1Screen);