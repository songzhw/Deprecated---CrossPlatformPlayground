import React, { ComponentType } from "react";
import { StyleSheet, View, ViewProps } from "react-native";
import { MyFlatList } from "./MyFlatList";

interface IPros extends ViewProps{
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
    backgroundColor: "grey"
  }
});
