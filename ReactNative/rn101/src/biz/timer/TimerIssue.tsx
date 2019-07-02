import React from "react";
import { View, Text, Button } from "react-native";

// 问题: 切到后台后, timer/interval就自动停止了
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
    this.timerHandler = window.setInterval(() => {
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
