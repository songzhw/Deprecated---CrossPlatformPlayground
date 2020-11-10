import React from "react";
import { View, ViewProps, Text, StyleSheet } from "react-native";
import Svg, { Circle } from "react-native-svg";

interface IVpScreenUI {
  color: string;
  next: string;
  cx: number;
}

interface IProps extends ViewProps {
  data: IVpScreenUI[];
  cy: number;
  r: number;
}

export const VpIndicator = (props: IProps) => {
  const { data, cy, r } = props;
  return (
    <Svg style={styles.root}>
      {data.map((item, index) => (
        <Circle key={`vpIndicator${index}`} cx={item.cx} cy={cy} r={r} fill={item.color}
                stroke={"white"} strokeWidth={1}
        />
      ))}
    </Svg>
  );
};


const styles = StyleSheet.create({
  root: {
    position: "absolute", left: 0, right: 0, bottom: 0, top: 0
  }
});
