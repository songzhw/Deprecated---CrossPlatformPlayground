import React from "react";
import { StyleSheet, View } from "react-native";
import Svg, { Circle, Rect } from "react-native-svg";

export const PlaceHolderDemo = () => {
  return (
    <View style={styles.container}>
      <Svg height={200} width={240} style={{backgroundColor: "#0001"}}>
        <Rect x={10} y={10} width={60} height={20} rx={9} ry={9} fill={"gray"}/>
        <Rect x={80} y={10} width={80} height={20} rx={9} ry={9} fill={"gray"}/>
        <Circle x={180} y={20} r={10} fill={"gray"}/>
        <Rect x={30} y={40} width={70} height={20} rx={9} ry={9} fill={"gray"}/>
        <Rect x={110} y={40} width={120} height={20} rx={9} ry={9} fill={"gray"}/>
      </Svg>
    </View>
  );
};
// <Rect>中的rx, ry是代表四角是圆形的

const styles = StyleSheet.create({
  container: {
    flex: 1, alignItems: "center", justifyContent: "center"
  }
});
