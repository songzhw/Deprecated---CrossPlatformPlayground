import React from "react";
import { View, ViewProps, StyleSheet } from "react-native";
import Svg, { Circle, Defs, LinearGradient, Rect, Stop, Text, G, Line } from "react-native-svg";

interface IProps extends ViewProps {
}

export const SvgCanvas04_Linear_Gradient = (props: IProps) => {

  return (
    <View>
      <Svg height="100%" width="100%" style={{ marginTop: 30 }}>
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

        <Defs>
          <LinearGradient id="g3" x1={0} y1={0} x2={1} y2={1}>
            <Stop offset="0" stopColor="#c31432" stopOpacity={0.5}/>
            <Stop offset="1" stopColor="#240b36" stopOpacity={1}/>
          </LinearGradient>
        </Defs>
        <G x={100} y={360}>
          <Rect x={0} y={0} width={220} height={100}
                fill="url(#g3)" rx={20} ry={20}/>
          <Text x={110} y={50} fill="#fff" fontSize={50}
                alignmentBaseline="bottom" textAnchor="middle">Login</Text>
        </G>
      </Svg>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {}
});
