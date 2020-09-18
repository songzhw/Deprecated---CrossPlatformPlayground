import React from "react";
import { StyleSheet, View } from "react-native";
import Svg, { Circle, ClipPath, Defs, Rect } from "react-native-svg";

export const PlaceHolderDemo = () => {
  const color = "blue";

  return (
    <View style={styles.container}>
      <Svg width={240} height={200} style={{ backgroundColor: "#0001" }}>
        <Defs>
          <ClipPath id="clip">
            <Rect x={10} y={10} width={60} height={20} rx={9} ry={9} fill={color}/>
            <Rect x={80} y={10} width={80} height={20} rx={9} ry={9} fill={color}/>
            <Circle x={180} y={20} r={10} fill={color}/>
            <Rect x={30} y={40} width={70} height={20} rx={9} ry={9} fill={color}/>
            <Rect x={110} y={40} width={120} height={20} rx={9} ry={9} fill={color}/>
          </ClipPath>
        </Defs>

        <Rect x={0} y={0} width={240} height={200}  clipPath="url(#clip)" fill={"red"}/>
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
