import React from "react";
import { View, ViewProps, StyleSheet, ImageBackground, Button } from "react-native";
import Lottery9 from "./Lottery9";
import { LotteryData } from "./LotteryData";

interface IProps extends ViewProps {
}

export const Lottery9Demo = (props: IProps) => {
  const lotteryRef = React.createRef<Lottery9>();

  const start = () => {
    lotteryRef.current!.start();
  };

  return (
    <View style={styles.container}>
      <Button title={"start"} onPress={start}/>
      <View style={{ height: 50 }}/>
      <ImageBackground source={require("../../../res/images/lottery_console.png")} style={styles.center}>
        <Lottery9 ref={lotteryRef} data={LotteryData}/>
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
    alignItems: "center"
  }
});
