import React from "react";
import { View, ViewProps, Text, StyleSheet } from "react-native";
import Svg, { Image } from "react-native-svg";



export const AvatarDemo = () => {

  return (
    <View>
      <Avatar/>
    </View>
  )
}


interface IProps extends ViewProps  {}

const Avatar = (props: IProps) => {
  return (
    <Svg>
      <Image href={require("../../../res/img/Daimond.jpg")}/>
    </Svg>
  )
}

const styles = StyleSheet.create({
  root: {}
});
