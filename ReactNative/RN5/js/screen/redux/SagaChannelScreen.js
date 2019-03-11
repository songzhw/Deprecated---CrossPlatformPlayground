import React, { Component } from "react";
import { View, StyleSheet, Text, Button } from "react-native";
import { connect } from "react-redux";
import { getChannelDemoAction } from "../../redux/research/channelDemoReducer";
import { getChannelDemoAction2 } from "../../redux/research/channel2Reducer";

class SagaChannelScreen extends Component {
  render() {
    console.log(`szw screen CHANNEL_DEMO_RESULT`);
    return (
      <View style={styles.root}>
        <Text>SagaChannelScreen Screen</Text>
        <Button title="send action * 2" onPress={() => this.props.dispatch(getChannelDemoAction())}/>
        <Button title="send action * 3" onPress={() => this.props.dispatch(getChannelDemoAction2())}/>
        <Text> {this.props.text1} </Text>
        <Text> {this.props.text2} </Text>
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
  let { text } = state.playgroundReducers.channelDemoReducer;
  let text2 = state.playgroundReducers.channel2Reducer.text;
  console.log(`szw screen map : ${text} - ${text2}`);
  return { text1: text, text2: text2 };
};

export default connect(mapStateToProps)(SagaChannelScreen);