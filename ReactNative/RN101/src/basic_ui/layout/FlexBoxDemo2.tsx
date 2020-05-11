import React from "react";
import {View, ViewProps, Text, StyleSheet, SafeAreaView, Button} from "react-native";

interface IProps extends ViewProps {
}

export const FlexBoxDemo2 = (props: IProps) => {

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={{fontSize: 23}}>First Line</Text>
        <Text style={{fontSize: 20}}>right item</Text>
      </View>

      <View>
        <Text style={{fontSize: 23}}>Second Line</Text>
        <Text style={{fontSize: 20}}>second item</Text>
      </View>
    </SafeAreaView>
  )
}


const styles = StyleSheet.create({
  container: {backgroundColor: 'gray', flex: 1}
});
