import React from "react";
import { StyleSheet, View } from "react-native";
import Svg, { Circle, ClipPath, Defs, LinearGradient, Rect, Stop } from "react-native-svg";

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

          <LinearGradient id={"shimmer"} x1={0} y1={0} x2={"100%"} y2={0}>
            <Stop stopColor="#ffebee" offset={0}/>
            <Stop stopColor="#b71c1c" offset={0.6}/>
            <Stop stopColor="#ffebee" offset={1}/>
          </LinearGradient>
        </Defs>

        <Rect x={0} y={0} width={240} height={200}  clipPath="url(#clip)" fill="url(#shimmer)"/>
      </Svg>
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
