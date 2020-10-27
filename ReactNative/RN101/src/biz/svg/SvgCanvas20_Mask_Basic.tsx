import React from "react";
import { View, ViewProps, Text, StyleSheet, SafeAreaView } from "react-native";
import Svg, { Circle, Defs, Mask, Rect } from "react-native-svg";

interface IProps extends ViewProps {
}

export const SvgCanvas20_Mask_Basic = (props: IProps) => {

  return (
    <SafeAreaView>
      <Svg>
        <Defs>
          <Mask id="mask1">
            <Rect x={0} y={0} width={100} height={100} fill="#fff"/>
          </Mask>
        </Defs>

        <Circle cx={100} cy={100} r={80} fill="#9c6" mask="url(#mask1)"/>
      </Svg>
    </SafeAreaView>
  );
};


const styles = StyleSheet.create({
  root: {}
});
