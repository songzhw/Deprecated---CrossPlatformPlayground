import React, { Component } from "react";
import { Animated, Text, View } from "react-native";
import { getAnimationStyle, getPosition } from "./utils";

export class Tick extends Component {

  /**
   * 创建动画初始值
   * @type {{animation: Animated.Value}}
   */
  state = {
    animation: new Animated.Value(
      getPosition({
        text: "" + parseInt(this.props.text) + 10 - this.props.rollNum,
        items: this.props.rotateItems,
        height: this.props.height
      })
    )
  };

  componentDidMount() {
    let nowValue = parseInt(this.props.text);
    let now = nowValue + 10 - this.props.rollNum;

    let init = getPosition({
      text: "" + now,
      items: this.props.rotateItems,
      height: this.props.height
    });

    this.setState({
      animation: new Animated.Value(
        init
      )
    });
  }

  componentWillReceiveProps(nextProps) {

    let nowValue = parseInt(nextProps.text);
    let now = nowValue + 10 - nextProps.rollNum;
    let init = getPosition({
      text: "" + now,
      items: this.props.rotateItems,
      height: this.props.height
    });

    // console.log("componentWillReceiveProps-> init:" + init + " nextProps.text: " + nextProps.text + " nextProps.rollNum: " + nextProps.rollNum);
    this.setState({
      animation: new Animated.Value(
        init
      )
    });
  }

  componentDidUpdate(prevProps) {
    const { height, duration, rotateItems, text } = this.props;
    //第一次进来，不执行动画
    var endValue = getPosition({
      text: "" + (parseInt(this.props.text) + 10),
      items: rotateItems,
      height
    });
    // 数字变化,用当前动画值和变化后的动画值进行插值,并启动动画
    Animated.timing(this.state.animation, {
      toValue: endValue,
      duration,
      useNativeDriver: true
    }).start();
  }

  render() {
    const { animation } = this.state;
    const { textStyle, height, rotateItems } = this.props;
    return (
      <View style={{ height }}>
        <Animated.View style={getAnimationStyle(animation)}>
          {/*遍历数字范围数组绘制数字*/}
          {rotateItems.map((v, index) => (
            <Text key={v + index} style={[textStyle, { height }]}>
              {v}
            </Text>

          ))}
        </Animated.View>
      </View>
    );
  }
}