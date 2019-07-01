import React, { Component } from "react";
import { Text, StyleSheet, FlatList, ListRenderItemInfo, ViewProps } from "react-native";

interface IProps<ItemT> extends ViewProps {
  data: ReadonlyArray<ItemT>

}

export class Scrubber<T> extends Component<IProps<T>> {
  render() {

    const renderItem = (info: ListRenderItemInfo<T>) => {
      return (<Text>  {info.index} - {info.item} </Text>);
    };

    return (
      <FlatList
        data={this.props.data}
        renderItem={renderItem}/>
    );
  }
}


const styles = StyleSheet.create({
  container: {}
});
