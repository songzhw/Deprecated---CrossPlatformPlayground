import React from "react";
import { View, Button } from "react-native";

class MyButton extends React.Component {

  render() {
    return (
      <Button title={this.props.title} onPress={this.props.onPress}/>
    );
  }
}

export default MyButton;
