import React from 'react'
import {View, StyleSheet, Text, Image, Slider} from 'react-native'
import PlayButton from "./PlayButton";
import Video from "react-native-video";

class PlayController extends React.Component {
  iconPause = require('../../assets/icon_pause.png')
  iconPlay = require('../../assets/icon_play.png')
  audioUrl = 'https://s0.vocaroo.com/media/download_temp/Vocaroo_s08Sc4aN9zAv.mp3'

  state = {
    isPaused: true,
    iconPlayPause: this.iconPlay
  }


  render() {
    return (
      <View style={styles.root}>
        <Slider style={styles.slider}/>
        <View style={styles.layoutButtons}>
          <PlayButton onPress={this.onPressPrevious} url={require('../../assets/icon_prev.png')} style={styles.button}/>
          <PlayButton onPress={this.onTogglePlayPause} url={this.state.iconPlayPause} style={styles.button}/>
          <PlayButton onPress={this.onPressNext} url={require('../../assets/icon_next.png')} style={styles.button}/>
        </View>

        <Video source={{uri: this.audioUrl}}
               paused={this.state.isPaused}

        />
      </View>
    )
  }

  onPressPrevious = () => {

  }

  onPressNext = () => {

  }
  // first : paused = true, show play icon
  // click: paused = false, should show pause icon
  onTogglePlayPause = () => {
    let {isPaused} = this.state
    let icon = isPaused ? this.iconPause : this.iconPlay
    this.setState({...this.state, isPaused: !isPaused, iconPlayPause: icon})
  }
}

const styles = StyleSheet.create({
  root: {},
  slider: {
    marginTop: 50
  },
  layoutButtons: {
    flexDirection: 'row',
    width: 300,
    marginTop: 40
  },
  button: {
    flex: 1,
  }
})

export default PlayController