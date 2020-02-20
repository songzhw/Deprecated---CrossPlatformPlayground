import React, { ComponentType } from "react";
import { StyleSheet, View, ViewProps, Animated } from "react-native";
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
        <Header/>
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
