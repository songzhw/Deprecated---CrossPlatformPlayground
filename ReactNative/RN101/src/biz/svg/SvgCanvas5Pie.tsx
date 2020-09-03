import React from "react";
import { View, ViewProps, Text, StyleSheet } from "react-native";
import Svg, { Circle, Defs, Use } from "react-native-svg";

interface IProps extends ViewProps {
}

export const SvgCanvas5Pie = (props: IProps) => {

  return (
    <View>
      <Svg>
        <Defs>
          <Circle id="shape" cx="50" cy="50" r="80" fill="none" strokeWidth={28}/>
        </Defs>

        {/*越长的环, 越要在下方; 要是在上亠, 就会遮住其它环*/}
        <Use href="#shape" x={90} y={90} stroke={"green"} strokeDasharray="600 3000"/>
        <Use href="#shape" x={90} y={90} stroke={"red"} strokeDasharray="210 3000"/>
        <Use href="#shape" x={90} y={90} stroke={"blue"} strokeDasharray="100 3000"/>

      </Svg>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {}
});