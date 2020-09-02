import React from "react";
import { View, ViewProps, StyleSheet } from "react-native";
import Svg, { Circle, Defs, LinearGradient, Stop, Text } from "react-native-svg";

interface IProps extends ViewProps {
}

export const SvgCanvasDemo4 = (props: IProps) => {

  return (
    <View>
      <Svg height="100%" width="100%">
        {/*空心文字*/}
        <Text fill="none" stroke="purple" fontSize={50} fontWeight={"bold"} x={20} y={60}>Hello World </Text>

        {/*圆环*/}
        <Circle x={200} y={100} r={50} fill="none"
          strokeWidth={5} stroke="blue" strokeDasharray="120 1000"/>

        {/* 渐变色 */}
        <Defs>
          <LinearGradient id={"gradient"}>
            <Stop offset="0" stopColor="green" stopOpacity={0.5}/>
            <Stop offset="1" stopColor="red" stopOpacity={1}/>
          </LinearGradient>
        </Defs>
        <Circle x="200" y="250" r="70" stroke="url(#gradient)" strokeWidth={20}/>
      </Svg>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {}
});