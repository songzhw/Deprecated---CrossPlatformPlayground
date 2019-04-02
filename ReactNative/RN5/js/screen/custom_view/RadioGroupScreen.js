import React, { Component } from "react";
import { View, StyleSheet, Text } from "react-native";
import { connect } from "react-redux";
import { RadioButton } from "../../component/readibuttons/RadioButton";

class RadioGroupScreen extends Component {
  render() {
    return (
      <View style={styles.root}>
        <Text>RadioGroupScreen Screen</Text>
        <RadioButton/>
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

export default connect(mapStateToProps)(RadioGroupScreen);