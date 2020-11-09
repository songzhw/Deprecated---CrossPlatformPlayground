import React from "react";
import { View, ViewProps, Text, StyleSheet } from "react-native";
import { ImageButton } from "../../../ui/button/ImageButton";

interface IProps extends ViewProps {
}

export const SvgAnim09_ViewPagerTransition = (props: IProps) => {

  const leftPressed = () => {
    console.log(`SZW CLICK LEFT`)
  };
  const rightPressed = () => {
  };
  return (
    <View style={styles.root}>
      <ImageButton size={60} source={require("../../../../res/img/ic_left.png")} onPressed={leftPressed} style={{ marginLeft: 20 }}/>
      <ImageButton size={60} source={require("../../../../res/img/ic_right.png")} onPressed={rightPressed} style={{ marginRight: 20 }}/>
    </View>
  );
};


const styles = StyleSheet.create({
  root: {
    flex: 1, flexDirection: "row", justifyContent: "space-between", alignItems: "center"
  }
});
