import React, { Component } from "react";
import { View, StyleSheet, Text, Button } from "react-native";
import { connect } from "react-redux";

class SagaChannelScreen extends Component {
  render() {
    return (
      <View style={styles.root}>
        <Text>SagaChannelScreen Screen</Text>
        <Button title="send action" onPress={() => this.props.dispatch({ type: "saga_channel_demo" })}/>
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

export default connect(mapStateToProps)(SagaChannelScreen);