import React, { Component, RefObject } from "react";
import { Text, StyleSheet, FlatList, ListRenderItemInfo, ViewProps, View } from "react-native";

interface IProps extends ViewProps {
  dataSize: number;
  ref: RefObject<View>;
}

export const Scrubber = (props: IProps) => {

  const data = [];
  for (let i = 0; i < props.dataSize; i++) {
    data.push(i);
  }

  const renderItem = (info: ListRenderItemInfo<number>) => {
    const text = "|";
    const index = info.index;
    const style = index % 5 === 0 ? styles.textLong : styles.textShort;
    return (
      <View style={[styles.itemContainer]}>
        <View style={[styles.textCommon, style]}/>
      </View>
    );
  };

  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={(item, index) => index + ""}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ justifyContent: "center" }}
    />
  );
};


const styles = StyleSheet.create({
  container: {},
  itemContainer: {
    width: 50,
    height: 150,
    justifyContent: "center",
    alignItems: "center"
  },
  textLong: {
    height: 150
  },
  textShort: {
    height: 88
  },
  textCommon: {
    width: 10,
    backgroundColor: "black"
  }
});

