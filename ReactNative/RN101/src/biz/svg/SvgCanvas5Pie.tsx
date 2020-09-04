import React from "react";
import { View, ViewProps, StyleSheet, SafeAreaView } from "react-native";
import Svg, { Circle, Defs, Use, Text } from "react-native-svg";
import { IPieData, PieChart } from "../../ui/chart/pie/PieChart";

interface IProps extends ViewProps {
}

export const SvgCanvas5Pie = (props: IProps) => {

  const data: IPieData[] = [
    {percentage: 20, name: "book", color: "red"}
  ];

  return (
    <SafeAreaView style={styles.root}>
      <PieChart radius={40} size={100} pieWidth={12} data={data} title="Pie"/>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: { flex: 1, alignItems: "center", justifyContent: "center" }
});
