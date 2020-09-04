import React from "react";
import { View, ViewProps, StyleSheet, SafeAreaView } from "react-native";
import Svg, { Circle, Defs, Use, Text } from "react-native-svg";
import { IPieData, PieChart } from "../../ui/chart/pie/PieChart";

interface IProps extends ViewProps {
}

export const SvgCanvas5Pie = (props: IProps) => {

  const data: IPieData[] = [
    { percentage: 25, name: "book", color: "black" },
    { percentage: 35, name: "comic", color: "green" },
    { percentage: 40, name: "TV" }
  ];

  return (
    <SafeAreaView style={styles.root}>
      <PieChart radius={40} size={100} pieWidth={12} data={data}
                title="Pie" titleColor={"red"} titleSize={18}/>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: { flex: 1, alignItems: "center", justifyContent: "center" }
});
