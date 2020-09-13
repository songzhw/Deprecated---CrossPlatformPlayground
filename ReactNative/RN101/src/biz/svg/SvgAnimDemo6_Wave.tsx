import React from "react";
import { View, StyleSheet, Button, Animated, Easing } from "react-native";
import { WaveView } from "../../ui/svg/WaveView";


export class SvgAnimDemo6_Wave extends React.Component {
  state = {height: 0, progress: new Animated.Value(0)}

  startAnim = () => {
    this.state.progress.addListener(({ value }: { value: number }) => {
      const previousHeight = this.state.height
      if(value - previousHeight > 10){
        this.setState({height: value})
      }
    });

    Animated.timing(this.state.progress, {
      toValue: 100,
      duration: 8000,
      useNativeDriver: true,
      easing: Easing.linear
    }).start();
  };

  resetAnim = () => {
    this.state.progress.stopAnimation();  // 停止当前动画
    this.state.progress.setValue(0);  // 重置动画值
    this.setState({height: 0})
  };

  render() {
    return (
      <View style={_styles.container}>
        <Button title={"start anim"} onPress={this.startAnim}/>
        <View style={{height: 10}}/>
        <Button title={"reset anim"} onPress={this.resetAnim}/>
        <View style={{height: 10}}/>

        <WaveView
          style={_styles.waveBall}
          waterHeight={this.state.height}
          waveParams={[
            { waveHeight: 10, waveWidth: 180, fillColor: "#62c2ff" },
            { waveHeight: 15, waveWidth: 140, fillColor: "#0087dc" },
            { waveHeight: 20, waveWidth: 100, fillColor: "#1aa7ff" }
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

