import React from "react";
import { StyleSheet, View } from "react-native";

interface IProps {
}

export const PlayerView = (props: IProps) => {

  return (
    <View style={styles.container}>
      <View style={{flex:1}}/>
      <View style={styles.bottomContainer}>

      </View>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    width: 94,
    height: 120,
    backgroundColor: "#F5FCFF",
    borderWidth: 2,
    borderColor: "black"
  },
  bottomContainer: {
    // flex:1, //用了flex就会全占满. 要想width撑起父view, 不写width就行了
    // height: 60,
    flex:1,
    backgroundColor: 'red'
  }

});