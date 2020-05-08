import React from "react";
import {StyleSheet, View, ViewProps} from "react-native";

interface IProps extends ViewProps {
}

export const FlexLayoutDemo1 = (props: IProps) => {

  return (
    <View style={styles.container}>
      <View style={styles.redBox}/>
      <View style={styles.blueBox}/>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {backgroundColor: "grey", justifyContent: "flex-end", alignItems: "center", height: 250},
  redBox: {width: 50, height: 50, backgroundColor: "red"},
  blueBox: {width: 90, height: 90, backgroundColor: "blue"}
});
