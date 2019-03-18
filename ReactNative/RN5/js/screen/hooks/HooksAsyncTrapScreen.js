import React from "react";
import { View, StyleSheet, Text } from "react-native";
import Button from "../../component/Button";

const HooksAsyncTrapScreen = () => {
  function onStart() {
    console.log(`szw start`);
  };

  function onStop() {
    console.log(`szw stop`);
  };

  return (
    <View style={styles.root}>
      <Text style={styles.lable}>HooksAsyncTrapScreen Screen</Text>
      <Button text="Start" style={styles.btn} onPress={()=> onStart()}/>
      <Button text="Stop" style={styles.btn} onPress={onStop}/>
    </View>
  );
};

// alignItem: 次轴
const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: "center"
  },
  lable: {
    fontSize: 22
  },
  btn: {
    width: 100,
    height: 40,
    backgroundColor: "white",
    borderRadius: 10,
    borderColor: "blue",
    borderWidth: 3,
    marginTop: 16
  }
});

export default HooksAsyncTrapScreen;
