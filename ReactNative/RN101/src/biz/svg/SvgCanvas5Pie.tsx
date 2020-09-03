import React from "react";
import { View, ViewProps, StyleSheet } from "react-native";
import Svg, { Circle, Defs, Use, Text } from "react-native-svg";

interface IProps extends ViewProps {
}

export const SvgCanvas5Pie = (props: IProps) => {

  return (
    <View>
      <Svg>
        <Defs>
          <Circle id="shape" cx="100" cy="100" r="80" fill="none" strokeWidth={28}/>
        </Defs>

        {/*越长的环, 越要在下方; 要是在上亠, 就会遮住其它环*/}

        <Text x="150" y="50" fontSize={40}>Pie</Text>
      </Svg>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {}
});