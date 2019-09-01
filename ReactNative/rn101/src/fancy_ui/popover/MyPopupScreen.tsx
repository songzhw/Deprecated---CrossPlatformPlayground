import React from "react";
import { View, ViewProps, Text, StyleSheet } from "react-native";
import { MyPopupView } from "./MyPopupView";

interface IProps extends ViewProps {
}

export const MyPopupScreen = (props: IProps) => {

  return (
    <View style={styles.container}>
      <Text> Hello Popup View</Text>
      <MyPopupView style={{ flex: 1 }} isVisible={true} onClose={() => console.log("szw close")}/>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {}
});