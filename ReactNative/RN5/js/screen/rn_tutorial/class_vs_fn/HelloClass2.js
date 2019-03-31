import React from "react";
import { Alert, Button } from "react-native";

export class HelloClass2 extends React.Component {
  render() {
    const onClick = () => {
      let props = this.props;
      setTimeout(() => Alert.alert(`Hello, I'm ${props.name}`), 3000);
    };

    console.log(`szw class name = ${this.props.name}`);
    return <Button title="Class 2" onPress={onClick}/>;
  }
}

