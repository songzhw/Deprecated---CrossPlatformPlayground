import React, { Component } from 'react'
import { View, StyleSheet, Text } from 'react-native'
import {connect} from 'react-redux'
import {INavigationProps, IReduxProps} from "../../core/CoreProps";
import Video from "react-native-video";

interface Props extends IReduxProps, INavigationProps{}
class VideoScreen extends Component<Props>{
  url = ""
  private player: Video | null = null;

  componentWillMount() {
    this.url = this.props.navigation.getParam("video", "")
  }


  render(){
    console.log(`szw video = ${this.url}`)
    return (
      <View style={styles.root}>
        <Text>VideoScreen Screen</Text>
        <Video
          ref={(ref) => this.player = ref}
          source={{uri: this.url}}
          style={styles.videoPlayer}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  videoPlayer: {
    height: 200
  }
})

const mapStateToProps = (state: any) => {
  return {

  }
}

export default connect(mapStateToProps)(VideoScreen)