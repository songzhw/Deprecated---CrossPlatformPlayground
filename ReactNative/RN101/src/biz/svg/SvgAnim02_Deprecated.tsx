import React, { Component } from "react";
import { View, Animated, Easing } from "react-native";
import Svg, { Circle, Path } from "react-native-svg";

/*
 这个例子不好, 要存360个path[]数组, 性能上比较不好. 就考虑其它
 */
const AnimatedPath = Animated.createAnimatedComponent(Path);

// deprecated!
export class SvgAnim02_Deprecated extends Component {
  state = {
    progress: new Animated.Value(0)
  };

  componentDidMount() {
    Animated.timing(this.state.progress,
      { toValue: 1, duration: 3000, useNativeDriver: true })
      .start();
  }

  polarToCartesian(centerX: number, centerY: number, radius: number, angleInDegrees: number) {
    var angleInRadians = (angleInDegrees - 90) * Math.PI / 180.0;

    return {
      x: centerX + (radius * Math.cos(angleInRadians)),
      y: centerY + (radius * Math.sin(angleInRadians))
    };
  }

  describeArc(x: number, y: number, radius: number, startAngle: number, endAngle: number) {

    var start = this.polarToCartesian(x, y, radius, endAngle);
    var end = this.polarToCartesian(x, y, radius, startAngle);

    var largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";

    var d = [
      "M", start.x, start.y,
      "A", radius, radius, 0, largeArcFlag, 0, end.x, end.y
    ].join(" ");

    return d;
  }

  render() {
    let R = 160;
    let dRange = [];
    let iRange = [];
    let steps = 360;
    for (let i = 0; i < steps; i++) {
      dRange.push(this.describeArc(160, 160, 160, 0, i));
      iRange.push(i / (steps - 1));
    }


    var _d = this.state.progress.interpolate({
      inputRange: iRange,
      outputRange: dRange
    });

    return (
      <Svg style={{ flex: 1 }}>
        <Circle cx={R} cy={R} r={R}
                stroke="green" strokeWidth="2.5" fill="green"/>
        <AnimatedPath d={_d} stroke="red" strokeWidth={5} fill="none"/>
      </Svg>
    );
  }
}
