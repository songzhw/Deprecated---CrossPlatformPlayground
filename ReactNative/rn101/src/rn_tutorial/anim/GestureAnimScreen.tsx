import React, { useState } from "react";
import { View, ViewProps, StyleSheet, Animated, ScrollView, Dimensions, Image } from "react-native";

const { width, height, scale } = Dimensions.get("window");

interface IProps extends ViewProps {
}

export const GestureAnimScreen = (props: IProps) => {
  const [xoffset, setXoffset] = useState(new Animated.Value(0));

  return (
    <View style={styles.container}>
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        style={{ flex: 1 }}
        scrollEventThrottle={100}
        onScroll={Animated.event([{
          nativeEvent: {
            contentOffset: { x: xoffset }
          }
        }
        ])}>
        <Animated.Image
          source={require("../../../res/images/wallpaper01.jpg")}
          style={{
            width, height,
            opacity: xoffset.interpolate({
              inputRange: [0, 375],
              outputRange: [1.0, 0.0]
            })
          }}
          resizeMode={"cover"}
        />
        <Image source={require("../../../res/images/wallpaper02.jpg")} style={{ width, height }} resizeMode="cover"/>
      </ScrollView>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20
  }
});