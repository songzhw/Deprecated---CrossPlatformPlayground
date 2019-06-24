import React, { useEffect, useState } from "react";
import { View, ViewProps, Text, StyleSheet, Animated } from "react-native";

interface IProps extends ViewProps  {}

export const MotionSplit1 = (props: IProps) => {

  const [rotate, setRotate] = useState(new Animated.Value(0))

  useEffect(()=>{
    Animated.timing(rotate, {toValue: 1})
  }, [])

  return (
    <View>
      <Text>Motion Split 001</Text>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {}
});
