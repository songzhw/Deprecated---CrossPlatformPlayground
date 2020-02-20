import React, { ComponentType } from "react";
import { StyleSheet, View } from "react-native";

interface IPros {
  headerComponent: ComponentType
}

export class PullToRefreshContainer extends React.Component<IPros> {
  state = {};

  render() {
    const Header = this.props.headerComponent;
    return (
      <View>
        <Header/>
      </View>
    );
  }
}

const styles = StyleSheet.create({});
