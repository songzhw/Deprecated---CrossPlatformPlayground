import React, { Component, useState } from "react";
import { Animated, Button, View, Text } from "react-native";

interface IProps {
  width: number;
  height: number
}

export const AnimatedComponentDemo = () => {
  const AnimatedChild = Animated.createAnimatedComponent(Child);
  const [width, setWidth] = useState(new Animated.Value(0));
  const [height, setHeight] = useState(new Animated.Value(0));

  function startAnim() {
    const anim1 = Animated.timing(width, { toValue: 200, duration: 2500 });
    const anim2 = Animated.timing(height, { toValue: 300, duration: 4000 });
    Animated.parallel(([anim1, anim2])).start();
  }

  return (
    <View>
      <Button title="start" onPress={startAnim}/>
      <AnimatedChild width={width} height={height}/>
    </View>
  );
};


class Child extends Component<IProps> {
  render() {
    const { width, height } = this.props; //值全为number
    return (
      <View style={{ width, height, backgroundColor: "powderblue" }}/>
    );
  }
}

