import React, { useEffect, useState } from "react";
import { View, Text, Button } from "react-native";

export const TimerIssue = () => {
  const [time, setTime] = useState(-1);
  let timerHandler: number | null = null;

  function start() {
    timerHandler = setInterval(() => {
      console.log(`szw interval : ${time}`);
      const result = time + 1;
      setTime(result);
    }, 1000);
  }

  useEffect(() => {
    console.log(`szw useEffect start`);
    return () => {
      console.log(`szw useEffect cancel`);
      if (timerHandler) {
        clearInterval(timerHandler);
      }
    };
  }, []);


  return (
    <View>
      <Text> {time} </Text>
      <Button title="start" onPress={start}/>
    </View>
  );
};
