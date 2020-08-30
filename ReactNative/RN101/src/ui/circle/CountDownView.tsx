import React, { useState, useEffect } from "react";
import { Animated, ViewProps } from "react-native";
import Svg, { Circle, Text, G } from "react-native-svg";

interface IProps extends ViewProps {
  progress: Animated.Value;
  duration: number;
  svgSize: number;
  strokeWidth: number;
  gap: number; /*内外环间隔*/
}


export const CountDownView = (props: IProps) => {
  const { progress, duration, svgSize, strokeWidth, gap } = props;
  const [count, setCount] = useState(duration);

  const halfOfSvgSize = svgSize / 2;
  const radius = (svgSize - strokeWidth) / 2;  // 外层倒计时进度半径
  const innerRadius = radius - gap;  // 内层半径
  const circumference = 2 * radius * Math.PI;  // 总周长

  const radian = progress.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 2 * Math.PI]
  }); // 弧度 (一周的弧度就是2π)
  const circumferenceWithProgress = Animated.multiply(radius, radian);
  const AnimatedCircleProgress = Animated.createAnimatedComponent(Circle);
  const outerCircleCommonConfig = {
    fill: "none",
    cx: halfOfSvgSize,
    cy: halfOfSvgSize,
    r: radius,
    strokeWidth: strokeWidth,
    strokeDasharray: `${circumference}  ${circumference}`
  };


  useEffect(() => {
    progress.addListener(({ value }: { value: number }) => {
      const ratio = 1 - value;
      setCount(Math.round(duration * ratio));
    });
    return () => {
      progress.removeAllListeners();
    };
  }, []);

  return (
    <Svg width={svgSize} height={svgSize}>
      {/* 内层显示倒计时时间圆圈 */}
      <Circle
        stroke='#25BB7E' fill='#25BB7E'
        cx={halfOfSvgSize} cy={halfOfSvgSize} r={innerRadius}
        strokeWidth={strokeWidth} strokeDasharray={`${circumference}  ${circumference}`}
      />
      <Text
        fill="#fff" textAnchor="middle"
        fontSize="20" fontWeight="bold"
        x={halfOfSvgSize} y={halfOfSvgSize + 5}
      >{`${count} s`}</Text>

      {/* 外层倒计时圆圈 */}
      <G rotation={-90} origin={`${halfOfSvgSize}, ${halfOfSvgSize}`}>
        <Circle stroke='#D2D2D2' {...outerCircleCommonConfig}/>
        <AnimatedCircleProgress
          stroke='#25BB7E' strokeDashoffset={circumferenceWithProgress}
          {...outerCircleCommonConfig} />
      </G>
      
    </Svg>
  );
};