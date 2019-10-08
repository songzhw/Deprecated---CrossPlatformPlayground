import React from "react";
import { View, ViewProps, Text, StyleSheet } from "react-native";

/*
React Native does not support css media query

If you insist, you can instal `react-native-css-media-query-processor`
https://github.com/kristerkari/react-native-css-media-query-processor

 */
interface IProps extends ViewProps {
}

export const MediaCssDemo = (props: IProps) => {

  return (
    <View style={styles.container}>

    </View>
  );
};


const styles = StyleSheet.create({
// @ts-ignore
  container: props => ({
    flex: 1,
    backgroundColor: 'green',
    "@media (orientation: landscape)": {
      backgroundColor: "red"
    },
    "@media (orientation: portrait)": {
      backgroundColor: "blue"
    }
  })
});
