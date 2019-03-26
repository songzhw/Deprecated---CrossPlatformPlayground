import React from "react";
import { View, StyleSheet } from "react-native";
import MyButtonContainer from "./MyButtonContainer";
import MyButton from "./MyButton";

class MySecondContainer extends React.Component {
  state = {};

  render() {
    return (
      <MyButtonContainer onPress={this.props.onPress}>
        <MyButton title="Inner2" onPress={()=>{}}/>
      </MyButtonContainer>
    );
  }
}

const styles = StyleSheet.create({});

export default MySecondContainer;
