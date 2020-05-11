import React from "react";
import {View, ViewProps, Text, StyleSheet, SafeAreaView, Button} from "react-native";

interface IProps extends ViewProps {
}

export const FlexBoxDemo3 = (props: IProps) => {

  return (
    // <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.row1}>
          <Text style={{fontSize: 23}}>First Line</Text>
        </View>

        <View style={styles.row2}>
          <Text style={{fontSize: 23}}>Second Line</Text>
        </View>
      </View>
    // </SafeAreaView>
  )
}


const styles = StyleSheet.create({
  container: {backgroundColor: 'gray', height: 140},
  row1: {flexDirection: "row", flex:1, backgroundColor: 'yellow'},
  row2: {flexDirection: "row", height: 35, backgroundColor: 'pink'}
});
