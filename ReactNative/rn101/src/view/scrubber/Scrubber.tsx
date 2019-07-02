import React, { Component, RefObject } from "react";
import { StyleSheet, FlatList, ListRenderItemInfo, ViewProps, View } from "react-native";

interface IProps extends ViewProps {
  dataSize: number;
  ref: RefObject<Scrubber>;
}

// to have a "ref", Scrubber must to be a class component!
export class Scrubber extends Component<IProps> {
  private data: number[] = [];

  constructor(props: IProps) {
    super(props);
    for (let i = 0; i < props.dataSize; i++) {
      this.data.push(i);
    }
  }

  scrollAutomatically(){

  }

  renderItem = (info: ListRenderItemInfo<number>) => {
    const index = info.index;
    const style = index % 5 === 0 ? styles.textLong : styles.textShort;
    return (
      <View style={[styles.itemContainer]}>
        <View style={[styles.textCommon, style]}/>
      </View>
    );
  };

  render() {
    return (
      <FlatList
        data={this.data}
        renderItem={this.renderItem}
        keyExtractor={(item, index) => index + ""}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ justifyContent: "center" }}
      />
    );
  }
}


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

