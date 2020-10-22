import React from "react";
import { View, ViewProps, StyleSheet } from "react-native";
import Svg, { Defs, G, Text, TextPath, TSpan, Path } from "react-native-svg";

interface IProps extends ViewProps  {}

export const SvgCanvas15_TextPath = (props: IProps) => {
  const path = "M0,70 Q75,39,150,70 T 300,70   "

  return (
    <Svg>
      <Defs>
        <Path id="path" d={path} />
      </Defs>
      <G y="20">
        <Text fill="blue" fontSize={20}>
          <TextPath href="#path" startOffset="-10%">
            We go up and down,
            <TSpan fill="red" dy="5,5,5">
              then up again
            </TSpan>
          </TextPath>
        </Text>
        <Path d={path} fill="none" stroke="red" strokeWidth="1" />
      </G>
    </Svg>
  )
}


const styles = StyleSheet.create({
  root: {}
});
