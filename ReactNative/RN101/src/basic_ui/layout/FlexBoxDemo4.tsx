import React from "react";
import {View, ViewProps, Text, StyleSheet, SafeAreaView, Button} from "react-native";

interface IProps extends ViewProps {
}

// "FlexBoxDemo4" is more of an issue to show you what it can be wrong
// The fix for this issue is "FlexBoxDemo5"
export const FlexBoxDemo4 = (props: IProps) => {

  return (
    <SafeAreaView >
      <View style={styles.container}>
        <View style={styles.row1}>
          <Text style={styles.text}>First Line</Text>
        </View>

        <View style={styles.row2}>
          <Text style={styles.text}>Second Line</Text>
        </View>

        <Text style={styles.row3}>Third Third ThirdThirdThirdThirdThirdThird</Text>
      </View>
    </SafeAreaView>
  )
}


const styles = StyleSheet.create({
  container: {backgroundColor: 'gray', flex: 1},
  row1: {flexDirection: "row", flex:1, backgroundColor: 'yellow'},
  row2: {flexDirection: "row", flex:1, backgroundColor: 'pink'},
  row3: {flexDirection: "row", flex: 1, backgroundColor: 'green'},
  text: {fontSize: 23, height: 38}
});
