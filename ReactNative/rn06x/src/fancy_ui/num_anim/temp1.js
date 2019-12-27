import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

import Ticker from "./temp2";

// 坑1: 有小数点时, 跨小数点会crash
export class NumberAnimationDemo extends Component {

  constructor(props) {
    super(props);
    this.state = {
      totalPeopleNum: 7759287903
    };

    setInterval(() => {
      this.setState({
        totalPeopleNum: this.state.totalPeopleNum + this.getRandomNum(500)
      });
    }, 6000);
  }

  /**
   * 生成一个随机数
   */
  getRandomNum = num => {
    return Math.floor(Math.random() * num);
  };

  addCommas = nStr => {
    nStr += "";
    let x = nStr.split(".");
    let x1 = x[0];
    let x2 = x.length > 1 ? "." + x[1] : "";
    var rgx = /(\d+)(\d{3})/;
    while (rgx.test(x1)) {
      x1 = x1.replace(rgx, "$1" + "," + "$2");
    }
    return x1 + x2;
  };

  render() {

    let totalPeopleNumStr = this.addCommas(this.state.totalPeopleNum);
    console.log(`szw text = ${totalPeopleNumStr}`);

    return (
      <View style={styles.container}>
        <Text style={styles.text}>全球总人口数量：</Text>
        <Ticker textStyle={styles.text} tickerNum={3} height={26}>
          {totalPeopleNumStr}
        </Ticker>
      </View>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#333"
  },
  text: {
    fontSize: 20,
    color: "#abe333"
  }
};
