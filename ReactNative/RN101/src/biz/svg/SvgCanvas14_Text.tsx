import React from "react";
import { View, ViewProps, Text as RnText, StyleSheet } from "react-native";
import Svg, { ForeignObject, Text } from "react-native-svg";

interface IProps extends ViewProps {
}

export const SvgCanvas14_Text = (props: IProps) => {

  return (
    <Svg>
      <Text fill="black" fontSize={22} x={20} y={80}  >Have you done writing?</Text>
      <Text fill="black" fontSize={22} x={20} y={140} kerning={-2}>Have you done writing?</Text>
      <Text fill="black" fontSize={22} x={20} y={200} kerning={2}>Have you done writing?</Text>
      <Text fill="black" fontSize={22} x={20} y={260} letterSpacing={2}>Have you done writing?</Text>
      <Text fill="black" fontSize={22} x={20} y={320} letterSpacing={-2}>Have you done writing?</Text>
      <Text fill="black" fontSize={22} x={20} y={380} wordSpacing={12}>Have you done writing?</Text>

      {/*不会自动换行的*/}
      <Text fill="#6200ea" fontSize={22} x={20} y={440} >One thing SVG text doesn’t do is wrap text automatically. Instead SVG text will keep going and going in a straight line. Remember that the viewport we set using the width and height attributes is the size of the window that lets us peer into an infinite SVG canvas. The canvas is still infinite though, and while you may not see the text outside the viewport, it can still render outside the viewport.</Text>
      {/*  要想自动换就只有: */}
      <ForeignObject x={20} y={500}>
        <RnText>One thing SVG text doesn’t do is wrap text automatically. Instead SVG text will keep going and going in a straight line. Remember that the viewport we set using the width and height attributes is the size of the window that lets us peer into an infinite SVG canvas. The canvas is still infinite though, and while you may not see the text outside the viewport, it can still render outside the viewport.</RnText>
      </ForeignObject>
    </Svg>
  );
};


const styles = StyleSheet.create({
  root: {}
});
