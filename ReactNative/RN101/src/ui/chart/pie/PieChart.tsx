import React from "react";
import { View, ViewProps, StyleSheet } from "react-native";
import Svg, { Circle, Defs, Use, Text } from "react-native-svg";

export interface IPieData {
  percentage: number; //30 means "30%"
  name: string;
  color?: string
}

interface IProps extends ViewProps {
  radius: number;
  size: number;
  pieWidth: number;
  data: IPieData[]; // all of their `percentage` should sum up to be 100
  title: string;
  titleColor: string;
  titleSize: number
}

export const PieChart = (props: IProps) => {
  const { size, radius, pieWidth, data, title, titleColor, titleSize } = props;

  const circumference = Math.PI * 2 * radius;
  let previousLength = 0;
  const pieData: IPieData[] = data.map(datum => {
    const length = circumference * datum.percentage / 100;
    previousLength += length;
    const color = datum.color ? datum.color : `#${Math.random().toString(16).substr(2, 6)}`;
    return { percentage: previousLength, name: datum.name, color: color };
  }).reverse(); //倒序就是为了让长度最长的在最下方, 这样可以被其它短的遮住


  return (
    <View style={props.style}>
      <Svg width={size} height={size} viewBox="0 0 100 100">
        <Defs>
          <Circle id="shape" cx="50" cy="50" r={radius} fill="none" strokeWidth={pieWidth}/>
        </Defs>

        {/*越长的环, 越要在下方; 要是在上方, 就会遮住其它环*/}
        {pieData.map(datum =>
          <Use key={datum.name} href="#shape" x={0} y={0} stroke={datum.color} strokeDasharray={`${datum.percentage} 3000`}/>
        )}

        <Text x="50" y="55" fontSize={titleSize} fill={titleColor} textAnchor={"middle"}>{title}</Text>
      </Svg>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {}
});



