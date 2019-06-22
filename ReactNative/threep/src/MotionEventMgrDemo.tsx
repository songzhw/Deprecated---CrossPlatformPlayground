import React, { useEffect, useState } from "react";
import { View, ViewProps, Text, StyleSheet, Animated } from "react-native";
import {DeviceMotionModule} from "react-native-motion-event-manager";

interface IProps extends ViewProps {
}

export const MotionEventMgrDemo = (props: IProps) => {
  const [roll, setRoll] = useState(new Animated.Value(0));

  useEffect(() => {
    let eventMapping = {
      attitude: { roll: roll }
    };
    DeviceMotionModule;
  }, []);

  return (
    <View>
      <Text>Motion</Text>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {}
});