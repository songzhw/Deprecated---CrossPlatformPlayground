import React from "react";
import { View, ViewProps, Text, StyleSheet, SafeAreaView } from "react-native";
import Svg, { Circle, Defs, EMaskUnits, Mask, Rect } from "react-native-svg";

interface IProps extends ViewProps  {}

export const SvgCanvas21_Mask_Attrs = (props: IProps) => {

  return (
    <SafeAreaView>
      <Svg>
        <Defs>
          <Mask id="mask2" x={0} y={0} width={100} height={100} maskUnits={EMaskUnits.OBJECT_BOUNDING_BOX}>
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
