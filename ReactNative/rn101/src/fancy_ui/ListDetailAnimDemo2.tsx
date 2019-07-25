import React, { useEffect, useState } from "react";
import {
  Image,
  View,
  Text,
  StyleSheet,
  Dimensions,
  ScrollView,
  TouchableWithoutFeedback, Animated, Easing
} from "react-native";

const SCREEN_WIDTH = Dimensions.get("window").width;
const SCREEN_HEIGHT = Dimensions.get("window").height;

const images = [
  require("../../res/images/wallpaper01.jpg"),
  require("../../res/images/wallpaper02.jpg"),
  require("../../res/images/wallpaper03.jpg"),
  require("../../res/images/wallpaper04.jpg")
];

export const ListDetailAnimDemo2 = () => {
  const [detail, setDetail] = useState(-1);

  const imageViewRef: (Image | null)[] = [];
  let imageContainerRef: View | null;
  const animPosition = new Animated.ValueXY();
  const animSize = new Animated.ValueXY();

  const imageViews = images.map((image, index) => {
    return (
      <TouchableWithoutFeedback
        onPress={() => openDetail(index)} key={index + ""}>
        <View style={{ width: SCREEN_WIDTH, height: SCREEN_HEIGHT - 150, paddingBottom: 15 }}>
          <Image source={image} style={{ flex: 1, resizeMode: "cover" }} ref={iv => imageViewRef[index] = iv}/>
        </View>
      </TouchableWithoutFeedback>
    );
  });

  useEffect(() => {
    imageContainerRef!.measure((x, y, width, height, pageX, pageY) => {
      Animated.parallel([
        Animated.timing(animPosition.x, { toValue: pageX, duration: 500, easing: Easing.back(1) }),
        Animated.timing(animPosition.y, { toValue: pageY, duration: 500, easing: Easing.back(1) }),
        Animated.timing(animSize.x, { toValue: width, duration: 500, easing: Easing.back(1) }),
        Animated.timing(animSize.y, { toValue: height, duration: 500, easing: Easing.back(1) })
      ]).start();
    });
  }, [detail]);

  const openDetail = (index: number) => {
    console.log(`szw openDetail, ${index}`);

    // * @param pageX, pageY : 图片在屏幕中的位置
    // * @parm width, height: 图片的宽高
    // * @param x, y: 总是为(0, 0), 这里暂不用
    imageViewRef[index]!.measure((x, y, width, height, pageX, pageY) => {
      animPosition.setValue({ x: pageX, y: pageY });
      animSize.setValue({ x: width, y: height });
      setDetail(index);
    });
  };

  const closeDetail = () => {
    setDetail(-1);
  };

  const opacityStyle = {
    opacity: detail !== -1 ? 1 : 0
  };

  const imageAnimStyle = {
    left: animPosition.x,
    right: animPosition.y,
    width: animSize.x,
    height: animSize.y
  };

  return (
    <View style={styles.container}>

      {/*List*/}
      <ScrollView style={styles.listContainer}>
        {imageViews}
      </ScrollView>

      {/*Detail*/}
      <View style={StyleSheet.absoluteFill} pointerEvents={detail !== -1 ? "auto" : "none"}>

        <View style={[{ flex: 2 }, opacityStyle]} ref={view => imageContainerRef = view}>
          <Animated.Image source={images[detail]} style={[{ flex: 1 }, imageAnimStyle]} resizeMode={"cover"}/>
        </View>

        <View style={[{ backgroundColor: "green", flex: 1 }, opacityStyle]}
              pointerEvents={detail !== -1 ? "auto" : "none"}>
          <Text style={{ fontSize: 44, color: "#f00" }} onPress={closeDetail}>This is the Detail popup : index
            = {detail}</Text>
        </View>

      </View>


    </View>
  );
};


const styles = StyleSheet.create({
  container: { flex: 1 },
  listContainer: {
    flex: 1, padding: 20
  }
});