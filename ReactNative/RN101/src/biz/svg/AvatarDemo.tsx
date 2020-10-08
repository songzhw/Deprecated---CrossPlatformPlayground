import React from "react";
import { View, ViewProps, StyleSheet } from "react-native";
import Svg, { Circle, ClipPath, Defs, Image, Rect, Text } from "react-native-svg";


export const AvatarDemo = () => {
  return (
    <View>
      <Avatar/>
    </View>
  );
};


interface IProps extends ViewProps {
}

const Avatar = (props: IProps) => {
  return (
    <Svg>
      <Defs>
        <ClipPath id="clip">
          <Circle cx="100" cy="100" r="100"/>
        </ClipPath>
      </Defs>
      <Rect width={200} height={200} fill={"gray"}/>
      <Text x={20} y={20} fontSize={30} fill={"red"} clipPath="url(#clip)">Szw</Text>
      {/*<Image href={require("../../../res/img/Daimond.jpg")} preserveAspectRatio="xMidYMid slice"*/}
      {/*       width={200} height={200}*/}
      {/*       />*/}
    </Svg>
  );
};

const styles = StyleSheet.create({
  root: {}
});
