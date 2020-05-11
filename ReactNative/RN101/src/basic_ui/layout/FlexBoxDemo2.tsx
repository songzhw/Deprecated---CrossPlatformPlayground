import React from "react";
import {View, ViewProps, Text, StyleSheet, SafeAreaView, Button} from "react-native";

interface IProps extends ViewProps {
}

export const FlexBoxDemo2 = (props: IProps) => {

  return (
    <View style={styles.container}>
      <View style={[styles.square, {backgroundColor: "red"}]}/>
      <View style={[styles.square, {backgroundColor: "blue"}]}/>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {backgroundColor: 'gray', height: 200, flexDirection: 'row'},
  square: {width: 80},
  row: {flexDirection: "row", height: 200}
});
