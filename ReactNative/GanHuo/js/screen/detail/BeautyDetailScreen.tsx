import React, {Component} from 'react'
import {View, StyleSheet, Text, Image, Dimensions} from 'react-native'
import {connect} from 'react-redux'
import {IReduxState} from "../../redux/store";
import {INavigationProps, IReduxProps} from "../../core/CoreProps";


interface Props extends IReduxProps, INavigationProps{

}

class BeautyDetailScreen extends Component<Props>{
  state = {
    height: 300
  }

  componentWillMount() {
    const {navigation} = this.props
    const url = navigation.getParam('img', "")
    Image.getSize(url, (width, height) => {
      let window = Dimensions.get('window')
      let screenWidth = window.width  //对于360dp的手机, screenWidth就是360
      let imageHeight = height * screenWidth / width
      this.setState({...this.state, height: imageHeight})
    }, (error) => {
      console.log(`szw load image error : ${error}`)
    })
  }


  render() {
    const url = this.props.navigation.getParam('img', "")

    return (
      <View style={styles.root}>
        <Image source={{uri: url}} style={{height: this.state.height}}/>
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