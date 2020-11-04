import React, { useCallback, useEffect, useRef, useState } from "react";
import { View, ViewProps, Text, StyleSheet, Image, useWindowDimensions, Button, Animated, Platform, Dimensions, PixelRatio, TouchableOpacity } from "react-native";
import { rotateX } from "../../utils/TransformUtils";

interface IProps extends ViewProps {
}


const IS_ANDROID = Platform.OS === "android";
const PERSPECTIVE = IS_ANDROID ? 25000 : 1500;
const width = 330, height = 570, backHeight = 190;

export const FolderDemo = () => {
    const { width: screenWidth, height: screenHeight } = useWindowDimensions(); //=> 对1080x2160的android手机, 它的值是392.73与737.45
    const left = (screenWidth - width) / 2;
    const top = (screenHeight - height) / 2;

    const [isAnimStart, setAnimStart] = useState(false);
    const [animValue, setAnimValue] = useState(new Animated.Value(0));

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
      grayView: { width, height: backHeight, backgroundColor: "#ddd" },
      container: { position: "absolute", left, right: 0, top, height: backHeight },
      mask: { position: "absolute", left:0, right:0, top:-12, height: (backHeight+12), backgroundColor:"#fff" }
    };


    return (
      <View style={styles.root}>

        <Image source={require("../../../res/img/batman.jpg")} style={styles.img}/>

        <View style={animStyle.container}>

          <View style={animStyle.mask}/>

          {/*纸片的背面; 灰色bg */}
          <Animated.View style={animStyle.gray} ref={backView}>
            <View style={animStyle.grayView}/>
          </Animated.View>

          <Animated.View style={animStyle.av} ref={avImage}>
            <Image source={require("../../../res/img/batman.jpg")} style={styles.img}/>
          </Animated.View>
        </View>

        <TouchableOpacity onPress={startAnim} style={styles.button}>
          <Text>Start Anim</Text>
        </TouchableOpacity>

      </View>
    );
  }
;


const styles = StyleSheet.create({
  root: { flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#fff" },
  img: { width, height },
  button: { position: "absolute", left: 10, top: 10, width: 70, height: 20, backgroundColor: "#ba68c8" }
});
