import React, { Component } from "react";
import { View, StyleSheet, Text, Button } from "react-native";
import { connect } from "react-redux";

class WhenToPersistScreen extends Component {
  render() {
    return (
      <View style={styles.root}>
        <Text>WhenToPersistScreen Screen</Text>
      </View>
    );
  }

  click1 = () => {
    console.log(`szw 1`);
  };

  click2 = () => {
    console.log(`szw 2`);
  };
}

const styles = StyleSheet.create({
  root: {
    flex: 1
  }
});

const mapStateToProps = (state) => {
  return {};
};

export default connect(mapStateToProps)(WhenToPersistScreen);
