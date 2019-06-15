import React from "react";
import { StyleSheet, View } from "react-native";
import { DECK_HEIGHT } from "../data/Const";
import { PlayerView } from "./PlayerView";

interface IProps {
}

export const MyDeck = (props: IProps) => {

  return (
    <View style={styles.parent}>
      <PlayerView/>
    </View>
  );
};

const styles = StyleSheet.create({
  parent: {
    height: DECK_HEIGHT,
    backgroundColor: "gray"
  }
});