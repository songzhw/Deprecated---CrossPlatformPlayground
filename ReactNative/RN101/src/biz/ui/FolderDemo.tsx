import React, { useState } from "react";
import { View, ViewProps, Text, StyleSheet, Image, useWindowDimensions, Button, Animated } from "react-native";

interface IProps extends ViewProps {
}

export const FolderDemo = () => {
    const { width, height } = useWindowDimensions(); //=> 对一些1080x2160的android手机, 它的值是392.73与737.45

    const [isAnimStart, setAnimStart] = useState(false);

    const startAnim = () => {
      setAnimStart(true);
    };

    const animStyle = {
      av: { width: 330, height: 570, marginTop: 50 }
    };

    return (
      <View style={styles.root}>
        <Button title={"start anim"} onPress={startAnim}/>
        <Animated.View style={animStyle.av}>
          <Image source={require("../../../res/img/batman.jpg")} style={styles.img}/>
        </Animated.View>
      </View>
    );
  }
;


const styles = StyleSheet.create({
  root: { flex: 1, justifyContent: "center", alignItems: "center" },
  img: { width: 330, height: 570 }
});
