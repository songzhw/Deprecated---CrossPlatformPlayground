import React, { useEffect, useState } from "react";
import { View, ViewProps, Text, StyleSheet, Animated } from "react-native";
import { DeviceMotionModule } from "react-native-motion-event-manager";

interface IProps extends ViewProps {
}

export const MotionEventMgrDemo = (props: IProps) => {
  const [roll, setRoll] = useState(new Animated.Value(0));

  useEffect(() => {
    let eventMapping = {
      attitude: { roll: roll }
    };
    DeviceMotionModule.startDeviceMotionUpdates(eventMapping);

    return () => {
      DeviceMotionModule.stopDeviceMotionUpdates();
    };
  }, []);

  return (
    <View>
      <Text>Motion Event by 人人贷</Text>
      <Animated.Text
        style={{
          opacity: roll.interpolate({
            inputRange: [-1.5, 1.5],
            outputRange: [0, 1]
          }),
          fontSize: 40
        }}>
        Opacity will change while rolling
      </Animated.Text>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {}
});