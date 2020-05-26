import React, { useState } from "react";
import { View, ViewProps, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

interface IProps extends ViewProps {
  isChecked: boolean
}

const fullStar = require("../../../../res/img/ic_star_full.png");
const emptyStar = require("../../../../res/img/ic_star_outline.png");

export const TaskView = (props: IProps) => {
  const [isChecked, setCheck] = useState(props.isChecked);
  const image = isChecked ? fullStar : emptyStar;

  return (
    <TouchableOpacity onPress={() => setCheck(!isChecked)}>
      <View style={styles.container}>
        <Text style={styles.title}>Hello World</Text>
        <Image source={image} style={styles.star}/>
      </View>
    </TouchableOpacity>
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
