import React from 'react'
import {View, StyleSheet, Image, Text} from 'react-native'

class ReadedComponent extends React.Component {
  render() {
    return (
      <View style={styles.root}>
        <View style={styles.topBg}/>
        <View style={styles.cover}/>
        <Text style={[styles.centerText, {marginTop: 32, fontSize: 17}]}>The Three-Body Problem</Text>
        <Text style={[styles.centerText, {marginTop: 6, fontSize: 15, color: '#424242'}]}>Liu CiXin</Text>
        <Text style={[styles.centerText, {marginTop: 4, fontSize: 15, color: '#757575'}]}>0% Read | 20 Hours</Text>
        <Image style={styles.icDownload} source={require('../../assets/ic_download.png')}/>
        <Image style={styles.icMoreDots} source={require('../../assets/ic_more_vertical.png')}/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  root: {
    width: 300,
    height: 270,
    marginRight: 20,
    marginTop: 10,
    backgroundColor: 'white'
  },
  topBg: {
    height: 155,
    backgroundColor: '#f00'
  },
  cover: {
    width: 105,
    height: 125,
    position: 'absolute',
    backgroundColor: '#00f',
    alignSelf: 'center',
    top: '21%'
  },
  centerText: {
    alignSelf: 'center',
  },
  icMoreDots: {
    position: 'absolute',
    alignSelf: 'flex-end',
    width: 20,
    height: 20,
    top: '60%',
    right: 6
  },
  icDownload: {
    width: 20,
    height: 20,
    alignSelf: 'flex-end',
    position: 'absolute',
    bottom: '3%',
    right: 6
  }
})

export default ReadedComponent