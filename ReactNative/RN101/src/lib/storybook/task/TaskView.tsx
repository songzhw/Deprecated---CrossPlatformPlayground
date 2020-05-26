import React from "react";
import { View, ViewProps, Text, StyleSheet, Image } from "react-native";

interface IProps extends ViewProps {
}

const fullStar = require("../../../../res/img/ic_star_full.png");
const emptyStar = require("../../../../res/img/ic_star_outline.png");

export const TaskView = (props: IProps) => {

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hello World</Text>
      <Image source={fullStar} style={styles.star}/>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    height: 40,
    flexDirection: "row"
  },
  title: {
    fontSize: 22,
    textAlign: "center"
  },
  star: {
    width: 30,
    height: 30
  }
});
