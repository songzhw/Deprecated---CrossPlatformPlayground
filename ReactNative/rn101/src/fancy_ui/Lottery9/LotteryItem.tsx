import React from "react";
import { View, StyleSheet, Text, Image, ImageBackground } from "react-native";

interface IProps {
  source: string;
  index: number;
  isSelected: boolean;
}

export class LotteryItem extends React.Component<IProps> {
  state = {};

  render() {
    const { index, source, isSelected } = this.props;

    let child = null;

    if (isSelected) {
      child = <Image source={{ uri: source }} style={styles.selected} key={`item${index}`}/>;
    } else {
      child = (
        <ImageBackground source={{ uri: source }} style={styles.unselected}>
          <View style={[styles.unselected, styles.size]}/>
        </ImageBackground>
      );
    }


    return child;
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center"
  },
  unselected: {
    backgroundColor: "rgba(0,0,0,0.5)"
  },
  selected: {
    width: 96,
    height: 80,
    marginLeft: 3
  },
  size: {
    width: 96,
    height: 80
  }
});

