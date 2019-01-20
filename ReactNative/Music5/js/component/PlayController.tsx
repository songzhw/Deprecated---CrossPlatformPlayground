import React from 'react'
import {View, StyleSheet, Text, Image} from 'react-native'

class PlayController extends React.Component {
  state = {}

  render() {
    return (
      <View style={styles.root}>
        <Text>TODO seekbak</Text>
        <View style={styles.layoutButtons}>
          <Image style={styles.button} source={require('../../assets/icon_play.png')}/>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  root: {},
  layoutButtons: {
    flexDirection: 'row'
  },
  button: {
    width: 40,
    height: 40
  }
})

export default PlayController