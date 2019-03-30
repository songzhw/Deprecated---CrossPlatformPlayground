import React from "react";
import { View, StyleSheet, Alert, Button } from "react-native";

class HelloClass extends React.Component {
  onClick = () => {
    setTimeout(() => Alert.alert(`Hello, I'm ${this.props.name}`), 3000);
  }; // 给足3秒钟, 让你有时间在Alert之前去做操作,

  render() {
    return <Button title="Class (szw)" onPress={this.onClick}/>;
  }
}

const styles = StyleSheet.create({});

export default HelloClass;