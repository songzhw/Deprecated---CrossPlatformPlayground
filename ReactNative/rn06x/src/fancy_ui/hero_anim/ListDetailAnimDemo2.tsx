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

//TODO has a "malformed call from JS" error

const SCREEN_WIDTH = Dimensions.get("window").width;
const SCREEN_HEIGHT = Dimensions.get("window").height;

const images = [
  require("../../../res/images/wallpaper01.jpg"),
  require("../../../res/images/wallpaper02.jpg"),
  require("../../../res/images/wallpaper03.jpg"),
  require("../../../res/images/wallpaper04.jpg")
];
const ANIM_DURATION = 1000;

export const ListDetailAnimDemo2 = () => {
  const [detail, setDetail] = useState(-1);
  const [animPosition, setAnimPosition] = useState(new Animated.ValueXY())
  const [animSize, setAnimSize] = useState(new Animated.ValueXY())

  const imageViewRef: (Image | null)[] = [];
  let imageContainerRef: View | null;

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
    if (detail === -1) {
      return;
    }
    console.log(`szw useEffect: ${animSize}`);
    imageContainerRef!.measure((x, y, width, height, pageX, pageY) => {
      Animated.parallel([
        Animated.timing(animPosition.x, { toValue: pageX, duration: ANIM_DURATION }),
        Animated.timing(animPosition.y, { toValue: pageY, duration: ANIM_DURATION }),
        Animated.timing(animSize.x, { toValue: width, duration: ANIM_DURATION }),
        Animated.timing(animSize.y, { toValue: height, duration: ANIM_DURATION })
      ]).start();
    });
  }, [detail]);

  const openDetail = (index: number) => {
    // * @param pageX, pageY : 图片在屏幕中的位置
    // * @parm width, height: 图片的宽高
    // * @param x, y: 总是为(0, 0), 这里暂不用

    imageViewRef[index]!.measure((x, y, width, height, pageX, pageY) => {
      animPosition.setValue({ x: pageX, y: pageY });
      animSize.setValue({ x: width, y: height });
      setDetail(index);
      console.log(`szw 0penDetail: ${animSize}`)
    });
  };

  const closeDetail = () => {
    setDetail(-1);
  };


  const imageAnimStyle = {
    // left: animPosition.x,
    // right: animPosition.y,
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

        <View style={[{ flex: 3 , opacity: 1}]} ref={view => imageContainerRef = view}>
          <Animated.Image source={detail !== -1 ? images[detail] : null}
                          style={[{ flex: 1 }, imageAnimStyle]}
                          resizeMode={"cover"}/>
        </View>

        <View style={{  flex: 1 }}
              pointerEvents={detail !== -1 ? "auto" : "none"}>
          {detail !== -1 ?
            ( <Text style={{ fontSize: 44, color: "#f00" }} onPress={closeDetail}>This is the Detail popup : index = {detail}</Text>) : null
          }
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