import React, { ComponentType } from "react";
import { Animated, StyleSheet, View, ViewProps } from "react-native";
import { MyFlatList } from "./MyFlatList";

interface IPros extends ViewProps {
  headerComponent: ComponentType;
  headerHeight: number;
}

export class PullToRefreshContainer extends React.Component<IPros> {
  state = { containerTop: 0 };

  headerStyle = {
    position: "absolute",
    left: 0,
    width: "100%",
    top: -this.props.headerHeight,
    transform: [{ translateY: this.state.containerTop }]
  };

  render() {
    const Header = this.props.headerComponent;
    const headHeight = this.props.headerHeight;
    return (
      <View style={styles.container}>
        <Animated.View style={this.headerStyle}>
          <Header/>
        </Animated.View>
        <MyFlatList/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {}
});


/*
1.  FlatList 的当前下拉位置，这可以通过 FlatList 的 onScroll 属性来获取当前 FlatList 的滚动距离。
2.
 */
