import React from "react";
import { View, ViewProps, Text, StyleSheet } from "react-native";
import { RippleTransitionBg } from "./RippleTransitionBg";
import { RippleBg } from "./RippleBg";

interface IProps extends ViewProps {
}

export const SvgAnim10_Ripple = (props: IProps) => {

  return (
    <View style={styles.root}>
      <RippleBg style={styles.bg}/>
      <Text style={styles.text}>SixCan</Text>
    </View>
  );
};


const styles = StyleSheet.create({
  root: { flex: 1, alignItems: "center", justifyContent: "center" },
  text: { fontSize: 20, color: "white" },
  bg: { position: "absolute", top: 0, left: 0, right: 0, bottom: 0, backgroundColor: "red" }
});
