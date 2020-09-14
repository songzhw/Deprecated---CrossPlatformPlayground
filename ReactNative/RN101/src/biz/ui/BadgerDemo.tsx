import React from "react";
import { View, ViewProps, Text, StyleSheet } from "react-native";


export const BadgerDemo = () => {

  return (
    <View>
      <View style={{position: "absolute", top: 50, left: -50,
        transform: [{rotate: "145deg"}],
        backgroundColor: "blue", width: 100, height: 100}}/>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});

