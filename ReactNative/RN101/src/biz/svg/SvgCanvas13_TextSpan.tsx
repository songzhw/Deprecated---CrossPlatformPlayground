import React from "react";
import { View, ViewProps, StyleSheet } from "react-native";
import Svg, {Text} from "react-native-svg";

interface IProps extends ViewProps {
}

export const SvgCanvas13_TextSpan = (props: IProps) => {

  return (
    <View style={styles.root}>
      <Svg width={300} height={200} style={{backgroundColor: "#cccc"}}>
        <Text x={0} y={0}>Svg1 Svg2</Text>
      </Svg>
    </View>
  );
};


const styles = StyleSheet.create({
  root: { flex: 1, alignItems: "center", justifyContent: "center" }
});
