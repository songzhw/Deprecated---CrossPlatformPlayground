import React from "react";
import { View, ViewProps, Text, StyleSheet, FlatList, VirtualizedListProps, ListRenderItemInfo } from "react-native";

interface IProps<ItemT> extends VirtualizedListProps<ItemT> {
  data: ReadonlyArray<ItemT>

}

export const Scrubber = <T extends {}>(props: IProps<T>) => {

  const renderItem = (info: ListRenderItemInfo<T>) => {

    return null;
  };

  return (
    <FlatList
      data={props.data}
      renderItem={renderItem}/>
  );
};


const styles = StyleSheet.create({
  container: {}
});