import React, { useEffect, useLayoutEffect, useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import Button from "../../component/Button";

// lapse是显示秒表经过的时间. running就是是否在运行中.
// 解决办法之一: 使用useLayoutEffect() 来代替 useEffect()
const HooksAsyncTrapScreen = () => {
  const [lapse, setLapse] = useState(0);
  const [isRunning, setRunning] = useState(false);

  useEffect(() => {
    if (isRunning) {
      const startTime = Date.now();
      const intervalId = setInterval(() => setLapse(Date.now() - startTime), 1);
      return () => clearInterval(intervalId);
    }
  }, [isRunning]);

  function onStart() {
    setRunning(true);
  }

  function onStop() {
    setRunning(false);
    setLapse(0);
  }

  return (
    <View style={styles.root}>
      <Text style={styles.lable}> {lapse} ms </Text>
      <Button text="Start" style={styles.btn} onPress={() => onStart()}/>
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
