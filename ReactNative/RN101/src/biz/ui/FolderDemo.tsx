import React, { useEffect, useRef, useState } from "react";
import { View, ViewProps, Text, StyleSheet, Image, useWindowDimensions, Button, Animated, Platform, Dimensions, PixelRatio, TouchableOpacity } from "react-native";
import { rotateX } from "../../utils/TransformUtils";

interface IProps extends ViewProps {
}

// const { width, height } = useWindowDimensions(); //=> 对1080x2160的android手机, 它的值是392.73与737.45
const IS_ANDROID = Platform.OS === "android";
const PERSPECTIVE = IS_ANDROID ? 25000 : 1500;
const width = 330, height = 570, backHeight = 190;

export const FolderDemo = () => {
    const { height: h, width: w } = Dimensions.get("window"); //=> w=392.73, h=737.45 (前面":h"是重命名)
    const density = PixelRatio.get();  //设备密度, d=2.75
    console.log(`szw w=${w}, h=${h}, d = ${density}`); //=> //=> 对1080x2160的android手机, w=392.73, h=737.45,d=2.75

    const [isAnimStart, setAnimStart] = useState(false);
    const [animValue, setAnimVlaue] = useState(new Animated.Value(0));

    const avImage = useRef();
    const backView = useRef();

    let baseline = height / 6; //backHeight是height的1/3, 这里对半折, 所以要1/6
    animValue.addListener(({ value }) => {
      let matrix = rotateX(-1 * value, baseline, PERSPECTIVE); //第二参为0, 就是以中间来旋转 (旋转后不会移位!)
      const transformProps = { style: { transform: [{ matrix }] } };
      // @ts-ignore
      avImage.current?.setNativeProps(transformProps);
      // @ts-ignore
      backView.current?.setNativeProps(transformProps);
    });

    const startAnim = () => {
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
      av: { width, height: backHeight, position: "absolute", backfaceVisibility: "hidden", overflow: "hidden" },
      gray: { width, height: backHeight, position: "absolute", overflow: "hidden" },
      tmp: { width, height: backHeight, position: "absolute", backgroundColor:"red" },
      grayView: { width, height: backHeight, backgroundColor: "#ddd" }

    };


    return (
      <View style={styles.root}>

        <Image source={require("../../../res/img/batman.jpg")} style={styles.img}/>

        {/*纸片的背面; 灰色bg */}
        <Animated.View style={animStyle.gray} ref={backView}>
          <View style={animStyle.grayView}/>
        </Animated.View>

        <Animated.View style={animStyle.av} ref={avImage}>
          <Image source={require("../../../res/img/batman.jpg")} style={styles.img}/>
        </Animated.View>

        <TouchableOpacity onPress={startAnim} style={styles.button}>
          <Text>Start Anim</Text>
        </TouchableOpacity>

        <View style={animStyle.tmp}/>
      </View>
    );
  }
;


const styles = StyleSheet.create({
  root: { flex: 1, justifyContent: "center", alignItems: "center" },
  img: { width, height: height, resizeMode: "cover" },
  button: { position: "absolute", left: 10, top: 10, width: 70, height: 20, backgroundColor: "#ba68c8" }
});
