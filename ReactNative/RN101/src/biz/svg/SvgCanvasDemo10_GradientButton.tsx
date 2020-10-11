import React from "react";
import { View, ViewProps, Text, StyleSheet } from "react-native";
import Svg, { Defs, LinearGradient, Rect, Stop } from "react-native-svg";


export const SvgCanvasDemo10_GradientButton = () => {

  return (
    <View style={{flex:1, alignItems:"center", justifyContent: "center"}}>
      <LGButton startColor="yellow" endColor="red" width={200} height={90} roundCornerRadius={8}/>
    </View>
  );
};


interface IProps extends ViewProps {
  startColor: string;
  endColor: string;
  width: number;
  height: number;
  roundCornerRadius: number;
}

/* Linear Graident Button */
export const LGButton = (props: IProps) => {
  return (
    <Svg width={props.width} height={props.height}>
      <Defs>
        <LinearGradient id="lg">
          <Stop offset={0} stopColor={props.startColor}/>
          <Stop offset={1} stopColor={props.endColor}/>
        </LinearGradient>
      </Defs>
      <Rect width={props.width} height={props.height} rx={props.roundCornerRadius} ry={props.roundCornerRadius}
            fill="url(#lg)"/>
    </Svg>
  );
};

const styles = StyleSheet.create({
  root: {}
});
