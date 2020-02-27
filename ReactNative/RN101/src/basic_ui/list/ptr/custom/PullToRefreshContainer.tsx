import React, { ComponentType } from "react";
import { Animated, StyleSheet, View, ViewProps } from "react-native";
import { MyFlatList } from "./MyFlatList";

interface IPros extends ViewProps {
  headerComponent: ComponentType;
  headerHeight: number;
}

export class PullToRefreshContainer extends React.Component<IPros> {
  state = {};

  render() {
    const Header = this.props.headerComponent;
    const headHeight = this.props.headerHeight;
    return (
      <View style={styles.container}>
        <Animated.View style={{ position: "absolute", top: -headHeight, height: 30, backgroundColor: "blue" }}>
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
