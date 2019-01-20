import React, {Component, PureComponent} from 'react'
import {View, StyleSheet, Text, Image, TouchableOpacity} from 'react-native'
import {connect} from 'react-redux'
import {fetchRecomendHome, IRecommendResponse} from "../redux/reduxRecommend";
import {INavigationProps, IReduxProps} from "../core/CoreProps";
import {IReduxState} from "../redux/store";

interface Props extends IReduxProps, IRecommendResponse, INavigationProps {
}

class RecommedScreen extends PureComponent<Props> {

  componentWillMount() {
    this.props.dispatch(fetchRecomendHome())
  }

  render() {
    let {banners} = this.props
    let url = ''
    let src = {}
    if (banners !== undefined) {
      url = banners[0].img
      src = {uri: url}
    }
    console.log(`szw props = ${JSON.stringify(this.props)}`)
    return (
      <View style={styles.root}>
        <Text>RecommedHome Screen</Text>
        <TouchableOpacity onPress={() => this.navPlay(url)}>
          <Image source={src} style={{height: 202}} resizeMode="contain"/>
        </TouchableOpacity>
      </View>
    )
  }

  navPlay = (url: string)=> {
    console.log(`szw click !`)
    this.props.navigation.navigate('PlayScreen', {url: url})
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