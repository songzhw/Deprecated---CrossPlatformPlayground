import React from "react";
import { View, StyleSheet, Button } from "react-native";
import MyButton from "./MyButton";

class MyButtonContainer extends React.Component {
  state = {};

  render() {
    return (
      <View>
        {this.props.children}
      </View>
    );
  }
}

const styles = StyleSheet.create({});

export default MyButtonContainer;
