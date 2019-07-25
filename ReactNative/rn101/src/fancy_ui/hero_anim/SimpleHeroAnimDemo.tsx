import React, { useState } from "react";
import { View, Text, StyleSheet, Image, TouchableWithoutFeedback, TouchableHighlight } from "react-native";

const picture = require("../../../res/images/icon_red_heart.png");

export const SimpleHeroAnimDemo = () => {
  const [isDetail, setIsDetail] = useState(false);
  const imageDetail = isDetail ? picture : null;
  const modalClickable = isDetail ? "auto" : "none";
  const detailText = isDetail ? "DetailText" : null;

  function openDetail() {
    setIsDetail(true);
  }

  function closeDetail() {
    setIsDetail(false);
  }

  return (
    <View style={styles.container}>

      <Image style={styles.iv1} source={picture}/>
      <Text onPress={openDetail}> List Screen </Text>

      <View style={StyleSheet.absoluteFill} pointerEvents={modalClickable}>
        <Image style={styles.iv2} source={imageDetail}/>
        <Text onPress={closeDetail}> {detailText} </Text>
      </View>

    </View>
  );
};


const styles = StyleSheet.create({
  container: { flex: 1 },
  iv1: {
    width: 134,
    height: 125,
    margin: 20
  },
  iv2: {
    width: 320,
    height: 300,
    margin: 20
  }
});