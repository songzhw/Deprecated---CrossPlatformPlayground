import React from "react";
import { View, ViewProps, Text, StyleSheet } from "react-native";
import Svg, { Symbol, Defs, Path, ClipPath, Use } from "react-native-svg";


export const Svg101B_Icon_ChangeColor = () => {

  return (
    <View>
      <SvgIcon101B>
        <Use href="#lang" x={0} y={40} width={180} height={180} fill="black"/>
        <Use href="#lang" x={0} y={240} width={180} height={180} fill="red"/>
        <Use href="#lang" x={0} y={440} width={180} height={180} fill="blue"/>
      </SvgIcon101B>
    </View>
  );
};

interface IProps {
  children: any
}

export const SvgIcon101B = (props: IProps) => {
  return (
    <Svg>
      <Symbol id="lang" viewBox="0 0 24 24">
        <Path
          d="M12.87 15.07l-2.54-2.51.03-.03c1.74-1.94 2.98-4.17 3.71-6.53H17V4h-7V2H8v2H1v1.99h11.17C11.5 7.92 10.44 9.75 9 11.35 8.07 10.32 7.3 9.19 6.69 8h-2c.73 1.63 1.73 3.17 2.98 4.56l-5.09 5.02L4 19l5-5 3.11 3.11.76-2.04zM18.5 10h-2L12 22h2l1.12-3h4.75L21 22h2l-4.5-12zm-2.62 7l1.62-4.33L19.12 17h-3.24z"/>
      </Symbol>
      {props.children}
    </Svg>
  );
};
