import React, { Component } from "react";
import { View, StyleSheet, Text, Animated, Easing, Image, TouchableOpacity } from "react-native";
import { connect } from "react-redux";
import { IReduxState } from "../redux/store";
import { INavigationProps, IReduxProps } from "../core/CoreProps";
import PlayController from "../component/PlayController";

interface Props extends IReduxProps, INavigationProps {
}

class PlayScreen extends Component<Props> {
  animDegree = new Animated.Value(0);

  componentDidMount(): void {
  }

  render() {
    const { navigation } = this.props;
    let coverUrl = navigation.getParam("url");
    let title = navigation.getParam("title");
    return (
      <View style={styles.root}>
        <Image source={{ uri: coverUrl }} style={styles.cover} resizeMode="cover"/>
        <Text style={styles.title}> {title} </Text>
        <PlayController/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: "center"
  },
  cover: {
    width: 202,
    height: 202,
    marginTop: 20
  },
  title: {
    marginTop: 45,
    fontSize: 30,
    textAlign: "center",
    color: "#1e1e1e"
  }
});

const mapStateToProps = (state: IReduxState) => {
  return {};
};

export default connect(mapStateToProps)(PlayScreen);