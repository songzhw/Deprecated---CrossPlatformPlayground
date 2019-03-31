import React from "react";
import { Alert, Button } from "react-native";

export class HelloClass extends React.Component {
  onClick = () => {
    let {name} = this.props
    setTimeout(() => Alert.alert(`Hello, I'm ${name}`), 3000);
  }; // 给足3秒钟, 让你有时间在Alert之前去做操作,

  render() {
    console.log(`szw class name = ${this.props.name}`);
    return <Button title="Class" onPress={this.onClick}/>;
  }
}

