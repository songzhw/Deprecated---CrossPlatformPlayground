import React, { ComponentType } from "react";
import { Animated, StyleSheet, View } from "react-native";

interface IPros {
  headerComponent: ComponentType
}

export class PullToRefreshContainer extends React.Component<IPros> {
  state = {};

  render() {
    const Header = this.props.headerComponent;
    return (
      <View>
        <Animated.View style={{position:'absolute', top: -10}}>
          <Header/>
        </Animated.View>
      </View>
    );
  }
}

const styles = StyleSheet.create({});
