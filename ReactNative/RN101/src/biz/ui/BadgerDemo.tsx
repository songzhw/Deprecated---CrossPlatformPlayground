import React from "react";
import { View, ViewProps, Text, StyleSheet, Image } from "react-native";
import { BadgerBox } from "../../ui/badger/BadgerBox";

const width = 320;
const height = 200;

export const BadgerDemo = () => {

  return (
    <View style={styles.container}>
      <BadgerBox width={width} height={height} gap={80}
                 labelBg={"orange"} labelTextColor={"black"}
                 labelTextHeight={35} labelTextSize={18}>
        <Image source={require("../../../res/img/Daimond.jpg")}
               style={styles.image}/>
      </BadgerBox>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  image: {
    width: width,
    height: height
  }
});

