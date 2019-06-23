import React from "react";
import { View, ViewProps, Text, StyleSheet, Animated, Button } from "react-native";

const ary: number[] = [];
for (let i = 0; i < 500; i++) {
  ary.push(i);
}

interface IProps extends ViewProps {
}

export const StaggerAnimationScreen = (props: IProps) => {
  const animValues: Animated.Value[] = [];
  ary.forEach(index => {
    animValues[index] = new Animated.Value(0);
  });

  function startAnim() {
    const anims = ary.map(num => {
      return Animated.timing(
        animValues[num],
        {
          toValue: 1,
          duration: 4000
        }
      );
    });

    Animated.stagger(10, anims).start();
  }


  const animViews = ary.map((num, index) => {
    return (
      <Animated.View
        key={index}
        style={[{ opacity: animValues[num] }, styles.item]}/>
    );
  });
  return (
    <View style={styles.container}>
      <Button title="start anim" onPress={startAnim}/>
      {animViews}
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap"
  },
  item: {
    height: 20,
    width: 20,
    backgroundColor: "red",
    marginLeft: 3,
    marginTop: 3
  }
});