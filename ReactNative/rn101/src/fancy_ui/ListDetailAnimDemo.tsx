import React from "react";
import { Image, View, ViewProps, Text, StyleSheet, Dimensions, ScrollView } from "react-native";

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
      <View key={index+""} style={{ width: SCREEN_WIDTH, height: SCREEN_HEIGHT - 150 , paddingBottom: 15}}>
        <Image source={image} style={{ flex: 1, resizeMode:'cover' }} />
      </View>
    );
  });

  return (
    <View style={styles.container}>
      <ScrollView style={{ flex: 1, padding: 20 }}>
        {imageViews}
      </ScrollView>
    </View>
  );
};


const styles = StyleSheet.create({
  container: { flex: 1 }
});