import React from "react";
import { View, ViewProps, Text, StyleSheet } from "react-native";
import { CircleProgress } from "../../ui/circle/CircleProgress";

interface IProps extends ViewProps {
}

export const SvgAnimDemo3 = (props: IProps) => {

  return (
    <View style={styles.container}>
      <CircleProgress radius={120}/>
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