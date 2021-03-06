import React, { Component } from "react";
import { View, StyleSheet, Text, Button } from "react-native";
import { connect } from "react-redux";

function WhatIsUseCallback({ num, name }) {
  const callback = React.useCallback(
    () => {
      console.log(`szw some calculation`);
      return num.map(x => x + 2);
    },
    []
  ); // 第二参为[num]还好, 要是为[], 那就只会记住每一次的值, 即[3,4,5]
  console.log(`szw original  number = ${num}, ${name}`);
  console.log(`szw memorized number = ${callback()}, ${name}`);
  return (
    <Text>What is useCallback</Text>
  );
}

const num1 = [1, 2, 3];
const num2 = [4, 5, 6];

class UseCallbackScreen extends Component {
  state = {
    number: num1,
    count: 0,
    name: "first"
  };
  intervalId = 0;

  componentDidMount() {
    this.intervalId = setInterval(() => {
      this.setState((prevState) => {
        return { count: prevState.count + 1 };
      });
    }, 3000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  render() {
    const { number, name } = this.state;
    return (
      <View>
        <WhatIsUseCallback num={number} name={name}/>
        <Button title="number = num2" onPress={this.onPressButton}/>
      </View>
    );
  }

  onPressButton = () => {
    this.setState({ name: "second", number: num2 });
  };

}

export default UseCallbackScreen;

/*
不按按钮, 只有interval时, 结果是:
szw original  number = 1,2,3, first
szw some calculation
szw memorized number = 3,4,5, first
...(每3秒重复这三个日志)

 */
