import React from "react";
import { View, ViewProps, Text, StyleSheet, Image } from "react-native";
import { BadgerBox } from "../../ui/badger/BadgerBox";
import { DotBox } from "../../ui/badger/DotBox";

const width = 320;
const height = 160;

export const BadgerDemo = () => {

  return (
    <View style={styles.container}>
      <BadgerBox width={width} height={height} gap={55}
                 labelBg={"orange"} labelTextColor={"black"}
                 labelTextHeight={26} labelTextSize={16}
                 labelText="Hot!">
        <Image source={require("../../../res/img/Daimond.jpg")}
               style={styles.image}/>
      </BadgerBox>

      <View style={{height:30}}/>
      <BadgerBox width={260} height={100} gap={55}
                 labelBg={"red"} labelTextColor={"white"}
                 labelTextHeight={26} labelTextSize={16}
                 labelText="new">
        <Image source={require("../../../res/img/Daimond.jpg")}
               style={{width:260, height:100}}/>
      </BadgerBox>

      <View style={{height:30}}/>
      <BadgerBox width={160} height={70} gap={29}
                 labelBg={"green"} labelTextColor={"red"}
                 labelTextHeight={20} labelTextSize={14}
                 labelText="new">
        <Image source={require("../../../res/img/Daimond.jpg")}
               style={{width:160, height:70}}/>
      </BadgerBox>

      <View style={{height:30}}/>
      <DotBox text={"3"}>
        <Image source={require("../../../res/img/Daimond.jpg")}
               style={{width:100, height:100}}/>
      </DotBox>

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

