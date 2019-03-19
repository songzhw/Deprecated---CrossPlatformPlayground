import React, { useEffect, useLayoutEffect, useReducer, useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import Button from "../../component/Button";

const ACTION_START = "ACTION_START";
const ACTION_STOP = "ACTION_STOP";
const ACTION_INCREASE = "ACTION_INCREASE";

const initState = { isRunning: false, lapse: 0 };
const reducerFunc = (state, action) => {
  switch (action.type) {
    case ACTION_START:
      return { ...state, isRunning: true };
    case ACTION_INCREASE:
      //若是先dispatch(STOP)了, 那自然这个state(上一次的state)就是isRunning为false, 这时就不会再进入这块了
      if (state.isRunning) {
        return { ...state, lapse: action.lapse };
      }
      return state;
    case ACTION_STOP:
      return { ...state, isRunning: false, lapse: 0 };
    default :
      return state;
  }
};

// lapse是显示秒表经过的时间. running就是是否在运行中.
// 解决办法之一: 使用useLayoutEffect() 来代替 useEffect()
// 解决办法之二: 使用useReducer()
const FixHooksAsyncTrapScreen = () => {
  // const [lapse, setLapse] = useState(0);
  // const [isRunning, setRunning] = useState(false);
  const [state, dispatch] = useReducer(reducerFunc, initState);

  useEffect(() => {
    if (state.isRunning) {
      const startTime = Date.now();
      const intervalId = setInterval(() => dispatch({ type: ACTION_INCREASE, lapse: Date.now() - startTime }), 1);
      return () => clearInterval(intervalId);
    }
  }, [state.isRunning]);

  function onStart() {
    dispatch({ type: ACTION_START });
  }

  function onStop() {
    dispatch({ type: ACTION_STOP });
  }

  return (
    <View style={styles.root}>
      <Text style={styles.lable}> {state.lapse} ms </Text>
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

export default FixHooksAsyncTrapScreen;
