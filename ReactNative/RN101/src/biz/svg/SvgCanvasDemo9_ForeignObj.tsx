import React from "react";
import { View, ViewProps, Text, StyleSheet, Image } from "react-native";
import { Svg, Defs, LinearGradient, Stop, Mask, Rect, G, Circle, ForeignObject } from "react-native-svg";

interface IProps extends ViewProps {
}

export const SvgCanvasDemo9_ForeignObj = (props: IProps) => {

  return (
    <View style={{ flex: 1, justifyContent: "center" }}>
      <Svg height="50%">
        <Defs>
          <LinearGradient id="Gradient" gradientUnits="userSpaceOnUse"
                          x1="0" y1="0" x2="800" y2="0">
            <Stop offset="0" stopColor="white" stopOpacity="0.2"/>
            <Stop offset="1" stopColor="white" stopOpacity="1"/>
          </LinearGradient>
          <Mask id="Mask" maskUnits="userSpaceOnUse"
                x="0" y="0" width="800" height="300">
            <Rect x="0" y="0" width="800" height="300" fill="url(#Gradient)"/>
          </Mask>
        </Defs>
        <G mask="url(#Mask)">
          <Circle cx={50} cy={70} r={65}/>

          <ForeignObject x={50} y={0} width={100} height={100}>
            <View style={{ width: 200, height: 400, transform: [] }}>
              <Image style={{ width: 200, height: 200 }}
                     source={{ uri: "https://picsum.photos/200/200" }}/>
            </View>
          </ForeignObject>

          <ForeignObject x={55} y={5} width={100} height={100}>
            <View style={{ width: 200, height: 400, transform: [] }}>
              <Text style={{ color: "blue" }}>Testing</Text>
              <Text style={{ color: "green" }}>Testing2</Text>
            </View>
          </ForeignObject>

        </G>
      </Svg>
    </View>
  );
};


const styles = StyleSheet.create({
  root: {}
});
