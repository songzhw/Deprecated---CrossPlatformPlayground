import React from "react";
import { View, ViewProps, StyleSheet, Text } from "react-native";
import Svg, { Defs, LinearGradient, Rect, Stop, ForeignObject, Text as SvgText } from "react-native-svg";


export const SvgCanvasDemo10_GradientButton = () => {

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <LGButton startColor="yellow" endColor="red" width={200} height={90} roundCornerRadius={8}
                textColor="white" fontSize={42} text="Log In"/>
    </View>
  );
};


interface IProps extends ViewProps {
  startColor: string;
  endColor: string;
  width: number;
  height: number;
  roundCornerRadius: number;
  textColor: string;
  fontSize: number;
  text: string;
}

/* Linear Gradient Button */
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
      <SvgText x="50%" y="50%"
            fill={"white"} fontSize={12}
            textAnchor={"middle"} alignmentBaseline={"middle"}>{props.text}</SvgText>

      {/*<ForeignObject x={0} y={0} width={props.width} height={props.height}>*/}
      {/*  <View style={{ width:props.width, height:props.height, alignItems: "center", justifyContent: "center"}}>*/}
      {/*    <Text style={{fontSize: 12, color: "black"}}>Log In</Text>*/}
      {/*  </View>*/}
      {/*</ForeignObject>*/}
    </Svg>
  );
};

const styles = StyleSheet.create({
  root: {}
});
