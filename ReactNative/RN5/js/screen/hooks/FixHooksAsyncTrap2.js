import React, { useEffect, useLayoutEffect, useReducer, useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import Button from "../../component/Button";

// @Failed to fix it

// lapse是显示秒表经过的时间. running就是是否在运行中.
// 解决办法之一: 使用useLayoutEffect() 来代替 useEffect()
// 解决办法之二: 使用useReducer()
// 注意, useEffect()也是异步的, setState(大obj)也是异步的, 这就为什么本文件并没有解决问题
const FixHooksAsyncTrap2 = () => {
  // const [lapse, setLapse] = useState(0);
  // const [isRunning, setRunning] = useState(false);
  const [data, setData] = useState({ isRunning: false, lapse: 0 });

  useEffect(() => {
    console.log(`szw useEffect: ${data.isRunning}`);
    if (data.isRunning) {
      const startTime = Date.now();
      const intervalId = setInterval(() => {
        console.log(`szw interval`);
        setData({ ...data, lapse: Date.now() - startTime });
      }, 1);
      return () => clearInterval(intervalId);
    }
  }, [data.isRunning]);

  function onStart() {
    setData({ ...data, isRunning: true });
  }

  function onStop() {
    setData({ ...data, isRunning: false, lapse: 0 });
    console.log(`szw stop`);
  }

  return (
    <View style={styles.root}>
      <Text style={styles.lable}> {data.lapse} ms </Text>
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

export default FixHooksAsyncTrap2;
