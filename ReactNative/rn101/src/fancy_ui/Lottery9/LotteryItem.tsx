import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";

interface IProps {
  source: string;
  index: number;
}

export class LotteryItem extends React.Component<IProps> {
  state = {};

  render() {
    const { index, source } = this.props;
    return (
      <Image source={{ uri: source }} style={styles.unselected} key={`item${index}`}/>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center"
  },
  unselected: {
    width: 96,
    height: 80,
    marginLeft: 3,
    backgroundColor: "rgba(0,0,0,0.5)"
  },
  selected: {
    width: 96,
    height: 80,
    marginLeft: 3

  }
});

