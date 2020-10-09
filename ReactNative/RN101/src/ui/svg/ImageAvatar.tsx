import { ViewProps } from "react-native";
import * as ReactNative from "react-native";
import Svg, { Circle, ClipPath, Defs, Image } from "react-native-svg";
import React from "react";

interface IProps extends ViewProps {
  size: number;
  href?: ReactNative.ImageProps["source"];
}

export const ImageAvatar = (props: IProps) => {
  const { size } = props;
  const radius = size / 2;
  return (
    <Svg width={size} height={size} style={props.style}>
      <Defs>
        <ClipPath id="clip">
          <Circle cx={radius} cy={radius} r={radius}/>
        </ClipPath>
      </Defs>
      <Image href={props.href} preserveAspectRatio="xMidYMid slice"
             width={size} height={size}
             clipPath="url(#clip)"
      />
    </Svg>
  );
};
