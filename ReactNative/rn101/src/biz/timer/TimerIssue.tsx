import React, { useEffect, useState } from "react";
import { View, Text, Button } from "react-native";

export class TimerIssue extends React.Component {
  timerHandler: number | null = null;
  state = {
    time: -1
  };

  componentWillUnmount() {
    console.log(`szw umount = ${this.timerHandler}`);
    if (this.timerHandler) {
      clearInterval(this.timerHandler);
    }
  }


  start = () => {
    this.timerHandler = setInterval(() => {
      console.log(`szw interval : ${this.state.time}`);
      const result = this.state.time + 1;
      this.setState({ time: result });
    }, 1000);
  };

  render() {
    return (
      <View>
        <Text> {this.state.time} </Text>
        <Button title="start" onPress={this.start}/>
      </View>
    );
  };
};
