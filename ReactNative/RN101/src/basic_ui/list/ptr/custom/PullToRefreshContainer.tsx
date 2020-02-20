import React, { ComponentType } from "react";
import { Animated, StyleSheet, View } from "react-native";
import { MyFlatList } from "./MyFlatList";

interface IPros {
  headerComponent: ComponentType
}

export class PullToRefreshContainer extends React.Component<IPros> {
  state = {};

  render() {
    const Header = this.props.headerComponent;
    return (
      <View style={styles.container}>
        {/*<Animated.View style={{ position: "absolute", top: -7, height: 30, backgroundColor: "blue" }}>*/}
        {/*  <Header/>*/}
        {/*</Animated.View>*/}
        <MyFlatList/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column"
  }
});
