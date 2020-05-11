import React from "react";
import {View, ViewProps, Text, StyleSheet} from "react-native";

interface IProps extends ViewProps {
}

export const FlexBoxDemo2 = (props: IProps) => {

  return (
    <View style={styles.container}>

    </View>
  )
}


const styles = StyleSheet.create({
  container: {backgroundColor: 'grey'}
});
