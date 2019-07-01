import React, { Component } from "react";
import { Text, StyleSheet, FlatList, ListRenderItemInfo, ViewProps } from "react-native";

interface IProps extends ViewProps {
  dataSize: number

}

export const Scrubber = (props: IProps) => {

  const data = [];
  for (let i = 0; i < props.dataSize; i++) {
    data.push(i);
  }

  const renderItem = (info: ListRenderItemInfo<number>) => {
    const text = "|";
    const index = info.index;
    const style = index % 5 === 0 ? [styles.itemCommon, styles.itemLong] : [styles.itemCommon, styles.itemShort];
    return (
      <Text style={style}>  {text} </Text>
    );
  };

  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={(item, index) => index + ""}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
    />
  );
};


const styles = StyleSheet.create({
  container: {},
  itemCommon: {
    width: 50
  },
  itemLong: {
    height: 150,
    backgroundColor: 'red'
  },
  itemShort: {
    height: 50,
    backgroundColor: 'blue'
  }
});

