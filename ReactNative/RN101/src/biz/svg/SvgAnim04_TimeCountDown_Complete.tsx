import React, { useState } from "react";
import { View, StyleSheet, Animated, Button, Easing } from "react-native";
import { CountDownView } from "../../ui/circle/CountDownView";

export const SvgAnim04_TimeCountDown_Complete = () => {
  const duration = 3;  // 持续时间（单位：s）
  const [progress, setProgress] = useState(new Animated.Value(0));  // 倒计时动画进度

  const startAnim = () => {
    Animated.timing(progress, {
      toValue: 1,
      duration: duration * 1000,
      useNativeDriver: true,
      easing: Easing.linear
    }).start();
  };

  const resetAnim = () => {
    progress.stopAnimation();  // 停止当前动画
    progress.setValue(0);  // 重置动画值
  };

  return (
    <View style={styles.container}>
      <Button title={"start anim"} onPress={startAnim}/>
      <View style={{ width: 1, height: 20 }}/>
      <Button title={"reset anim"} onPress={resetAnim}/>
      <View style={{ width: 1, height: 20 }}/>

      <CountDownView
        progress={progress} duration={duration}
        svgSize={160} strokeWidth={5} gap={8}/>

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
