import React from "react";
import {
  Image,
  View,
  ViewProps,
  Text,
  StyleSheet,
  Dimensions,
  ScrollView,
  TouchableWithoutFeedback
} from "react-native";

const SCREEN_WIDTH = Dimensions.get("window").width;
const SCREEN_HEIGHT = Dimensions.get("window").height;

const images = [
  require("../../res/images/wallpaper01.jpg"),
  require("../../res/images/wallpaper02.jpg"),
  require("../../res/images/wallpaper03.jpg"),
  require("../../res/images/wallpaper04.jpg")
];

interface IProps extends ViewProps {
}

export const ListDetailAnimDemo = (props: IProps) => {
  const imageViews = images.map((image, index) => {
    return (
      <TouchableWithoutFeedback
        onPress={() => openDetail(index)} key={index + ""}>
        <View style={{ width: SCREEN_WIDTH, height: SCREEN_HEIGHT - 150, paddingBottom: 15 }}>
          <Image source={image} style={{ flex: 1, resizeMode: "cover" }}/>
        </View>
      </TouchableWithoutFeedback>
    );
  });

  const openDetail = (index: number) => {
    console.log(`szw openDetail, ${index}`);
  };

  return (
    <View style={styles.container}>

      {/*List*/}
      <ScrollView style={{ flex: 1, padding: 20 }}>
        {imageViews}
      </ScrollView>

      {/*Detail*/}
      <View style={StyleSheet.absoluteFill} pointerEvents="none">
        <View style={{ opacity: 0, backgroundColor: "green" }} pointerEvents="none">
          <Text style={{ fontSize: 44, color: "#f00" }}>This is the Detail popup</Text>
        </View>
      </View>


    </View>
  );
};


const styles = StyleSheet.create({
  container: { flex: 1 }
});