import React, { createElement } from "react";
import { View, ViewProps, Text, StyleSheet, Image } from "react-native";

export const ChildStyleDemo = () => {

  return (
    <View style={{ backgroundColor: "gray" }}>
      <StyleableParent1>
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

  const newChild = createElement(props.children,
    {style: {width: 300, height:300, backgroundColor: "red"}}
    )
  console.log(`szw newc = `, newChild)

  return (
    <View style={styles.container}>
      {newChild}
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff1"
  }
});
