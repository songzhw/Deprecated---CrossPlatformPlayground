import React from "react";
import { View, StyleSheet, Button, Animated, Easing } from "react-native";
import { WaveView } from "../../ui/svg/WaveView";


export class SvgAnimDemo6_Wave extends React.Component {
  state = {progress: new Animated.Value(0), height: 0}

  startAnim = () => {
    this.state.progress.addListener(({ value }) => {
      this.setState({height: value});
    });

    Animated.timing(this.state.progress, {
      toValue: 100,
      duration: 12000,
      useNativeDriver: true,
      easing: Easing.linear
    }).start();
    console.log(`szw start anim`)
  };

  resetAnim = () => {
    this.state.progress.stopAnimation();  // 停止当前动画
    this.state.progress.setValue(0);  // 重置动画值
  };

  render() {
    console.log(`szw getHeight: `, this.state.height)
    return (
      <View style={_styles.container}>
        <Button title={"start anim"} onPress={this.startAnim}/>
        <Button title={"reset anim"} onPress={this.resetAnim}/>

        <WaveView
          style={_styles.waveBall}
          H={this.state.height}
          waveParams={[
            { A: 10, T: 180, fill: "#62c2ff" },
            { A: 15, T: 140, fill: "#0087dc" },
            { A: 20, T: 100, fill: "#1aa7ff" }
          ]}
          animated={true}
        />
      </View>
    );
  }
}


const _styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 10,
    marginHorizontal: 20,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: StyleSheet.hairlineWidth
  },
  wave: {
    width: 100,
    aspectRatio: 1,
    overflow: "hidden",
    backgroundColor: "white"
  },
  waveBall: {
    width: 100,
    aspectRatio: 1,
    borderRadius: 50,
    overflow: "hidden"
  }
});