import React, { useState } from "react";
import { View, ViewProps, Text, StyleSheet, Animated } from "react-native";
import { SemiCircleProgressView } from "../../ui/circle/SemiCircleProgressView";

interface IProps extends ViewProps {
}

export const SemiCircleDemo = (props: IProps) => {
  return (
    <View>
      <SemiCircleProgressView radius={150} bg="grey" style={{ margin: 50 }}
                              color="red" progressWidth={50} progress={30}>
        <Text>fulfilled: 35%</Text>
      </SemiCircleProgressView>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {}
});