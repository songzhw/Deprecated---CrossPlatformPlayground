import React, { useEffect, useRef, useState } from "react";
import { View, ViewProps, Text, StyleSheet, Image, useWindowDimensions, Button, Animated, Platform } from "react-native";
import { rotateX } from "../../utils/TransformUtils";

interface IProps extends ViewProps {
}

// const { width, height } = useWindowDimensions(); //=> 对一些1080x2160的android手机, 它的值是392.73与737.45
const IS_ANDROID = Platform.OS === "android";
const PERSPECTIVE = IS_ANDROID ? 25000 : 1500;
const width = 330, height = 570, avHeight = 190;

export const FolderDemo = () => {

    const [isAnimStart, setAnimStart] = useState(false);
    const [animValue, setAnimVlaue] = useState(new Animated.Value(0));

    const avImage = useRef();

    let baseline = avHeight / 6;
    animValue.addListener(({ value }) => {
      let matrix = rotateX(-1 * value, baseline, PERSPECTIVE);
      const transformProps = { style: { transform: [{ matrix }] } };
      // @ts-ignore
      avImage.current?.setNativeProps(transformProps);
    });

    const startAnim = () => {
      console.log(`szw click now = ${isAnimStart}`);
      if (!isAnimStart) {
        Animated.timing(animValue, {
          toValue: -180,
          duration: 800,
          useNativeDriver: true
        }).start();
      } else {
        Animated.timing(animValue, {
          toValue: 0,
          duration: 800,
          useNativeDriver: true
        }).start();
      }

      setAnimStart(!isAnimStart);
    };

    const animStyle = {
      av: { width: 330, height: 570, marginTop: 50, backfaceVisibility: "hidden", position: "absolute" }
    };


    return (
      <View style={styles.root}>


        <Animated.View style={animStyle.av} ref={avImage}>
          <Image source={require("../../../res/img/batman.jpg")} style={styles.img}/>
        </Animated.View>

        <Button title={"start anim"} onPress={startAnim}/>
      </View>
    );
  }
;


const styles = StyleSheet.create({
  root: { flex: 1, justifyContent: "center", alignItems: "center" },
  img: { width, height: height, resizeMode: "cover" }
});
