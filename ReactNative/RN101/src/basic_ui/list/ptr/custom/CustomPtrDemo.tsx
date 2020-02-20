import React from "react";
import { StyleSheet, View, ViewProps } from "react-native";
import { MyFlatList } from "./MyFlatList";

interface IProps extends ViewProps {
}

export const CustomPtrDemo = (props: IProps) => {

  return (
    <View>
      <MyFlatList/>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {}
});
