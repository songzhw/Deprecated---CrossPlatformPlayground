import React from "react";
import { View, ViewProps, Text, StyleSheet, Image } from "react-native";

export const ChildStyleDemo = () => {

  return (
    <View style={{ backgroundColor: "gray" }}>
      <StyleableParent1>
        <Text>Hello</Text>
        <Text>World</Text>
        <Image source={require("../../res/img/ic_star_full.png")} style={{ width: 100, height: 100 }}/>
      </StyleableParent1>

      <Image source={require("../../res/img/Daimond.jpg")} style={{ width: 200, height: 120 }}/>
    </View>
  );
};


interface IProps {
  children: Element;
}

export const StyleableParent1 = (props: IProps) => {
  return (
    <View style={styles.container}>
      {props.children}
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff1"
  }
});
