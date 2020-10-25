

import React, { useRef, useState } from "react";
import { View, ViewProps, Text, StyleSheet, Button } from "react-native";
import { CircleProgress } from "../../ui/circle/CircleProgress";
// DESP 做一个圆环progress. 效果还行, 但动画没太自然, 还要修改
export const SvgAnim03_CircleProgresss = () => {
  const [start, setStart] = useState(false);
  const [reset, setReset] = useState(true);

  const startAnim = () => {
    setStart(true);
    setReset(false);
  };
  const resetAnim = () => {
    setStart(false);
    setReset(true);
  };

  return (
    <View style={styles.container}>
      <Button title={"start anim"} onPress={startAnim}/>
      <View style={{ width: 1, height: 20 }}/>
      <Button title={"reset anim"} onPress={resetAnim}/>
      <View style={{ width: 1, height: 20 }}/>
      <CircleProgress radius={50} start={start} reset={reset}/>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});
