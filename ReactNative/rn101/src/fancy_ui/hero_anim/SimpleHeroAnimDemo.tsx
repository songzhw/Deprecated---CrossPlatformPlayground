import React, { useState } from "react";
import { View, ViewProps, Text, StyleSheet, Image, TouchableWithoutFeedback } from "react-native";

const picture = require("../../../res/images/icon_red_heart.png");

interface IProps extends ViewProps {
}

export const SimpleHeroAnimDemo = (props: IProps) => {
  const [isDetail, setIsDetail] = useState(false);
  const imageDetail = isDetail ? picture : null;

  function openDetail() {
    setIsDetail(true);
  }

  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={openDetail}>
        <Image style={styles.iv1} source={picture}/>
      </TouchableWithoutFeedback>

      <View style={StyleSheet.absoluteFill}>
        <Image style={styles.iv2} source={imageDetail}/>
      </View>

    </View>
  );
};


const styles = StyleSheet.create({
  container: {},
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