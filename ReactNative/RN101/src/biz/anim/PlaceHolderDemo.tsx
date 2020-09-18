import React from "react";
import { StyleSheet, View } from "react-native";
import Svg, { Circle, ClipPath, Defs, LinearGradient, Rect, Stop } from "react-native-svg";
import { Shimmer } from "../../ui/shimmer/Shimmer";

export const PlaceHolderDemo = () => {
  const color = "blue";

  return (
    <View style={styles.container}>
      <Shimmer width={220} height={180}>
        <Rect x={10} y={10} width={60} height={20} rx={9} ry={9} fill={color}/>
        <Rect x={80} y={10} width={80} height={20} rx={9} ry={9} fill={color}/>
        <Circle x={180} y={20} r={10} fill={color}/>
        <Rect x={30} y={40} width={70} height={20} rx={9} ry={9} fill={color}/>
        <Rect x={110} y={40} width={120} height={20} rx={9} ry={9} fill={color}/>
      </Shimmer>
    </View>
  );
};
// <Rect>中的rx, ry是代表四角是圆形的
// Stop若不加offset表示适用于哪一区间, 那第一个Stop就会占满100%空间.
// Stop的值可能是string的"0%"到"100%", 也可以是number的[0,1]

const styles = StyleSheet.create({
  container: {
    flex: 1, alignItems: "center", justifyContent: "center"
  }
});
