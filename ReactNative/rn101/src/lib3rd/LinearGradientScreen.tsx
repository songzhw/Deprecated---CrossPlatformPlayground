import React from "react";
import { View, ViewProps, Text, StyleSheet } from "react-native";
import LinearGradientView from "react-native-linear-gradient";

interface IProps extends ViewProps {
}

// TODO 可点击
export const LinearGradientScreen = (props: IProps) => {

  return (
    <View style={styles.container}>
      <LinearGradientView colors={["#91004B", "#C60C30"]} locations={[0, 0.8859]} style={styles.gradientParent}>
        <Text style={styles.text}> Yes, that's what I need </Text>
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
    width: 205,
    height: 48,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 4
  },
  text: {
    fontSize: 14,
    color: "#fff"
  }
});