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
  private playCtrl: PlayController | null = null;
  private sleepHandler: number = 0;

  componentDidMount(): void {
    this.startAnimation();
  }

  componentWillUnmount(): void {
    if (this.sleepHandler !== 0) {
      clearTimeout(this.sleepHandler);
    }
  }

  startAnimation() {
    this.rotateDegree.setValue(0);
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

    let settingView = this.renderSetting();
    return (
      <View style={styles.root}>
        {settingView}
        <View style={{ height: 20 }}/>
        <Animated.View style={{ transform: animStyles }}>
          <Image source={{ uri: coverUrl }} style={styles.cover} resizeMode="cover"/>
        </Animated.View>
        <Text style={styles.title}> {title} </Text>
        <PlayController ref={ref => this.playCtrl = ref}/>
      </View>
    );
  }

  renderSetting = () => {
    return (
      <View style={styles.settings}>
        <TouchableOpacity onPress={this.pressSetting}>
          <Image style={styles.settingIcon} source={require("../../assets/icon_clock.png")}/>
        </TouchableOpacity>
      </View>
    );
  };

  pressSetting = () => {
    console.log(`szw PlayScreen click setting`);
    this.sleepHandler = setTimeout(() => {
      // 不用setState()来传给<PlayControl>的原因, 是因为PlayControl里已经有一个state在控制isPause了. 现在再加一个props控制isPause, 那render()就会混乱
      // 解决办法就是"归一". 要么PlayControl就没有state.isPause, 交给parent; 要么就是parent经过public方法, 全交给PlayControl
      this.playCtrl!.pause();
    }, 5000);
  };
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: "center"
  },
  cover: {
    width: 180,
    height: 180,
    borderRadius: 90
  },
  title: {
    marginTop: 45,
    fontSize: 30,
    textAlign: "center",
    color: "#1e1e1e"
  },
  settings: {
    width: 32,
    height: 32,
    position: "absolute",
    right: 20,
    top: 20
  },
  settingIcon: {
    width: 32,
    height: 32
  }
});

const mapStateToProps = (state: IReduxState) => {
  return {};
};

export default connect(mapStateToProps)(PlayScreen);

// 1. 加<View style={{height: 20}}/>, 而不是在styles.cover里加marginTop, 是因为后者加了之后, 旋转的锚点就不对了, 会出现奇怪的转着转着偏移往上的情况