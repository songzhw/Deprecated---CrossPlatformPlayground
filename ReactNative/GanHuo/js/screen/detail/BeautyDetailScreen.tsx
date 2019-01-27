import React, {Component} from 'react'
import {View, StyleSheet, Text, Image} from 'react-native'
import {connect} from 'react-redux'

class BeautyDetailScreen extends Component {

  componentWillMount() {
    const {navigation} = this.props
    const url = navigation.getParam('img', "")
    Image.getSize(url)
      .then( (width, height) => {
        console.log(`szw size = ${width}, ${height}`)
      })
      .catch( error => {
        console.log(`szw load image error : ${error}`)
      })
  }


  render() {
    return (
      <View style={styles.root}>
        <Image source={{uri: ""}} style={{}}/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
})

const mapStateToProps = (state: any) => {
  return {}
}

export default connect(mapStateToProps)(BeautyDetailScreen)