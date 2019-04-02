import React from "react";
import { StyleSheet, View, Text } from "react-native";

export const RadioButton = ({ text, height,  }) => {
  return (
    <View>
      <View style={styles.outterCircle}/>
      <Text>radio button</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  outterCircle: {},
  innnerCiricle: {}
});