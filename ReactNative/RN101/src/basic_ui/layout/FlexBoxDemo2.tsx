import React from "react";
import {View, ViewProps, Text, StyleSheet, SafeAreaView} from "react-native";

interface IProps extends ViewProps {
}

export const FlexBoxDemo2 = (props: IProps) => {

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={{width: 100, height: 100, backgroundColor: "red"}}/>
        <View style={{width: 300, height: 300, backgroundColor: "blue"}}/>
      </View>
    </SafeAreaView>
  )
}


const styles = StyleSheet.create({
  container: {backgroundColor: 'gray', flex:1}
});
