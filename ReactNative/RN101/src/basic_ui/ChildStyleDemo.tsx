import React, { createElement } from "react";
import { View, ViewProps, Text, StyleSheet, Image } from "react-native";

export const ChildStyleDemo = () => {

  return (
    <View style={{ backgroundColor: "gray" }}>
      <StyleableParent1>
        <Text>Hello World</Text>
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
      {React.Children.map(props.children, (element, index) => {
        // @ts-ignore
        return React.cloneElement(element, {style: {width: 300, height: 300}})
      })}
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff1"
  }
});
