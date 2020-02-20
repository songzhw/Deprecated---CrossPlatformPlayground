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
        <MyFlatList/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
