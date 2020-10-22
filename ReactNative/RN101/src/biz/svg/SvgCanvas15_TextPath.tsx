import React from "react";
import { View, ViewProps, StyleSheet } from "react-native";
import Svg, { Defs, G, Text, TextPath, TSpan, Path } from "react-native-svg";

interface IProps extends ViewProps {
}

export const SvgCanvas15_TextPath = (props: IProps) => {
  const path = "M0,70 Q75,39,150,70 T 300,70";
  const path2 = "M0,170 Q75,139,150,170 T 300,170";

  return (
    <Svg>
      <Defs>
        <Path id="path" d={path}/>
        <Path id="path2" d={path2} />
      </Defs>
      <G y="20">
        <Text fill="blue" fontSize={20}>
          <TextPath href="#path" startOffset="10%">
            We go up and down,
            <TSpan fill="red"> then up again </TSpan>
          </TextPath>
        </Text>
        <Path d={path} fill="none" stroke="red" strokeWidth="1"/>


        {/*method属性看不出效果*/}
        <Text x="10%" fill="black" fontSize={30}>
          <TextPath href="#path2" method="stretch">Svg Text</TextPath>
          <TextPath href="#path2" method="align">Svg Text</TextPath>
        </Text>
        <Path d={path2} fill="none" stroke="red" strokeWidth="1"/>
      </G>
    </Svg>
  );
};


const styles = StyleSheet.create({
  root: {}
});
