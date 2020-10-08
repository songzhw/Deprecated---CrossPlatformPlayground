import React from "react";
import { View, ViewProps, StyleSheet } from "react-native";
import Svg, { Circle, ClipPath, Defs, Image, Rect, Text } from "react-native-svg";


export const AvatarDemo = () => {
  return (
    <View>
      <Avatar/>
      <TextAvatar/>
    </View>
  );
};


interface IProps extends ViewProps {
}

const Avatar = (props: IProps) => {
  return (
    <Svg width={200} height={200}>
      <Defs>
        <ClipPath id="clip">
          <Circle cx="100" cy="100" r="100"/>
        </ClipPath>
      </Defs>
      <Image href={require("../../../res/img/Daimond.jpg")} preserveAspectRatio="xMidYMid slice"
             width={200} height={200}
             clipPath="url(#clip)"
      />
    </Svg>
  );
};


const TextAvatar = (props: IProps) => {
  return (
    <Svg width={200} height={200}>
      <Defs>
        <ClipPath id="clip">
          <Circle cx="100" cy="100" r="100"/>
        </ClipPath>
      </Defs>
      <Rect width={200} height={200}
            fill="gray" clipPath="url(#clip)"
      />
      <Text x={100} y={130} fill="red" fontSize={70} textAnchor={"middle"} fontWeight={"bold"}>MJ</Text>
    </Svg>
  );
};

const styles = StyleSheet.create({
  root: {}
});
