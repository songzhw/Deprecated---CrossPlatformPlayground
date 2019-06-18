import React from "react";
import { StyleSheet, View, Text, ViewProps } from "react-native";
import { PLAYER_HEIGHT, PLAYER_WIDTH } from "../data/Const";

interface IProps extends ViewProps {
}

export const PlayerView = (props: IProps) => {
  const passedInStyles = props.style;
  return (
    <View style={[styles.container, passedInStyles]}>
      <View style={styles.emptyPlaceHolder}/>
      <View style={styles.bottomContainer}>
        <View style={styles.bottomRow}>
          <Text style={styles.bottomCell}>倚天剑</Text>
          <Text style={styles.bottomCell}>护心镜</Text>
        </View>
        <View style={styles.bottomRow}>
          <Text style={styles.bottomCell}>+1马</Text>
          <Text style={styles.bottomCell}>-1马</Text>
        </View>
        <View style={styles.bottomRow}>
          <Text style={styles.bottomCell}>静心香</Text>
          <Text style={styles.bottomCell}>木牛流马</Text>
        </View>
      </View>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    width: PLAYER_WIDTH,
    height: PLAYER_HEIGHT,
    borderWidth: 2,
    borderColor: "black"
  },
  emptyPlaceHolder: {
    flex: 1
  },
  bottomContainer: {
    flex: 1
  },
  bottomRow: {
    flex: 1,
    flexDirection: "row"
  },
  bottomCell: {
    flex: 1,
    textAlign: "center",
    textAlignVertical: "center",
    color: "black",
    fontSize: 15
  }

});