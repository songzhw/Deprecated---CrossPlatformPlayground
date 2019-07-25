import React, { useState } from "react";
import { View, Text, StyleSheet, Image, TouchableWithoutFeedback, TouchableHighlight } from "react-native";

const picture = require("../../../res/images/icon_red_heart.png");

export const SimpleHeroAnimDemo = () => {
  const [isDetail, setIsDetail] = useState(false);
  const imageDetail = isDetail ? picture : null;

  function openDetail() {
    console.log(`szw open`);
    setIsDetail(true);
  }

  return (
    <View style={styles.container}>

      <Image style={styles.iv1} source={picture}/>
      <Text onPress={openDetail}> List Screen </Text>

      <View style={StyleSheet.absoluteFill}>
        <Image style={styles.iv2} source={imageDetail}/>
      </View>

    </View>
  );
};


const styles = StyleSheet.create({
  container: { flex: 1 },
  iv1: {
    width: 134,
    height: 125,
    margin: 20,
  },
  iv2: {
    width: 320,
    height: 300,
    margin: 20
  }
});