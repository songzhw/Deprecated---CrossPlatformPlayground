import React, { Component } from "react";
import { View, StyleSheet, Text, Animated, Easing, Image, TouchableOpacity } from "react-native";
import { connect } from "react-redux";
import { IReduxState } from "../redux/store";
import { INavigationProps, IReduxProps } from "../core/CoreProps";
import PlayController from "../component/PlayController";

interface Props extends IReduxProps, INavigationProps {
}

class PlayScreen extends Component<Props> {
  rotateDegree = new Animated.Value(0);

  componentDidMount(): void {
    this.startAnimation();
  }

  startAnimation() {
    Animated.timing(this.rotateDegree, { toValue: 1, duration: 36000 })
      .start(() => this.startAnimation());
  }

  render() {
    const { navigation } = this.props;
    let coverUrl = navigation.getParam("url");
    let title = navigation.getParam("title");

    let animStyles = [];
    animStyles.push({
      rotate: this.rotateDegree.interpolate({
        inputRange: [0, 1],
        outputRange: ["0deg", "360deg"]
      })
    }); // rotate即是3D旋转中的rotateZ

    return (
      <View style={styles.root}>
        <Animated.View style={{ transform: animStyles }}>
          <Image source={{ uri: coverUrl }} style={styles.cover} resizeMode="cover"/>
        </Animated.View>
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
    borderRadius: 101,
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