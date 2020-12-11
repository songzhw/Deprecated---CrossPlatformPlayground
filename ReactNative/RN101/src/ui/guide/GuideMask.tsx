import React from "react";
import { View, ViewProps, Text, StyleSheet } from "react-native";
import Svg, { Circle, ClipPath, Defs, Image, LinearGradient, Mask, Path, Rect, Stop } from "react-native-svg";

interface IProps extends ViewProps {

}

export const GuideMask = (props: IProps) => {
  // style={{backgroundColor: "blue"}}
  return (
    <View style={{ position: "absolute", top: 0, right: 0, left: 0, bottom: 0 }}>
      <Svg height="100%" width="100%">
        <Defs>
          <Mask id="mask" x={0} y={0} height="100%" width="100%">
            <Rect height="100%" width="100%" fill="red"/>
            <Circle r="45" cx="50" cy="50"/>
          </Mask>
        </Defs>
        <Circle r={20} cx={0} cy={0} fill={"red"}/>
        <Rect height="100%" width="100%" fill="#0007"  mask="url(#mask)" fillOpacity={0}/>
      </Svg>
    </View>
  );
};


const styles = StyleSheet.create({
  container: { ...StyleSheet.absoluteFillObject }
});

// viewBox="0 0 100 100" preserveAspectRatio={"none"}