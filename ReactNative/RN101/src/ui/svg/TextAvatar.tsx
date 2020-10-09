import { ViewProps } from "react-native";
import Svg, { Circle, ClipPath, Defs, Rect, Text } from "react-native-svg";
import React from "react";

interface IProps extends ViewProps {
  size: number;
  fontSize: number;
  text: string;
  bgColor: string;
  textColor: string;
}


export const TextAvatar = (props: IProps) => {
  const { size, bgColor, textColor } = props;
  const radius = size / 2;
  return (
    <Svg width={size} height={size}>
      <Defs>
        <ClipPath id="clip">
          <Circle cx={radius} cy={radius} r={radius}/>
        </ClipPath>
      </Defs>
      <Rect width={200} height={200}
            fill={bgColor} clipPath="url(#clip)"
      />
      <Text x="50%" y="50%"
            fill={textColor} fontSize={props.fontSize} fontWeight={"bold"}
            textAnchor={"middle"} alignmentBaseline={"middle"}>{props.text}</Text>
    </Svg>
  );
};
