import React from "react";
import { View, ViewProps, Text, StyleSheet, SafeAreaView } from "react-native";
import Svg, { Circle, Defs, Mask, Rect } from "react-native-svg";

// Mask的maskUnits好像不起作用!

export const SvgCanvas21_Mask_Attrs = () => {

  return (
    <SafeAreaView>
      <Svg>
        <Defs>
          <Mask id="mask2" x={0} y={0} width={100} height={100} maskUnits="userSpaceOnUse">
            <Rect x={0} y={0} width={100} height={100} fill="#fff"/>
          </Mask>
        </Defs>

        <Circle cx={100} cy={100} r={80} fill="#9c6" mask="url(#mask2)"/>
      </Svg>
    </SafeAreaView>
  )
}


const styles = StyleSheet.create({
  root: {}
});
