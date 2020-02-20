import React, { ComponentType } from "react";
import { StyleSheet, View } from "react-native";

interface IPros {
  headerComponent: ComponentType
}

export class PullToRefreshContainer extends React.Component<IPros> {
  state = {};

  render() {
    return (
      <View>
        {this.props.headerComponent}
      </View>
    );
  }
}

const styles = StyleSheet.create({});
