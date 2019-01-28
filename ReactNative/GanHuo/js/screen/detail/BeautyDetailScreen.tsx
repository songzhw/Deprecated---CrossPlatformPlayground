import React, {Component} from 'react'
import {View, StyleSheet, Text, Image} from 'react-native'
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
      this.setState({...this.state, url: url, height: height})
    }, (error) => {
      console.log(`szw load image error : ${error}`)
    })
  }


  render() {
    const {navigation} = this.props
    const url = navigation.getParam('img', "")
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