import React from "react";
import { View, ViewProps, StyleSheet } from "react-native";
import Svg, { Circle, Line, Rect, Text, TSpan } from "react-native-svg";

interface IProps extends ViewProps {
}

export const SvgCanvas12_Text = (props: IProps) => {

  return (
    <Svg style={{ backgroundColor: "#cccc" }}>
      <Text x={0} y={0} fill="red">Invisible Font (xyz)</Text>
      <Text x="0,20,40,60,70" y="0,20,40,60,70" fill="red">This xyz poly</Text>

      {/*这个rect做边界之用, 帮我们看清TextAnchor作用*/}
      <Rect x={100} y={100} width={200} height={80} stroke={"red"}/>
      <Text x={100} y={120} fontSize={20} fill="blue">Svg</Text>
      <Text x={100} y={140} fontSize={20} fill="blue" textAnchor={"middle"}>Svg</Text>
      <Text x={100} y={160} fontSize={20} fill="blue" textAnchor={"end"}>Svg</Text>

      <Line x1={0} y1={230} x2={900} y2={230} stroke="red" strokeWidth={1}/>
      <Text x={0} y={230} fill="blue" fontSize={22}>
        {/*alignmentBaseline默认就是baseline*/}
        <TSpan>SVG baseline </TSpan>
        <TSpan alignmentBaseline={"middle"}> SVG middle</TSpan>
        <TSpan alignmentBaseline={"central"}> SVG central</TSpan>
      </Text>

      <Line x1={0} y1={290} x2={900} y2={290} stroke="red" strokeWidth={1}/>
      <Text x={0} y={290} fill="blue" fontSize={20}>
        {/*alignmentBaseline默认就是baseline*/}
        <TSpan alignmentBaseline={"hanging"}>SVG hanging </TSpan>
        <TSpan alignmentBaseline={"before-edge"}> SVG before-edge</TSpan>
        <TSpan alignmentBaseline={"after-edge"}> SVG after-edge</TSpan>
      </Text>

      <Line x1={0} y1={340} x2={900} y2={340} stroke="red" strokeWidth={1}/>
      <Text x={0} y={340} fill="blue" fontSize={22}>
        {/*alignmentBaseline默认就是baseline*/}
        <TSpan alignmentBaseline={"top"}>SVG top </TSpan>
        <TSpan alignmentBaseline={"bottom"}>  SVG bottom</TSpan>
        <TSpan alignmentBaseline={"center"}>  SVG center</TSpan>
      </Text>

      <Line x1={0} y1={400} x2={900} y2={400} stroke="red" strokeWidth={1}/>
      <Text x={0} y={400} fill="blue" fontSize={22}>
        {/*alignmentBaseline默认就是baseline*/}
        <TSpan alignmentBaseline={"text-top"}>SVG text-top </TSpan>
        <TSpan alignmentBaseline={"text-bottom"}>  SVG text-bottom</TSpan>
      </Text>

      <Line x1={0} y1={460} x2={900} y2={460} stroke="red" strokeWidth={1}/>
      <Text x={0} y={460} fill="blue" fontSize={22}>
        {/*alignmentBaseline默认就是baseline*/}
        <TSpan alignmentBaseline={"text-before-edge"}>SVG text-before-edge </TSpan>
        <TSpan alignmentBaseline={"text-after-edge"}>  SVG text-after-edge</TSpan>
      </Text>


      <Line x1={0} y1={540} x2={900} y2={540} stroke="green" strokeWidth={1}/>
      <Text x={0} y={540} fill="blue" fontSize={50} >x
        <TSpan baselineShift="20" >2 </TSpan>
        <TSpan>CO</TSpan>
        <TSpan baselineShift="-20" >2 </TSpan>
      </Text>
    </Svg>
  );
};

const styles = StyleSheet.create({
  root: {}
});
