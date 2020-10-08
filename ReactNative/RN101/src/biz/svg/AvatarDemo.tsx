import React from "react";
import { View, ViewProps, Text, StyleSheet } from "react-native";
import Svg, { Circle, ClipPath, Defs, Image } from "react-native-svg";



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
      <Defs>
        <ClipPath id="clip">
          <Circle cx="50%" cy="50%" r="40%"/>
        </ClipPath>
      </Defs>
      <Image href={require("../../../res/img/Daimond.jpg")} preserveAspectRatio="xMidYMid slice"
             width={200} height={200}
      clipPath="url(#clip)"/>
    </Svg>
  )
}

const styles = StyleSheet.create({
  root: {}
});
