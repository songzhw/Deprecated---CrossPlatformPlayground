import React, { useEffect, useRef } from "react";
import { View, StyleSheet, Text, Animated } from "react-native";
import BeatingHeart from "../../component/BeatingHeart";

const usePulse = (delay = 500) => {
  const scale = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    const timeout = setTimeout(() => pulse(), delay);
    return () => clearTimeout(timeout);
  }, []);

  const pulse = () => {
    // 顺序执行
    Animated.sequence([
      Animated.timing(scale, { toValue: 1.2 }),
      Animated.timing(scale, { toValue: 0.8 })
    ])
      .start(() => pulse());
    // 无限执行
  };

  return scale;
};

const Pulse_Func_Screen = () => {
  const scale = usePulse();
  const scale2 = usePulse(742);

  return (
    <View style={styles.root}>
      <BeatingHeart scale={scale}/>
      <BeatingHeart scale={scale2}/>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-around"
  }
});

export default Pulse_Func_Screen;
