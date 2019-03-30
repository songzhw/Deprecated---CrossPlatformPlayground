import React from "react";
import { Alert, Button } from "react-native";

export class HelloClass extends React.Component {
  onClick = () => {
    setTimeout(() => Alert.alert(`Hello, I'm ${this.props.name}`), 3000);
  }; // 给足3秒钟, 让你有时间在Alert之前去做操作,

  render() {
    return <Button title="Class" onPress={this.onClick}/>;
  }
}

