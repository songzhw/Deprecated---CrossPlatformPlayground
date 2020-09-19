import React from "react";
import { View, ViewProps, Text, StyleSheet } from "react-native";

interface IProps extends ViewProps {
  text: string;
  children: Element;
}

export const DotBox = (props: IProps) => {

  return (
    <View>
      {props.children}
      <Text style={styles.circle}>{props.text}</Text>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {},
  circle: {
    position: "absolute", top: -5, right: -5,
    width: 30, height: 30, borderRadius: 15,
    backgroundColor: "red", color: "white",
    textAlign: "center", lineHeight: 30
  }
});
