import React, { Component } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { connect } from "react-redux";
import { singleton1 } from "./Singleton1";
import { SingletonManager1 } from "./SingletonManager1";

/*
another article to reference : https://www.zhihu.com/question/67792143
  * es module导出的是引用，多次引用的对象是同一个
  * commonjs导出的是拷贝，多次引用的对象不是同一个

 */
class Singleton1Screen extends Component {
  state = {
    singleton: {}
  };
  mgr = new SingletonManager1();

  render() {
    let text = JSON.stringify(this.state.singleton);
    let singletonInMgr = this.mgr.getSingleton();
    let isEqual = singletonInMgr === singleton1 ? "==" : "!=";
    return (
      <View style={styles.root}>
        <Text>Singleton1Screen Screen</Text>
        <Text>{text}</Text>
        <Button title="print singleton(init id = 100)" onPress={() => this.setState({ singleton: singleton1 })}/>
        <Button title="manger change singleton (id = 200)" onPress={() => this.mgr.modifySingleton()}/>
        <Text> {isEqual} </Text>
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