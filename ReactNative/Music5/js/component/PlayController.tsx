import React from 'react'
import {View, StyleSheet, Text, Image, Slider} from 'react-native'
import PlayButton from "./PlayButton";
import Video from "react-native-video";

class PlayController extends React.Component {
  state = {
    isPaused : true
  }
  audioUrl = 'https://s0.vocaroo.com/media/download_temp/Vocaroo_s08Sc4aN9zAv.mp3'

  render() {
    return (
      <View style={styles.root}>
        <Slider style={styles.slider}/>
        <View style={styles.layoutButtons}>
          <PlayButton onPress={this.onPressPrevious} url={require('../../assets/icon_prev.png')} style={styles.button}/>
          <PlayButton onPress={this.onTogglePlayPause} url={require('../../assets/icon_play.png')} style={styles.button}/>
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

  onTogglePlayPause = () => {
    let {isPaused} = this.state
    this.setState({...this.state, isPaused: !isPaused})
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