import React from "react";
import { View, StyleSheet, Button } from "react-native";
import MyButtonContainer from "./MyButtonContainer";
import MyButton from "./MyButton";

class MySecondContainer extends React.Component {
  state = {};

  render() {
    return (
      <MyButtonContainer>
        <Button title="Inner2" onPress={this.props.onPress}/>
      </MyButtonContainer>
    );
  }
}

const styles = StyleSheet.create({});

export default MySecondContainer;
