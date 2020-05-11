import React from "react";
import {View, ViewProps, Text, StyleSheet, SafeAreaView, Button} from "react-native";

interface IProps extends ViewProps {
}

export const FlexBoxDemo4 = (props: IProps) => {

  return (
      <View style={styles.container}>
        <View style={styles.row1}>
          <Text style={styles.text}>First Line</Text>
        </View>

        <View style={styles.row2}>
          <Text style={styles.text}>Second Line</Text>
        </View>
      </View>
  )
}


const styles = StyleSheet.create({
  container: {backgroundColor: 'gray', flex: 1},
  row1: {flexDirection: "row", flex: 1, backgroundColor: 'yellow'},
  row2: {flexDirection: "row", flex: 1, backgroundColor: 'pink'},
  text: {fontSize: 23, height: 38}
});
