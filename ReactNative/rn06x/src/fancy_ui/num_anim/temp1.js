import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

import Ticker from "./temp2";

export class NumberAnimationDemo extends Component {

  constructor(props) {
    super(props);
    this.state = {
      totalPeopleNum: 7759287903,
      thisYearBirthNum: 134456432
    };

    setInterval(() => {
      this.setState({
        totalPeopleNum: this.state.totalPeopleNum + this.getRandomNum(50),
        thisYearBirthNum: this.state.thisYearBirthNum - this.getRandomNum(300)
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
    let number2 = this.addCommas(this.state.thisYearBirthNum)

    return (
      <View style={styles.container}>
        <Text style={styles.text}>全球总人口数量：</Text>
        <Ticker textStyle={styles.text} tickerNum={3} height={26}>
          {totalPeopleNumStr}
        </Ticker>
        <Ticker textStyle={styles.text2} tickerNum={2} height={26}>
          {number2}
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
  },
  text2: {
    fontSize: 20,
    color:"#f3a0b7"
  }
};
