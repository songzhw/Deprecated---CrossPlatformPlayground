import React, { useEffect, useState } from "react";
import { View, ViewProps, Text, StyleSheet, Animated, PanResponder, PanResponderInstance } from "react-native";

interface IProps extends ViewProps {
}

export const DraggableCircleDemo = (props: IProps) => {
  const [pan, setPan] = useState(new Animated.ValueXY({ x: 0, y: 0 }));
  let panResponder: PanResponderInstance;

  useEffect(() => {

    panResponder = PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: () => {
        Animated.event([null, { dx: pan.x, dy: pan.y }]);
      }
    });
  }, []);

  const panStyle = {
    transform: pan.getTranslateTransform()
  };
  // @ts-ignore
  const animProps = panResponder ? panResponder.panHandlers : null;
  return (
    <Animated.View
      style={[styles.circle, panStyle]}
      {...animProps}
    />
  );
};


const styles = StyleSheet.create({
  circle: {
    backgroundColor: "green",
    width: 100,
    height: 100,
    borderRadius: 50
  }
});
