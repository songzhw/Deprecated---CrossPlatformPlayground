import React, { Component, RefObject } from "react";
import { StyleSheet, FlatList, ListRenderItemInfo, ViewProps, View } from "react-native";

const ITEM_WIDTH = 50;
const INTERVAL_TIME = 1000;

interface IProps extends ViewProps {
  dataSize: number;
  ref: RefObject<Scrubber>;
}

// to have a "ref", Scrubber must to be a class component!
export class Scrubber extends Component<IProps> {
  private data: number[] = [];
  private intervalHandler: number = 0;
  private offset: number = 0;
  private list: FlatList<any> | null = null;

  constructor(props: IProps) {
    super(props);
    for (let i = 0; i < props.dataSize; i++) {
      this.data.push(i);
    }

    const endTime = props.dataSize * INTERVAL_TIME;

    setTimeout(() => {
      clearInterval(this.intervalHandler);
    }, endTime);
  }

  componentWillUnmount() {
    clearInterval(this.intervalHandler);
  }

  scrollAutomatically() {
    // @ts-ignore
    this.intervalHandler = setInterval(() => {
      this.offset += ITEM_WIDTH;
      this.list!.scrollToOffset({ animated: true, offset: this.offset });
    }, INTERVAL_TIME);
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
        ref={c => this.list = c}
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
    width: ITEM_WIDTH,
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

