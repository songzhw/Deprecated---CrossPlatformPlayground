import React, { Component } from "react";
import { Button, StyleSheet, TextInput, View, Text } from "react-native";
import { connect } from "react-redux";
import { createInputAction } from "../redux/InputNameReducer";

class InputNameScreen extends Component {
  name = "";

  render() {
    return (
      <View style={styles.root}>
        <TextInput style={{ fontSize: 30 }} onChangeText={this.onTextChanged} placeholder="input a name"/>
        <Button title="Submit" onPress={this.onSubmit}/>
        <Text>{this.props.myName}</Text>
      </View>
    );
  }

  onTextChanged = text => {
    this.name = text;
  };

  onSubmit = () => {
    this.props.dispatch(createInputAction(this.name));
  };

}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});

const mapStateToProps = (state) => {
  return { myName: state.InputNameReducer.name };
};

export default connect(mapStateToProps)(InputNameScreen);
