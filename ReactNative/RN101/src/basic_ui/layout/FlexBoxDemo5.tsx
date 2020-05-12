import React from "react";
import {View, ViewProps, Text, StyleSheet, SafeAreaView, Button} from "react-native";

interface IProps extends ViewProps {
}

export const FlexBoxDemo5 = (props: IProps) => {

  return (
    <SafeAreaView style={styles.root}>
      <View style={styles.container}>
        <View style={styles.row1}>
          <Text style={styles.text}>First Line</Text>
        </View>

        <View style={styles.row2}>
          <Text style={styles.text}>Second Line</Text>
        </View>

        <Text style={styles.row3}>Third Line (333333333333)</Text>
      </View>
    </SafeAreaView>
  )
}


const styles = StyleSheet.create({
  root: {flex: 1},
  container: {backgroundColor: 'gray', flex: 1},
  row1: {flexDirection: "row", flex: 1, backgroundColor: 'yellow'},
  row2: {flexDirection: "row", flex: 1, backgroundColor: 'pink'},
  row3: {flexDirection: "row", flex: 1, backgroundColor: 'green'},
  text: {fontSize: 23, height: 38}
});
