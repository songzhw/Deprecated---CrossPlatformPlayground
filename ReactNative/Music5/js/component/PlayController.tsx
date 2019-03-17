import React from "react";
import { View, StyleSheet, Text, Image, Slider } from "react-native";
import PlayButton from "./PlayButton";
import Video, { OnLoadData } from "react-native-video";


class PlayController extends React.Component {
  iconPause = require("../../assets/icon_pause.png");
  iconPlay = require("../../assets/icon_play.png");
  audioUrl = "https://s0.vocaroo.com/media/download_temp/Vocaroo_s08Sc4aN9zAv.mp3";

  state = {
    isPaused: false,
    iconPlayPause: this.iconPause,
    duration: 0,
    progress: 0
  };
  private player: Video | null = null;

  // 仅在更新时被调用. 刚进入本页时, 此方法不会被调用
  componentWillReceiveProps(nextProps: Readonly<any>, nextContext: any): void {
    console.log(`szw componentWillReceiveProps ${JSON.stringify(nextProps)}`);
  }


  render() {
    return (
      <View style={styles.root}>
        <Slider
          style={styles.slider}
          minimumValue={0}
          maximumValue={this.state.duration}
          value={this.state.progress}
          onValueChange={this.onDragSlider}
        />
        <View style={styles.layoutButtons}>
          <PlayButton onPress={this.onPressPrevious} url={require("../../assets/icon_prev.png")} style={styles.button}/>
          <PlayButton onPress={this.onTogglePlayPause} url={this.state.iconPlayPause} style={styles.button}/>
          <PlayButton onPress={this.onPressNext} url={require("../../assets/icon_next.png")} style={styles.button}/>
        </View>

        <Video
          ref={ref => this.player = ref}
          source={{ uri: this.audioUrl }}
          paused={this.state.isPaused}
          onLoad={this.onLoaded}
          progressUpdateInterval={1000.0}
          onProgress={this.onProgress}
        />
      </View>
    );
  }

  onDragSlider = (value: number) => {
    console.log(`szw onValueChange() : ${value}`);
    this.player!.seek(value);
  };

  onLoaded = (arg: OnLoadData) => {
    // console.log(`szw onLoaded = ${JSON.stringify(arg)}`)
    this.setState({ ...this.state, duration: arg.duration });
  };

  // arg is {"seekableDuration":62.511,"playableDuration":62.511,"currentTime":0.875}
  onProgress = ({ currentTime }: { currentTime: number }) => {
    // console.log(`szw onProgress = ${JSON.stringify(currentTime)}`)
    this.setState({ ...this.state, progress: currentTime });
  };

  onPressPrevious = () => {

  };

  onPressNext = () => {

  };
  // first : paused = true, show play icon
  // click: paused = false, should show pause icon
  onTogglePlayPause = () => {
    let { isPaused } = this.state;
    let icon = isPaused ? this.iconPause : this.iconPlay;
    this.setState({ ...this.state, isPaused: !isPaused, iconPlayPause: icon });
  };

  pause() {
    this.setState({ ...this.state, isPaused: true, iconPlayPause: this.iconPlay });
  }
}

const styles = StyleSheet.create({
  root: {},
  slider: {
    marginTop: 50
  },
  layoutButtons: {
    flexDirection: "row",
    width: 300,
    marginTop: 40
  },
  button: {
    flex: 1
  }
});

export default PlayController;