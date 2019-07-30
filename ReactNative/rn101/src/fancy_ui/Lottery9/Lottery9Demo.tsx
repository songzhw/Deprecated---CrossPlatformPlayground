import React from "react";
import { View, ViewProps, Text, StyleSheet, ImageBackground } from "react-native";
import Lottery9 from "./Lottery9";
import { LotteryData } from "./LotteryData";

interface IProps extends ViewProps {
}

export const Lottery9Demo = (props: IProps) => {

  return (
    <View style={styles.container}>
      <ImageBackground source={require("../../../res/images/lottery_console.png")} style={styles.center}>
        <Lottery9 data={LotteryData}/>
      </ImageBackground>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "grey"
  },
  center: {
    width: 345,
    height: 293,
    justifyContent: "center",
    alignItems: "center",
  }
});