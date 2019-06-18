import React, { useEffect, useState } from "react";
import { View, Text, Button } from "react-native";

// export const TimerIssue = () => {
//   const [time, setTime] = useState(-1);
//   let timerHandler: number | null = null;
//
//   function work() {
//     console.log(`szw interval : ${time}`);
//     const result = time + 1;
//     setTime(result);
//   }
//
//   function start() {
//     timerHandler = setInterval(work, 1000);
//   }
//
//   useEffect(() => {
//     console.log(`szw useEffect start`);
//     return () => {
//       console.log(`szw useEffect cancel`);
//       if (timerHandler) {
//         clearInterval(timerHandler);
//       }
//     };
//   }, []);
//
export class TimerIssue extends React.Component {
  timerHandler: number | null = null;
  state = {
    time: -1
  };

  componentWillUnmount() {
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
