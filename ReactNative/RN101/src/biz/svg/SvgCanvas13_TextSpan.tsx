import React from "react";
import { View, ViewProps, StyleSheet } from "react-native";
import Svg, { Text, TSpan } from "react-native-svg";

interface IProps extends ViewProps {
}

export const SvgCanvas13_TextSpan = (props: IProps) => {

  return (
    <View style={styles.root}>
      <Svg width={300} height={200} style={{ backgroundColor: "#cccc" }}>
        <Text x={50} y={60} fontSize={20} fill={"red"}>
          <TSpan>Svg1</TSpan>
          <TSpan x={10} y={20} fontSize={22} fill={"blue"} rotate={30}>Svg2</TSpan>
        </Text>
      </Svg>
    </View>
  );
};


const styles = StyleSheet.create({
  root: { flex: 1, alignItems: "center", justifyContent: "center" }
});
