import React from "react";
import { View, ViewProps, Text, StyleSheet, Image } from "react-native";
import { BadgerBox } from "../../ui/badger/BadgerBox";

const width = 240;
const height = 110;

export const BadgerDemo = () => {

  return (
    <View style={styles.container}>
      <BadgerBox width={width} height={height} gap={55}
                 labelBg={"orange"} labelTextColor={"blue"}
                 labelTextHeight={26} labelTextSize={16}
                 labelText="Hot!">
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

