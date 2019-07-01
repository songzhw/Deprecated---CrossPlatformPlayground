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

    return (
      <Text style={styles.item}>  {info.index} - {info.item} </Text>
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
  item: {
    width: 50
  }
});

