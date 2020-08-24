import React, { Component } from "react";
import { View, ViewProps, Text, StyleSheet, LayoutAnimation, Image, TouchableOpacity } from "react-native";

interface IProps extends ViewProps {
}

var anima = {
  duration: 1000,   //持续时间
  create: {
    type: LayoutAnimation.Types.spring,
    property: LayoutAnimation.Properties.scaleXY
  },
  update: {
    type: "easeOut"
  }
};

export class LayoutAnimDemo2 extends Component {
  state = {
    width: 200,
    height: 100,
    left: 100,
    top: 20
  };

  constructor(props: any) {
    super(props);
  }

  _clickStartAnimation() {
    LayoutAnimation.configureNext(anima, () => {
      this.setState({
        top: 20
      });
    });

    this.setState({
      top: this.state.top + 200
    });

  }

  _setTimer() {
    // 先开始一次动画
    this._clickStartAnimation();
    // 创建定时器
    this.timer = setInterval(this._clickStartAnimation.bind(this), 1200);
  }

  render() {
    return (
      <View style={styles.mainStyle}>

        <Image
          style={{
            width: this.state.width,
            height: this.state.height,
            position: "absolute",
            left: this.state.left,
            top: this.state.top
          }}
          source={require("../../../../res/img/ic_star_full.png")}/>

        <View style={{
          width: 240,
          height: 120,
          position: "absolute",
          left: 80,
          top: 200,
          backgroundColor: "red"
        }}>
          <Text style={{ color: "#FFD700", fontSize: 90, lineHeight: 104, width: 240, textAlign: "center" }}>红包</Text>
        </View>

        <TouchableOpacity style={{ width: 200, height: 50, backgroundColor: "yellow", marginTop: 40 }}
                          onPress={this._setTimer.bind(this)}>
          <Text style={{ width: 200, height: 50, textAlign: "center", lineHeight: 50 }}>点击开始动画</Text>
        </TouchableOpacity>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {}
});