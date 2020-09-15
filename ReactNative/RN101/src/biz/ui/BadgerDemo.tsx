import React from "react";
import { View, ViewProps, Text, StyleSheet, Image } from "react-native";
import { BadgerBox } from "../../ui/badger/BadgerBox";


export const BadgerDemo = () => {

  return (
    <View style={styles.container}>
      <BadgerBox>
        <Image source={require("../../../res/img/Daimond.jpg")} style={styles.image}/>
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
    width: 320,
    height: 200
  }
});

