import React from "react";
import { View, ViewProps, Text, StyleSheet } from "react-native";
import LinearGradientView from "react-native-linear-gradient";

interface IProps extends ViewProps {
}

// TODO 可点击
export const LinearGradientScreen = (props: IProps) => {

  return (
    <View style={styles.container}>
      <LinearGradientView colors={["#91004B", "#C60C30"]} style={styles.gradientParent}>
        <Text style={styles.text}> Thank You </Text>
      </LinearGradientView>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  gradientParent: {
    width: 150,
    height: 60,
    alignItems: "center",
    justifyContent: "center"
  },
  text: {
    fontSize: 22,
    color: "#fff"
  }
});