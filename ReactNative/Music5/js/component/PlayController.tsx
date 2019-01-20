import React from 'react'
import {View, StyleSheet, Text, Image, Slider} from 'react-native'
import PlayButton from "./PlayButton";

class PlayController extends React.Component {
  state = {}

  render() {
    return (
      <View style={styles.root}>
        <Slider style={styles.slider}/>
        <View style={styles.layoutButtons}>
          <PlayButton onPress={this.onPressPrevious} url={require('../../assets/icon_prev.png')} style={styles.button}/>
          <PlayButton onPress={this.onTogglePlayPause} url={require('../../assets/icon_play.png')} style={styles.button}/>
          <PlayButton onPress={this.onPressNext} url={require('../../assets/icon_next.png')} style={styles.button}/>
        </View>
      </View>
    )
  }

  onPressPrevious = () => {

  }

  onPressNext = () => {

  }

  onTogglePlayPause = () => {

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