import React, { useState } from "react";
import { FlatList, ListRenderItemInfo, StyleSheet, Text, View, ViewProps } from "react-native";
import { Tea } from "./ListPojo";

interface IProps extends ViewProps {
}

// http://www.mocky.io/v2/5e4c51d33100002d00d8beef 返回1-7的数据
// http://www.mocky.io/v2/5e4c5253310000e2cad8bef3 返回8-12的数据
export const FlatListDemo = (props: IProps) => {
  const [data, setData] = useState<Tea[]>([{ id: 100, name: "乌龙" }, { id: 101, name: "龙井" },
    { id: 102, name: "魁龙珠" }, { id: 103, name: "猴魁" }, { id: 104, name: "毛尖" }]);

  function renderRow(itemWrapper: ListRenderItemInfo<Tea>) {
    const item = itemWrapper.item;
    return (
      <View style={{ height: 150, backgroundColor: "white", justifyContent: "center", alignItems: "center" }}>
        <Text>{item.id} -- {item.name}</Text>
      </View>
    );
  }

  function renderDivider() {
    return <View style={styles.divider}/>;
  }

  function renderEmptyView() {
    return <Text> No Data At All </Text>
  }

  return (
    <View>
      <FlatList
        keyExtractor={(item, index) => index + "" + item.id}
        data={[]}
        renderItem={renderRow}
        ItemSeparatorComponent={renderDivider}
        ListEmptyComponent={renderEmptyView}
      />
    </View>
  );

};


const styles = StyleSheet.create({
  container: {},
  divider: {
    //不写width就是divider全屏
    height:1,
    backgroundColor: "black"
  }
});
