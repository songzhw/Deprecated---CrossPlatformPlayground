import React, {Component, PureComponent} from 'react'
import {View, StyleSheet, Text, Image, TouchableOpacity} from 'react-native'
import {connect} from 'react-redux'
import {fetchRecomendHome, IRecommendResponse} from "../redux/reduxRecommend";
import {IReduxProps} from "../redux/CoreProps";
import {IReduxState} from "../redux/store";

interface Props extends IReduxProps, IRecommendResponse {
}

class RecommedScreen extends PureComponent<Props> {

  componentWillMount() {
    this.props.dispatch(fetchRecomendHome())
  }

  render() {
    let {banners} = this.props
    let src = {}
    if (banners !== undefined) {
      let imgUrl = banners[0].img
      src = {uri: imgUrl}
    }
    console.log(`szw props = ${JSON.stringify(this.props)}`)
    return (
      <View style={styles.root}>
        <Text>RecommedHome Screen</Text>
        <TouchableOpacity onPress={this.navPlay}>
          <Image source={src} style={{height: 202}} resizeMode="contain"/>
        </TouchableOpacity>
      </View>
    )
  }

  navPlay = ()=> {
    console.log(`szw click !`)
  }
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
})

const mapStateToProps = (state: IReduxState) => {
  console.log(`szw map state = ${JSON.stringify(state.reducerRecommend)}`)
  return {...state.reducerRecommend}
}

export default connect(mapStateToProps)(RecommedScreen)