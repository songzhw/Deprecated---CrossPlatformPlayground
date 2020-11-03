import React from "react";
import { View, ViewProps, Text, StyleSheet, Image } from "react-native";

interface IProps extends ViewProps {
}

export const FolderDemo = (props: IProps) => {

  return (
    <View style={styles.root}>
      <Image source={require("../../../res/img/batman.jpg")} width={160} height={250}/>
    </View>
  );
};


const styles = StyleSheet.create({
  root: { flex: 1, justifyContent: "center", alignItems: "center" }
});
