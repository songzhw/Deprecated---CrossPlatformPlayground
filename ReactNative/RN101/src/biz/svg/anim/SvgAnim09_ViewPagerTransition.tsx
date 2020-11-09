import React from "react";
import { View, ViewProps, Text, StyleSheet } from "react-native";
import { ImageButton } from "../../../ui/button/ImageButton";

interface IProps extends ViewProps  {}

export const SvgAnim09_ViewPagerTransition = (props: IProps) => {

  const leftPressed = ()=>{}
  const rightPressed = ()=>{}
  return (
    <View>
      <ImageButton size={40} source={require("../../../../res/img/ic_left.png")} onPressed={leftPressed}/>
      <ImageButton size={40} source={require("../../../../res/img/ic_right.png")} onPressed={rightPressed}/>
    </View>
  )
}


const styles = StyleSheet.create({
  root: {
    flex:1,
    flexDirection: "row"
  }
});
