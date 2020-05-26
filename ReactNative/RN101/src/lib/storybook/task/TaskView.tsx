import React, { useState } from "react";
import { View, ViewProps, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

export interface Task {
  id: number;
  name: string;
  isPinned: boolean
}

interface IProps extends ViewProps {
  task: Task
}

const fullStar = require("../../../../res/img/ic_star_full.png");
const emptyStar = require("../../../../res/img/ic_star_outline.png");

export const TaskView = (props: IProps) => {
  const { id, name, isPinned } = props.task;
  const [isChecked, setCheck] = useState(isPinned);
  const image = isChecked ? fullStar : emptyStar;

  return (
    <TouchableOpacity onPress={() => setCheck(!isChecked)}>
      <View style={styles.container}>
        <Text style={styles.title}>{name}</Text>
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
